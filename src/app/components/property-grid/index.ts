import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {CustomComponent, ICustomDynamicComponent} from './custom.component';
import {PropertyGridComponent} from './property-grid.component';
import {defaultProvider, PropertyGridControlProvider} from './property-grid-control-provider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PropertyItemTemplateDirective} from './property-item-template.directive';

export {ICustomDynamicComponent} from './custom.component';
export {PropertyGridComponent, PropertyValue} from './property-grid.component';
export {meta, PropertyItemMeta} from './property-item-meta';

@NgModule({
    imports: [
        CommonModule, BrowserAnimationsModule,
    ],
    entryComponents: defaultProvider.components,
    declarations: [
        PropertyGridComponent,
        CustomComponent,
        PropertyItemTemplateDirective,
    ],
    providers: [{provide: PropertyGridControlProvider, useValue: defaultProvider}],
    exports: [
        PropertyGridComponent, PropertyItemTemplateDirective
    ]
})
export class PropertyGridModule {
}
