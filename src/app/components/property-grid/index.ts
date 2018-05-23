import {PropertyGridComponent} from './property-grid.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DynamicComponent} from './dynamic-component';


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
