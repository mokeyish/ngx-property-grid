import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppComponent, SimpleTextEditorComponent} from './app.component';
import {PropertyGridModule} from './components/property-grid';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule, MatSlider, MatSliderModule} from '@angular/material';
import {MatCheckbox} from '@angular/material';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        BrowserModule, NoopAnimationsModule, PropertyGridModule,
        MatCheckboxModule, MatSliderModule,
    ],
    entryComponents: [SimpleTextEditorComponent, MatCheckbox, MatSlider],
    declarations: [
        AppComponent, SimpleTextEditorComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
