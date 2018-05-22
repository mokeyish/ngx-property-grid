import {PropertyGridComponent} from './property-grid.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CheckboxComponent} from './controls/checkbox';
import {ColorComponent} from './controls/color';
import {DynamicComponent} from './controls/dynamic-component';


@NgModule({
    imports: [
        CommonModule
    ],
    entryComponents: [CheckboxComponent, ColorComponent],
    declarations: [
        PropertyGridComponent,
        CheckboxComponent,
        ColorComponent,
        DynamicComponent
    ],
    exports: [
        PropertyGridComponent,
    ]
})
export class PropertyGridModule {
}
