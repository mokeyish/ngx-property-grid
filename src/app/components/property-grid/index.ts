import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CustomComponent, ICustomDynamicComponent} from './custom.component';
import {PropertyGridComponent} from './property-grid.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxTemplateModule} from 'ngx-template';

export {ICustomDynamicComponent} from './custom.component';
export {PropertyGridComponent, PropertyValue} from './property-grid.component';
export {meta, PropertyItemMeta} from './property-item-meta';

@NgModule({
    imports: [
        CommonModule, BrowserAnimationsModule, NgxTemplateModule
    ],
    declarations: [
        PropertyGridComponent,
        CustomComponent
    ],
    exports: [
        PropertyGridComponent
    ]
})
export class PropertyGridModule {
}
