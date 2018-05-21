import {Component, Input, OnInit} from '@angular/core';
import {PropertyGridItemMeta} from './property-grid-item-meta';

@Component({
    selector: 'ngx-property-grid',
    templateUrl: './property-grid.component.html',
    styleUrls: ['./property-grid.component.scss']
})
export class PropertyGridComponent implements OnInit {

    private _options: any;

    @Input()
    meta: any;

    @Input()
    width: string| number;

    @Input()
    set options(v: any) {
        if (v.__meta) {
            this.meta = v.__meta;
            this.initMeta();
        }
        this._options = v;
    }
    get options(): any {
        return this._options;
    }

    public keys: string[];

    public groups: Group[];


    constructor() {
    }

    ngOnInit() {
    }

    private initMeta(): void {
        const meta: object = this.meta;
        this.groups = [];
        if (!meta) {
            return;
        }

        const groups: Group[] = [{items: []}];
        for (const i in meta) {
            if (!meta.hasOwnProperty(i)) {
                continue;
            }
            const v = meta[i];
            if (v.hidden) {
                continue;
            }
            let group = groups.find(o => o.name === v.group);
            if (!group) {
                group = {name: v.group, items: []};
                groups.push(group);
            }
            group.items.push({key: i, meta: v});
        }
        this.groups = groups;
    }
}

interface Group {name?: string; items: {key: string, meta: PropertyGridItemMeta}[]; }
