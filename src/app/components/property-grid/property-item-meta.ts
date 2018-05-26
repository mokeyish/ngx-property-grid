import {Type} from '@angular/core';
import {defaultProvider} from './property-grid-control-provider';
import {ICustomDynamicComponent} from './custom.component';
import {ControlValueAccessor} from '@angular/forms';

export interface PropertyItemMeta {
    name: string; // The display name of the property in the grid
    description?: string; // A description of the property, will be used as tooltip on an hint element (a span with text "[?]")
    order?: number; // The display order.
    group?: string; //  The group this property belongs to
    hidden?: boolean; // Whether this property should be hidden in the grid, default is false (can be omitted).
    initState?: string; // - hidden/visible. If hidden then subItems should init by hidden state. default is hidden
    componentType?: Type<ControlValueAccessor | ICustomDynamicComponent<any>>; // an custom component should be implement
    // ControlValueAccessor or ICustomDynamicComponent<any>
    componentOptions?: any;
    colSpan2?: boolean; //  - true/false. If true then property input will span both columns and will have no name/label
    // (useful for textarea custom type)
    type?: string; // options: boolean number options label color
    valueConvert?: (value: any) => any; // convert the value, eg. parseInt
}

export interface InternalPropertyItemMeta extends PropertyItemMeta {
    key: string | symbol;
}

export const meta = (m: PropertyItemMeta) =>
    (target: any, key: string | symbol) => {
        const xMeta = m as InternalPropertyItemMeta;
        if (!target.__meta__) {
            target.__meta__ = {};
        }
        if (!xMeta.componentType) {
            if (!xMeta.type) {
                xMeta.componentType = defaultProvider.getComponentType('text');
            } else if (xMeta.type === 'boolean') {
                xMeta.componentType = defaultProvider.getComponentType('checkbox');
            } else {
                xMeta.componentType = defaultProvider.getComponentType(m.type);
            }

            if (xMeta.type === 'number' && !xMeta.valueConvert) {
                xMeta.valueConvert = parseInt;
            }
        }
        if (!xMeta.initState) {
            xMeta.initState = 'hidden';
        }
        if (!xMeta.order) {
            xMeta.order = 0;
        }
        xMeta.key = key;
        target.__meta__[key] = xMeta;
    };
