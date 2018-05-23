import {Component, Input, OnInit} from '@angular/core';
import {PropertyGridItemMeta} from './property-grid-item-meta';

@Component({
    selector: 'ngx-property-grid',
    templateUrl: './property-grid.component.html',
    styleUrls: ['./property-grid.component.scss']
})
export class PropertyGridComponent implements OnInit {
    private _options: any;
    private _meta: any;

    @Input()
    width: string| number;

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

    public rows: Array<Group | InternalPropertyGridItemMeta | any>;


    constructor() {
    }

    ngOnInit() {
    }

    public change(e: any) {
        console.log(e);
    }

    public convertValue(meta: InternalPropertyGridItemMeta, val: any): void {
        this.options[meta.key] = meta.valueConvert ? meta.valueConvert(val) : val;
    }

    public optionLabel(v: any): string {
        if (typeof v === 'string') {
            return v;
        }
        if (v.text) {
            return v.text;
        }
        if (v.label) {
            return v.label;
        }
        return v;
    }

    public optionValue(v: any): any {
        return v && v.value ? v.value : v;
    }

    private initMeta(): void {
        const meta: object = this.meta;
        this.rows = [];
        if (!meta) {
            return;
        }

        const groups: Group[] = [new Group(undefined)];
        for (const i in meta) {
            if (!meta.hasOwnProperty(i)) {
                continue;
            }
            const v: InternalPropertyGridItemMeta = meta[i];
            if (v.hidden) {
                continue;
            }
            v.key = i;
            if (!v.type && !v.componentType) {
                v.type = 'text';
            }

            let group = groups.find(o => o.name === v.group);
            if (!group) {
                group = new Group(v.group);
                groups.push(group);
            }
            group.items.push(v);
        }
        const rows: Array<Group | InternalPropertyGridItemMeta> = [];
        for (const g of groups) {
            if (g.name) {
                rows.push(g);
            }
            g.items.forEach(o => rows.push(o));
        }
        this.rows = rows;
    }
}


class Group {
    public readonly items: InternalPropertyGridItemMeta[] = [];
    public type = 'group';

    constructor(public name: string) {
    }
}

interface InternalPropertyGridItemMeta extends PropertyGridItemMeta {
    key: string;
}
