import { AfterContentInit, OnInit, QueryList, TemplateRef } from '@angular/core';
import { InternalPropertyItemMeta } from './property-item-meta';
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
    rows: Array<InternalGroup | InternalPropertyItemMeta | any>;
    subItems: InternalPropertyItemMeta[];
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    getTemplate(type: string): TemplateRef<any>;
    propertyValue(meta: InternalPropertyItemMeta): PropertyValue;
    toggle(): void;
    convertValue(meta: InternalPropertyItemMeta, val: any): void;
    private initMeta();
}
export declare class PropertyValue {
    private o;
    meta: InternalPropertyItemMeta;
    value: any;
    constructor(o: any, meta: InternalPropertyItemMeta);
}
export declare class InternalGroup {
    name: string;
    readonly items: InternalPropertyItemMeta[];
    type: string;
    constructor(name: string);
}
