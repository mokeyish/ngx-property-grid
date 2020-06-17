import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent, SimpleTextEditorComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import {NgxTemplateModule} from 'ngx-template';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlider, MatSliderModule} from '@angular/material/slider';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggle, MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {NgxJsonViewModule} from 'ng-json-view';
import {PropertyGridModule} from 'ngx-property-grid';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule, FormsModule, NoopAnimationsModule, PropertyGridModule, NgxTemplateModule,
        NgxJsonViewModule, BrowserAnimationsModule,
        MatCheckboxModule, MatSliderModule, MatDatepickerModule, MatSlideToggleModule,
        MatNativeDateModule, MatRadioModule, MatInputModule
    ],
    entryComponents: [SimpleTextEditorComponent, MatCheckbox, MatSlider, MatDatepicker, MatSlideToggle],
    declarations: [
        AppComponent, SimpleTextEditorComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class ShowcaseModule {
}
