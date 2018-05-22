import {Component, Input, OnInit, SimpleChange} from '@angular/core';
import {PropertyGridItemMeta} from './property-grid-item-meta';
import {ColorComponent} from './controls/color';
import {CheckboxComponent} from './controls/checkbox';

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

    public rows: Array<Group | Item | any>;


    constructor() {
    }

    ngOnInit() {
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
            const v: PropertyGridItemMeta = meta[i];
            if (v.hidden) {
                continue;
            }
            switch (v.type) {
                case 'color':
                    v.componentType = ColorComponent;
                    break;
                case 'checkbox':
                    v.componentType = CheckboxComponent;
                    break;
                default:
                    break;
            }

            let group = groups.find(o => o.name === v.group);
            if (!group) {
                group = new Group(v.group);
                groups.push(group);
            }
            group.items.push(new Item(i, v));
        }
        const rows: Array<Group | Item> = [];
        for (const g of groups) {
            if (g.name) {
                rows.push(g);
            }
            g.items.forEach(o => rows.push(o));
        }
        this.rows = rows;
    }
}

class Item {
    public get name(): string {
        return this.meta.name;
    }
    public get description(): string {
        return this.meta.description;
    }
    public type = 'item';
    constructor(public key: string, public meta: PropertyGridItemMeta) {
    }
}

class Group {
    public readonly items: Item[] = [];
    public type = 'group';

    constructor(public name: string) {
    }
}
