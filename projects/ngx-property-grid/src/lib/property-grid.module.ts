import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LoadComponentDirective} from './load-component.directive';
import {PropertyGridComponent} from './property-grid.component';
import {NgxTemplateModule} from 'ngx-template';
import {FormsModule} from '@angular/forms';

export {PropertyGridComponent, PropertyValue} from './property-grid.component';
export {meta, PropertyItemMeta} from './property-item-meta';

@NgModule({
  imports: [
    CommonModule, FormsModule, NgxTemplateModule
  ],
  declarations: [
    PropertyGridComponent,
    LoadComponentDirective
  ],
  exports: [
    PropertyGridComponent
  ]
})
export class PropertyGridModule {
}
