import { OnInit } from '@angular/core';
import { PropertyGridItemMeta } from './property-grid-item-meta';
export declare class PropertyGridComponent implements OnInit {
    private _options;
    private _meta;
    width: string | number;
    meta: any;
    options: any;
    rows: Array<InternalGroup | InternalPropertyGridItemMeta | any>;
    constructor();
    ngOnInit(): void;
    change(e: any): void;
    convertValue(meta: InternalPropertyGridItemMeta, val: any): void;
    optionLabel(v: any): string;
    optionValue(v: any): any;
    private initMeta();
}
export declare class InternalGroup {
    name: string;
    readonly items: InternalPropertyGridItemMeta[];
    type: string;
    constructor(name: string);
}
export interface InternalPropertyGridItemMeta extends PropertyGridItemMeta {
    key: string;
}
