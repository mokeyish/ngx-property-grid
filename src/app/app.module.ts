import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PropertyGridComponent } from './components/property-grid/property-grid.component';

@NgModule({
    declarations: [
        AppComponent,
        PropertyGridComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
