import {PropertyGridComponent} from './property-grid.component';
import {CommonModule} from '@angular/common';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CheckboxComponent} from './controls/checkbox';
import {ColorComponent} from './controls/color';
import {DynamicComponent} from './controls/dynamic-component';
import {LabelComponent} from './controls/label';
import {FormsModule} from '@angular/forms';


@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        CommonModule, FormsModule
    ],
    entryComponents: [CheckboxComponent, ColorComponent, LabelComponent],
    declarations: [
        PropertyGridComponent,
        DynamicComponent,
        CheckboxComponent,
        ColorComponent,
        LabelComponent
    ],
    exports: [
        PropertyGridComponent,
    ]
})
export class PropertyGridModule {
}
