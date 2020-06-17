import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {DynamicComponentLoadDirective} from './dynamic-component-load.directive';
import {PropertyGridComponent} from './property-grid.component';
import {NgxTemplateModule} from 'ngx-template';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule, NgxTemplateModule
  ],
  declarations: [
    PropertyGridComponent,
    DynamicComponentLoadDirective
  ],
  exports: [
    PropertyGridComponent
  ]
})
export class PropertyGridModule {
}
