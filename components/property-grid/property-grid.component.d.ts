import { AfterContentInit, OnInit, QueryList, TemplateRef } from '@angular/core';
import { InternalPropertyGridItemMeta } from './property-grid-item-meta';
export declare class PropertyGridComponent implements OnInit, AfterContentInit {
    private _options;
    private _meta;
    private _templateMap;
    state: string;
    width: string | number;
    labelWidth: string | number;
    meta: any;
    options: any;
    templates: QueryList<any>;
    rows: Array<InternalGroup | InternalPropertyGridItemMeta | any>;
    subItems: InternalPropertyGridItemMeta[];
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    getTemplate(type: string): TemplateRef<any>;
    propertyValue(meta: InternalPropertyGridItemMeta): PropertyValue;
    toggle(): void;
    convertValue(meta: InternalPropertyGridItemMeta, val: any): void;
    private initMeta();
}
export declare class PropertyValue {
    private o;
    meta: InternalPropertyGridItemMeta;
    value: any;
    constructor(o: any, meta: InternalPropertyGridItemMeta);
}
export declare class InternalGroup {
    name: string;
    readonly items: InternalPropertyGridItemMeta[];
    type: string;
    constructor(name: string);
}
