import {Type} from '@angular/core';
import {defaultProvider} from './property-grid-control-provider';

export interface PropertyGridItemMeta {
    name: string; // The display name of the property in the grid
    description?: string; // A description of the property, will be used as tooltip on an hint element (a span with text "[?]")
    order?: string;
    group?: string; //  The group this property belongs to
    hidden?: boolean; // Whether this property should be hidden in the grid, default is false (can be omitted).
    initState?: string; // - hidden/visible.
    componentType?: Type<any>;
    colSpan2?: boolean; //  - true/false. If true then property input will span both columns and will have no name/label
    // (useful for textarea custom type)
    componentOptions?: any;
    type?: string; // boolean number options label color
    valueConvert?: (value: any) => any;
}

export interface InternalPropertyGridItemMeta extends PropertyGridItemMeta {
    key: string | symbol;
}

export const meta = (m: PropertyGridItemMeta) =>
    (target: any, key: string | symbol) => {
        const xMeta = m as InternalPropertyGridItemMeta;
        if (!target.__meta) {
            target.__meta = {};
        }
        if (!xMeta.componentType) {
            if (!xMeta.type) {
                xMeta.type = 'text';
            }
            xMeta.componentType = defaultProvider.getComponentType(m.type);
        }
        if (!xMeta.initState) {
            xMeta.initState = 'hidden';
        }
        xMeta.key = key;
        target.__meta[key] = xMeta;
    };
