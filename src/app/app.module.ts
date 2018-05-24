import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent, SimpleTextEditorComponent} from './app.component';
import {PropertyGridModule} from './components/property-grid';

@NgModule({
    imports: [
        BrowserModule, PropertyGridModule
    ],
    entryComponents: [SimpleTextEditorComponent],
    declarations: [
        AppComponent, SimpleTextEditorComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
