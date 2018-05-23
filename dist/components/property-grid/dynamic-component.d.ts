/**
 * Created by YISH on 2018/01/12.
 */
import { ComponentFactoryResolver, DoCheck, OnChanges, OnInit, SimpleChanges, Type, ViewContainerRef } from '@angular/core';
export declare class DynamicComponent implements OnInit, DoCheck, OnChanges {
    private componentFactoryResolver;
    private entry;
    private component;
    componentType: Type<any>;
    constructor(componentFactoryResolver: ComponentFactoryResolver, entry: ViewContainerRef);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private buildComponent();
}
export interface IDynamicComponent {
    options: any;
}
