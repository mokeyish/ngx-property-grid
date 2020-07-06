import {Type} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';
import {IDynamicComponent} from './dynamic-component';

export interface PropertyItemMeta {
  readonly key?: PropertyKey; // auto generate.
  name: string; // The display name of the property in the grid
  description?: string; // A description of the property, will be used as tooltip on an hint element (a span with text "[?]")
  order?: number; // The display order.
  group?: string; //  The group this property belongs to
  hidden?: boolean; // Whether this property should be hidden in the grid, default is false (can be omitted).
  initState?: 'hidden' | 'visible'; // - hidden/visible. If hidden then subItems should init by hidden state. default is hidden
  type?: 'color' | 'date' | 'checkbox' | 'text' | 'options' | string | Type<ControlValueAccessor | IDynamicComponent<any>>;
  // options: boolean number options label color,
  // or an custom component should be implement ControlValueAccessor or ICustomDynamicComponent<any>
  options?: any; // options for type
  colSpan2?: boolean; //  - true/false. If true then property input will span both columns and will have no name/label
  // (useful for textArea custom type)
  valueConvert?: (value: any) => any; // convert the value, eg. parseInt
  valueChanged?: (newValue: any, oldValue: any) => void;
  showHelp?: boolean; // default True.
  link?: string; // help link
}


export const meta = (itemMeta: PropertyItemMeta) =>
  (target: any, key: PropertyKey) => {

    // region [adjust]
    (itemMeta as any).key = key;
    if (typeof itemMeta.type === 'string') {

    } else {

    }
    if (!itemMeta.type) {
      itemMeta.type = 'text';
    }

    if (itemMeta.type === 'number' && !itemMeta.valueConvert) {
      itemMeta.valueConvert = parseInt;
    }

    if (!itemMeta.initState) {
      itemMeta.initState = 'hidden';
    }
    if (!itemMeta.order) {
      itemMeta.order = Number.MAX_VALUE;
    }
    if (itemMeta.showHelp === undefined) {
      itemMeta.showHelp = true;
    }
    // endregion

    let __meta__ = target.__meta__;
    if (!__meta__) {
      __meta__ = {};
      target.__meta__ = __meta__;
    } else if (target.__proto__.__meta__ === __meta__) {
      const subMeta = Object.create(Object.getPrototypeOf(__meta__));
      Object.getOwnPropertyNames(__meta__).forEach(name => {
        Object.defineProperty(subMeta, name, Object.getOwnPropertyDescriptor(__meta__, name));
      });
      __meta__ = subMeta;
      target.__meta__ = __meta__;
    }

    Object.defineProperty(__meta__, key, {
      enumerable: true,
      get: () => itemMeta,
      set: (v) => itemMeta = v
    });
  };
