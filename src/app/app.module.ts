import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { SharedModule } from './shared/shared.module';

const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
    hideRequiredMarker: true
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [
        provideHttpClient(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: matFormFieldDefaultOptions
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
