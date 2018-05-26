import {Injectable, Type} from '@angular/core';


@Injectable()
export class PropertyGridControlProvider {
    private readonly _map: Map<string, Type<any>> = new Map<string, Type<any>>();
    public components: Array<Type<any>> = [];
    public register(type: string, componentType: Type<any>) {
        this._map.set(type, componentType);
        this.components.push(componentType);
    }
    public getComponentType(type: string) {
        return this._map.get(type);
    }
}

export const defaultProvider = new PropertyGridControlProvider();
