import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    Input,
    OnInit,
    QueryList,
    TemplateRef
} from '@angular/core';
import {InternalPropertyItemMeta} from './property-item-meta';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PropertyItemTemplateDirective} from './property-item-template.directive';

@Component({
    selector: 'ngx-property-grid',
    template: `
        <div class="property-grid" [style.width]="width">
            <div class="card">
                <table class="property-grid-table" [style.width]="width">
                    <tbody>
                    <tr *ngFor="let row of rows" [ngClass]="row.type == 'group'? 'property-grid-group-row':'property-grid-row'">

                        <!--<td [attr.colspan]="row.colspan"></td>-->
                        <td *ngIf="row.type == 'group'" colspan="2" class="property-grid-group">{{row.name}}</td>
                        <td *ngIf="row.type != 'group' && row.colSpan2 != true" [width]="labelWidth" colspan="1"
                            class="property-grid-label">
                            {{row.name}}
                            <span *ngIf="row.description" [title]="row.description">[?]</span>
                        </td>
                        <td *ngIf="row.type != 'group'" [attr.colspan]="row.colSpan2 == true ? 2 : 1" class="property-grid-control">
                            <custom-component
                                *ngIf="!getTemplate(row.type)"
                                [componentType]="row.componentType"
                                [componentOptions]="row.componentOptions"
                                [value]="options[row.key]"
                                (valueChange)="convertValue(row, $event)">
                            </custom-component>
                            <ng-container *ngTemplateOutlet="getTemplate(row.type); context: {$implicit: propertyValue(row)}">
                            </ng-container>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div *ngFor="let item of subItems" class="internal-property-grid card">
                <div (click)="pg.toggle()" class="property-grid-header" [style.width]="'100%'"><b>{{item.name}}</b></div>
                <ngx-property-grid
                    [state]="item.initState"
                    [@internalPropertyGrid]="pg.state"
                    [options]="options[item.key]"
                    [width]="width"
                    [labelWidth]="labelWidth"
                    [templateMap]="templateMap"
                    style="display: block;overflow: hidden"
                    #pg>
                </ngx-property-grid>
            </div>
        </div>
    `,
    styles: [
            `
            .property-grid {
                /*border: solid 1px #95B8E7;*/
            }

            .property-grid-table {
                border-spacing: 0;
                border-top: 1px solid #dbdbdb;
                padding: 5px
            }

            .property-grid-group {
                background-color: white;
                font-weight: bold;
                color: #616161;
                padding-top: 8px;
                padding-bottom: 5px;
            }

            .property-grid-label, .property-grid-control {
                border: dotted 1px #ccc;
                padding: 2px 5px;
            }

            .internal-property-grid {
                margin-top: 12px;
            }

            .internal-property-grid .property-grid {
                border-width: 0;
            }

            .internal-property-grid .property-grid-header {
                margin-bottom: 5px;
                background-color: #f5f5f5;
                padding-bottom: 5px;
                padding-top: 5px;
                padding-left: 5px;
                box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
                -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
            }

            .internal-property-grid .property-grid-table {
                border-width: 0;
                /*border-top: 1px solid #dbdbdb;*/
            }

            .card {
                background-color: #fff;
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2);
                display: flex;
                flex-flow: row wrap;
                /*margin: 5px 20px;*/
                padding: 0;
            }
            .internal-property-grid ngx-property-grid .card {
                background-color: unset;
                box-shadow: unset;
                display: unset;
                flex-flow: unset;
                /*margin: 5px 20px;*/
                padding: unset;
            }
        `
    ],
    animations: [
        trigger('internalPropertyGrid', [
            state('hidden', style({
                height: '0',
                // overflow: 'hidden'
            })),
            state('visible', style({
                height: '*'
            })),
            transition('visible <=> hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyGridComponent implements OnInit, AfterContentInit {
    private _options: any;
    private _meta: any;

    @Input()
    public templateMap: any;

    @Input()
    public state = 'visible';

    @Input()
    width: string | number;


    @Input()
    labelWidth: string | number = '120px';

    @Input()
    public set meta(v: any) {
        this._meta = v;
        this.initMeta();
    }

    public get meta(): any {
        return this._meta;
    }

    @Input()
    public set options(v: any) {
        this._options = v;
        if (v.__meta__) {
            this.meta = v.__meta__;
        }
    }

    public get options(): any {
        return this._options;
    }

    @ContentChildren(PropertyItemTemplateDirective) templates: QueryList<any>;


    public rows: Array<InternalGroup | InternalPropertyItemMeta | any>;
    public subItems: InternalPropertyItemMeta[];

    constructor(private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        console.log(this);
    }

    ngAfterContentInit(): void {
        if (this.templates.length) {
            this.templateMap = {};
        }

        this.templates.forEach((item) => {
            this.templateMap[item.name] = item.template;
        });
    }

    public getTemplate(type: string): TemplateRef<any> {
        if (this.templateMap) {
            return type ? this.templateMap[type] : this.templateMap['default'];
        } else {
            return null;
        }
    }

    public propertyValue(meta: InternalPropertyItemMeta): PropertyValue {
        return new PropertyValue(this.options, meta);
    }

    public toggle(): void {
        this.state = this.state === 'visible' ? 'hidden' : 'visible';
    }

    public convertValue(meta: InternalPropertyItemMeta, val: any): void {
        this.options[meta.key] = meta.valueConvert ? meta.valueConvert(val) : val;
    }

    private initMeta(): void {
        const meta: object = this.meta;
        if (!meta) {
            this.rows = [];
            this.subItems = [];
            return;
        }

        const groups: InternalGroup[] = [new InternalGroup(undefined)];
        const subItems: InternalPropertyItemMeta[] = [];
        for (const i in meta) {
            if (!meta.hasOwnProperty(i)) {
                continue;
            }
            const v: InternalPropertyItemMeta = meta[i];
            if (v.hidden) {
                continue;
            }
            if (v.type === 'subItems') {
                subItems.push(v);
                continue;
            }

            let group = groups.find(o => o.name === v.group);
            if (!group) {
                group = new InternalGroup(v.group);
                groups.push(group);
            }
            group.items.push(v);
        }
        groups.forEach(o => o.items.sort((a, b) => a.order - b.order));
        const rows: Array<InternalGroup | InternalPropertyItemMeta> = [];
        for (const g of groups) {
            if (g.name) {
                rows.push(g);
            }
            g.items.forEach(o => rows.push(o));
        }
        this.rows = rows;
        this.subItems = subItems;
    }
}

export class PropertyValue {
    public get value(): any {
        return this.o[this.meta.key];
    }

    public set value(val: any) {
        this.o[this.meta.key] = this.meta.valueConvert ? this.meta.valueConvert(val) : val;
    }

    constructor(private o: any, public meta: InternalPropertyItemMeta) {
    }
}

export class InternalGroup {
    public readonly items: InternalPropertyItemMeta[] = [];
    public type = 'group';

    constructor(public name: string) {
    }
}
