import { ComponentFactoryResolver, EventEmitter, OnInit, Type } from '@angular/core';
export declare class CustomComponent implements OnInit, ICustomDynamicComponent<any> {
    private componentFactoryResolver;
    private readonly _controlValueChangeFn;
    private _value;
    entry: any;
    private component;
    componentType: Type<any>;
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
export interface ICustomDynamicComponent<TValue> {
    value: TValue;
    valueChange: EventEmitter<TValue>;
}
