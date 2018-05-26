import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CustomComponent, ICustomDynamicComponent} from './custom.component';
import {PropertyGridComponent} from './property-grid.component';
import {SimpleCheckboxComponent} from './controls/simple-checkbox.component';
import {defaultProvider, PropertyGridControlProvider} from './property-grid-control-provider';
import {SimpleColorComponent} from './controls/simple-color-picker.omponent';
import {SimpleLabelComponent} from './controls/simple-label.component';
import {SimpleTextComponent} from './controls/simple-text.component';
import {SimpleSelectComponent} from './controls/simple-select.component';

export {ICustomDynamicComponent} from './custom.component';
export {PropertyGridComponent} from './property-grid.component';

export {meta, PropertyGridItemMeta} from './property-grid-item-meta';

defaultProvider.register('checkbox', SimpleCheckboxComponent);
defaultProvider.register('color', SimpleColorComponent);
defaultProvider.register('label', SimpleLabelComponent);
defaultProvider.register('text', SimpleTextComponent);
defaultProvider.register('options', SimpleSelectComponent);

@NgModule({
    imports: [
        CommonModule
    ],
    entryComponents: defaultProvider.components,
    declarations: [
        PropertyGridComponent,
        CustomComponent,
        SimpleCheckboxComponent,
        SimpleColorComponent,
        SimpleLabelComponent,
        SimpleTextComponent,
        SimpleSelectComponent
    ],
    providers: [{provide: PropertyGridControlProvider, useValue: defaultProvider}],
    exports: [
        PropertyGridComponent
    ]
})
export class PropertyGridModule {
}
