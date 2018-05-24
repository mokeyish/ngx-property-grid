/**
 * Created by YISH on 2018/01/12.
 */

import {
    Component,
    ComponentFactoryResolver, EventEmitter, Input,
    OnInit, Output, Type, ViewChild, ViewContainerRef
} from '@angular/core';
import {ComponentRef} from '@angular/core/src/linker/component_factory';

@Component({
    selector: 'dynamic-component',
    template: '<ng-container #container></ng-container>',
})
export class DynamicComponent implements OnInit, IDynamicComponent<any> {
    private _value: any;

    @ViewChild('container', { read: ViewContainerRef }) entry;
    private component: ComponentRef<IDynamicComponent<any>>;

    @Input() componentType: Type<any>;

    @Input()
    set value(v: any) {
        this._value = v;
        if (this.component) {
            this.component.instance.value =  v;
        }
    }
    get value(): any {
        return this._value;
    }

    @Output()
    readonly valueChange: EventEmitter<any> = new EventEmitter<any>();


    constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngOnInit() {
        this.buildComponent();
    }

    private onValueChange(e: any): void {
        this._value = e;
        this.valueChange.emit(e);
    }

    private buildComponent(): void {
        if (!this.componentType) {
            return;
        }
        try {
            this.destroyComponent();
            // this.entry.clear();
            const componentFactory = this.componentFactoryResolver.resolveComponentFactory<IDynamicComponent<any>>(this.componentType);
            const component = this.entry.createComponent(componentFactory, 0);
            this.initComponent(component);
            this.component = component;
        } catch (e) {
            console.error('load component error.');
            console.error(e);
        }
    }

    private initComponent(component: ComponentRef<IDynamicComponent<any>>) {
        component.instance.value = this._value;
        if (component.instance.valueChange) {
            component.instance.valueChange.subscribe((e: any) => this.onValueChange(e));
        } else {
            component.instance.valueChange = new EventEmitter<any>();
            component.instance.valueChange.subscribe((e: any) => this.onValueChange(e));
        }
    }

    private destroyComponent(): void {
        if (this.component) {
            this.component.destroy();
        }
    }
}

export interface IDynamicComponent<TValue> {
    value: TValue;
    valueChange: EventEmitter<TValue>;
}
