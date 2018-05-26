import {Type} from '@angular/core';


export class PropertyGridControlProvider {
    private readonly _map: Map<string, Type<any>> = new Map<string, Type<any>>();
    public register(type: string, componentType: Type<any>) {
        this._map.set(type, componentType);
        this.components.push(componentType);
    }
    public getComponentType(type: string) {
        return this._map.get(type);
    }
    public components: Array<Type<any>> = [];
}

export const defaultProvider = new PropertyGridControlProvider();
