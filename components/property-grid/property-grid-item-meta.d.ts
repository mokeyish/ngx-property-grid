import { Type } from '@angular/core';
export interface PropertyGridItemMeta {
    name: string;
    description?: string;
    order?: string;
    group?: string;
    hidden?: boolean;
    initState?: string;
    componentType?: Type<any>;
    colSpan2?: boolean;
    componentOptions?: any;
    type?: string;
    valueConvert?: (value: any) => any;
}
export interface InternalPropertyGridItemMeta extends PropertyGridItemMeta {
    key: string | symbol;
}
export declare const meta: (m: PropertyGridItemMeta) => (target: any, key: string | symbol) => void;
