import {PropertyGridComponent} from './property-grid.component';

import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DynamicComponent, IDynamicComponent} from './dynamic-component';

export {PropertyGridItemMeta, $meta} from './property-grid-item-meta';
export {PropertyGridComponent} from './property-grid.component';
export {IDynamicComponent} from './dynamic-component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PropertyGridComponent,
        DynamicComponent,
    ],
    exports: [
        PropertyGridComponent,
    ]
})
export class PropertyGridModule {
}
