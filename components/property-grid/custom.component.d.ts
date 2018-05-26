import { ComponentFactoryResolver, EventEmitter, OnInit, Type } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class CustomComponent implements OnInit, ICustomDynamicComponent<any> {
    private componentFactoryResolver;
    private readonly _controlValueChangeFn;
    private _value;
    entry: any;
    private component;
    componentType: Type<PropertyValueAccess>;
    componentOptions: any;
    value: any;
    readonly valueChange: EventEmitter<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    private onValueChange(e);
    private buildComponent();
    private initComponent(component);
    private destroyComponent();
}
export interface PropertyValueAccess extends ControlValueAccessor, ICustomDynamicComponent<any> {
}
export interface ICustomDynamicComponent<TValue> {
    value: TValue;
    valueChange: EventEmitter<TValue>;
}
