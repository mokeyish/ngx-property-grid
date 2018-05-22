import {Type} from '@angular/core';

export interface PropertyGridItemMeta {
    name: string;
    description?: string;
    order?: string;
    group?: string;
    hidden?: boolean; // default false
    componentType?: Type<any>;
    singleRow?: boolean; // default true
    options?: any;
    type?: string; // boolean number options label color
}

export const $meta = (meta: PropertyGridItemMeta) =>
    (target: any, key: string | symbol) => {
    if (!target.__meta) {
        target.__meta = {};
    }
    target.__meta[key] = meta;
};


