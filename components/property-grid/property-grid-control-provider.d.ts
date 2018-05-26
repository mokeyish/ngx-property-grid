import { Type } from '@angular/core';
export declare class PropertyGridControlProvider {
    private readonly _map;
    components: Array<Type<any>>;
    register(type: string, componentType: Type<any>): void;
    getComponentType(type: string): Type<any>;
}
export declare const defaultProvider: PropertyGridControlProvider;
