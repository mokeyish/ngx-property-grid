import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent, SimpleTextEditorComponent} from './app.component';
import {PropertyGridModule} from './components/property-grid';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatCheckboxModule,
    MatSlider,
    MatSliderModule,
    MatDatepickerModule,
    MatDatepicker,
    MatSlideToggleModule,
    MatSlideToggle
} from '@angular/material';
import {MatCheckbox} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule, FormsModule, NoopAnimationsModule, PropertyGridModule,
        MatCheckboxModule, MatSliderModule, MatDatepickerModule, MatSlideToggleModule,
    ],
    entryComponents: [SimpleTextEditorComponent, MatCheckbox, MatSlider, MatDatepicker, MatSlideToggle],
    declarations: [
        AppComponent, SimpleTextEditorComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
