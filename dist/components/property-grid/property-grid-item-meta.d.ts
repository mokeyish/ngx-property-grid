import { Type } from '@angular/core';
export interface PropertyGridItemMeta {
    name: string;
    description?: string;
    order?: string;
    group?: string;
    hidden?: boolean;
    componentType?: Type<any>;
    singleRow?: boolean;
    options?: any;
    type?: string;
    valueConvert?: (value: any) => any;
}
export declare const $meta: (meta: PropertyGridItemMeta) => (target: any, key: string | symbol) => void;
