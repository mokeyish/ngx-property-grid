import { PropertyGridComponent } from './property-grid.component';
import { PropertyItemMeta } from './property-item-meta';

export class PropertyValue {
  public get value(): any {
    try {
      return this.o[this.meta.key!];
    }
    catch (error) {
      console.warn(`Failed to get property grid value '${String(this.meta.key)}'. Error : ${error}`);
    }
  }

  public set value(val: any) {
    const oldValue = this.o[this.meta.key!];
    const newValue = this.meta.valueConvert ? this.meta.valueConvert(val) : val;

    this.o[this.meta.key!] = newValue;
    if (this.meta.valueChanged) {
      this.meta.valueChanged(newValue, oldValue);
    }
    this.propertyGrid.onValueChanged();
  }



  public get readonly(): boolean {
    return this.meta.readonly == true;
  }

  public get options(): any {
    return this.meta.options;
  }

  constructor(private propertyGrid: PropertyGridComponent, private o: any, public meta: PropertyItemMeta) {
  }
}
