import {PropertyItemMeta} from './property-item-meta';

export class PropertyValue {
  public get value(): any {
    return this.o[this.meta.key];
  }

  public set value(val: any) {
    this.o[this.meta.key] = this.meta.valueConvert ? this.meta.valueConvert(val) : val;
  }
  constructor(private o: any, public meta: PropertyItemMeta) {
  }
}
