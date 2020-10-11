import {PropertyItemMeta} from './property-item-meta';

export class PropertyValue {
  public get value(): any {
    return this.o[this.meta.key];
  }

  public set value(val: any) {
    const oldValue = this.o[this.meta.key];
    const newValue = this.meta.valueConvert ? this.meta.valueConvert(val) : val;

    this.o[this.meta.key] = newValue;
    if (this.meta.valueChanged) {
      this.meta.valueChanged(newValue, oldValue);
    }
  }

  public get readonly(): boolean {
    return this.meta.readonly == true;
  }

  public get options(): any {
    return this.meta.options;
  }

  constructor(private o: any, public meta: PropertyItemMeta) {
  }
}
