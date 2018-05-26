import {Component, Input, OnInit} from '@angular/core';
import {InternalPropertyGridItemMeta} from './property-grid-item-meta';

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
                            [componentType]="row.componentType"
                            [componentOptions]="row.componentOptions"
                            [value]="options[row.key]"
                            (valueChange)="convertValue(row, $event)">
                        </custom-component>
                    </td>
                </tr>
                </tbody>
            </table>

            <div *ngFor="let item of subItems" class="internal-property-grid">
                <div>{{item.name}}</div>
                <ngx-property-grid [options]="options[item.key]" [width]="width" [labelWidth]="labelWidth"></ngx-property-grid>
            </div>
        </div>
    `,
    styles: [
            `
            .property-grid {
                border: solid 1px #95B8E7;
            }
            .property-grid-table {
                /*border: solid 1px #95B8E7;*/
                border-spacing: 0;
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
            .internal-property-grid .property-grid {
                border-width: 0;
            }
        `
    ]
})
export class PropertyGridComponent implements OnInit {
    private _options: any;
    private _meta: any;

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
        if (v.__meta) {
            this.meta = v.__meta;
        }
        this._options = v;
    }

    public get options(): any {
        return this._options;
    }

    public rows: Array<InternalGroup | InternalPropertyGridItemMeta | any>;
    public subItems: InternalPropertyGridItemMeta[];

    constructor() {
    }

    ngOnInit() {
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


export class InternalGroup {
    public readonly items: InternalPropertyGridItemMeta[] = [];
    public type = 'group';

    constructor(public name: string) {
    }
}
