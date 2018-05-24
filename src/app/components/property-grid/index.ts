

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DynamicComponent, IDynamicComponent} from './dynamic-component';
import {PropertyGridComponent} from './property-grid.component';

export {IDynamicComponent} from './dynamic-component';
export {PropertyGridComponent} from './property-grid.component';

export {meta, PropertyGridItemMeta} from './property-grid-item-meta';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PropertyGridComponent,
        DynamicComponent
    ],
    exports: [
        PropertyGridComponent,
    ]
})
export class PropertyGridModule {
}
