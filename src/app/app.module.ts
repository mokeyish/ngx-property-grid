import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PropertyGridModule} from './components/property-grid';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule, PropertyGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
