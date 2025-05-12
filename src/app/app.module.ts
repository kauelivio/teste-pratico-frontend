import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';

const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
    hideRequiredMarker: true
};


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatIconModule
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
