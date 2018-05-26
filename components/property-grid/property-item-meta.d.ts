import { Type } from '@angular/core';
import { ICustomDynamicComponent } from './custom.component';
import { ControlValueAccessor } from '@angular/forms';
export interface PropertyItemMeta {
    name: string;
    description?: string;
    order?: number;
    group?: string;
    hidden?: boolean;
    initState?: string;
    componentType?: Type<ControlValueAccessor | ICustomDynamicComponent<any>>;
    componentOptions?: any;
    colSpan2?: boolean;
    type?: string;
    valueConvert?: (value: any) => any;
}
export interface InternalPropertyItemMeta extends PropertyItemMeta {
    key: string | symbol;
}
export declare const meta: (m: PropertyItemMeta) => (target: any, key: string | symbol) => void;
