import {Type} from '@angular/core';

export interface PropertyGridItemMeta {
    name: string;
    description?: string;
    order?: string;
    group?: string;
    hidden?: boolean;
    componentType?: Type<any>;
}

export const $meta = (meta: PropertyGridItemMeta) =>
    (target: any, key: string | symbol) => {
    if (!target.__meta) {
        target.__meta = {};
    }
    target.__meta[key] = meta;
};


