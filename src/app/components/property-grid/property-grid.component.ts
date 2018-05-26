import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, TemplateRef} from '@angular/core';
import {InternalPropertyGridItemMeta} from './property-grid-item-meta';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {PropertyItemTemplateDirective} from './property-item-template.directive';

@Component({
    selector: 'ngx-property-grid',
    template: `
        <div class="property-grid" [ngStyle]="{width: width}">
            <table class="property-grid-table" [ngStyle]="{width: width}">
                <tbody>
                <tr *ngFor="let row of rows" [ngClass]="row.type == 'group'? 'property-grid-group-row':'property-grid-row'">

                    <!--<td [attr.colspan]="row.colspan"></td>-->
                    <td *ngIf="row.type == 'group'" colspan="2" class="property-grid-group">{{row.name}}</td>
                    <td *ngIf="row.type != 'group' && row.colSpan2 != true" [width]="labelWidth" colspan="1" class="property-grid-label">
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

            <div *ngFor="let item of subItems" class="internal-property-grid">
                <div (click)="pg.toggle()" class="property-grid-header"><b>{{item.name}}</b></div>
                <ngx-property-grid
                    [state]="item.initState"
                    [@internalPropertyGrid]="pg.state"
                    [options]="options[item.key]"
                    [width]="width"
                    [labelWidth]="labelWidth"
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
                border: solid 1px #ddd;
                border-spacing: 0;
                border-top: 1px solid #dbdbdb;
            }

            .property-grid-group {
                background-color: #368bffeb;
                font-weight: bold;
                color: white;
            }

            .property-grid-label, .property-grid-control {
                border: dotted 1px #ccc;
                padding: 2px 5px;
            }

            .internal-property-grid {
                margin-top: 12px;
                -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
                box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
                border: solid 1px #ddd;
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
    ]
})
export class PropertyGridComponent implements OnInit, AfterContentInit {
    private _options: any;
    private _meta: any;
    private _templateMap: any;

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
        if (v.__meta) {
            this.meta = v.__meta;
        }
    }

    public get options(): any {
        return this._options;
    }

    @ContentChildren(PropertyItemTemplateDirective) templates: QueryList<any>;


    public rows: Array<InternalGroup | InternalPropertyGridItemMeta | any>;
    public subItems: InternalPropertyGridItemMeta[];

    constructor() {
    }

    ngOnInit() {
        console.log(this);
    }

    ngAfterContentInit(): void {
        if (this.templates.length) {
            this._templateMap = {};
        }

        this.templates.forEach((item) => {
            this._templateMap[item.name] = item.template;
        });
    }
    public getTemplate(type: string): TemplateRef<any> {
        if (this._templateMap) {
            return type ? this._templateMap[type] : this._templateMap['default'];
        } else {
            return null;
        }
    }

    public propertyValue(meta: InternalPropertyGridItemMeta): PropertyValue {
        return new PropertyValue(this.options, meta);
    }

    public toggle(): void {
        this.state = this.state === 'visible' ? 'hidden' : 'visible';
    }

    public convertValue(meta: InternalPropertyGridItemMeta, val: any): void {
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
        const subItems: InternalPropertyGridItemMeta[] = [];
        for (const i in meta) {
            if (!meta.hasOwnProperty(i)) {
                continue;
            }
            const v: InternalPropertyGridItemMeta = meta[i];
            if (v.hidden) {
                continue;
            }
            if (v.type === 'subItems') {
                subItems.push(v);
            } else {
                let group = groups.find(o => o.name === v.group);
                if (!group) {
                    group = new InternalGroup(v.group);
                    groups.push(group);
                }
                group.items.push(v);
            }
        }
        const rows: Array<InternalGroup | InternalPropertyGridItemMeta> = [];
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
    constructor(private o: any, public meta: InternalPropertyGridItemMeta) {
    }
}

export class InternalGroup {
    public readonly items: InternalPropertyGridItemMeta[] = [];
    public type = 'group';

    constructor(public name: string) {
    }
}
