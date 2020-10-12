import {
  ComponentFactoryResolver,
  ComponentRef, Directive,
  Input,  OnDestroy,
  OnInit, 
  Type,
  ViewContainerRef
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PropertyItemMeta } from './property-item-meta';
import { IDynamicComponent } from './dynamic-component';

@Directive({
  selector: '[dynamicComponentLoad]',
})
export class DynamicComponentLoadDirective implements OnInit, OnDestroy {
  private readonly _controlValueChangeFn: (value: any) => void;
  private component: ComponentRef<IDynamicComponent<any>>;
  private get componentType(): Type<PropertyValueAccess> {
    return this.meta.type as Type<PropertyValueAccess>;
  }

  @Input('dynamicComponentLoad') private meta: PropertyItemMeta;
  @Input()
  public options: any;

  constructor(private entry: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
    this._controlValueChangeFn = (value: any) => {
      const oldValue = this.options[this.meta.key];
      const newValue = this.meta.valueConvert ? this.meta.valueConvert(value) : value;
      this.options[this.meta.key] = newValue;
      if (this.meta.valueChanged) {
        this.meta.valueChanged(newValue, oldValue);
      }
    }
  }

  ngOnInit() {
    this.buildComponent();
  }

  ngOnDestroy(): void {
    this.destroyComponent();
  }

  private buildComponent(): void {
    if (!this.componentType) {
      return;
    }
    try {
      this.destroyComponent();
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory<PropertyValueAccess>(this.componentType);
      const component = this.entry.createComponent(componentFactory, 0);
      component.instance["disabled"] = this.meta.readonly == true;
      this.initComponent(component);
      this.component = component;
    } catch (e) {
      console.error('load component error.');
      console.error(e);
    }
  }

  private initComponent(component: ComponentRef<PropertyValueAccess>) {
    component.instance.value = this.options[this.meta.key]; 
    if (component.instance.registerOnChange) {
      component.instance.registerOnChange(this._controlValueChangeFn);
    }
    if (component.instance.valueChange) {
      component.instance.valueChange.subscribe(this._controlValueChangeFn);
    }

    if (this.meta.options) {
      Object.assign(component.instance, this.meta.options);
    }
  }

  private destroyComponent(): void {
    if (this.component) {
      this.component.destroy();
    }
  }
}

interface PropertyValueAccess extends ControlValueAccessor, IDynamicComponent<any> {
}


