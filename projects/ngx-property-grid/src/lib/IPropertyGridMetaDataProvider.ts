import { PropertyItemMeta } from './property-item-meta';

export interface IPropertyGridMetaDataProvider {
    providePropertyGridMetaData(): PropertyItemMeta[];
}

