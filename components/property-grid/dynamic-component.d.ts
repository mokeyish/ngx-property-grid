import { ComponentFactoryResolver, EventEmitter, OnInit, Type } from '@angular/core';
export declare class DynamicComponent implements OnInit, IDynamicComponent<any> {
    private componentFactoryResolver;
    private _value;
    entry: any;
    private component;
    componentType: Type<any>;
    value: any;
    readonly valueChange: EventEmitter<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    private onValueChange(e);
    private buildComponent();
    private initComponent(component);
    private destroyComponent();
}
export interface IDynamicComponent<TValue> {
    value: TValue;
    valueChange: EventEmitter<TValue>;
}
