import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, QueryList, TemplateRef } from '@angular/core';
import { InternalPropertyItemMeta } from './property-item-meta';
export declare class PropertyGridComponent implements AfterContentInit, AfterViewInit {
    private cdr;
    private _options;
    private _meta;
    readonly isInternal: boolean;
    templateMap: any;
    state: string;
    width: string | number;
    labelWidth: string | number;
    meta: any;
    options: any;
    defaultTemplates: QueryList<any>;
    templates: QueryList<any>;
    rows: Array<InternalGroup | InternalPropertyItemMeta | any>;
    subItems: InternalPropertyItemMeta[];
    constructor(el: ElementRef<HTMLElement>, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    getTemplate(type: string): TemplateRef<any>;
    propertyValue(meta: InternalPropertyItemMeta): PropertyValue;
    toggle(): void;
    convertValue(meta: InternalPropertyItemMeta, val: any): void;
    private initMeta();
    optionLabel(v: any): string;
    optionValue(v: any): any;
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
