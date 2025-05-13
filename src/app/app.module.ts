import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import localePt from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { provideNgxMask } from 'ngx-mask';

const matFormFieldDefaultOptions: MatFormFieldDefaultOptions = {
    hideRequiredMarker: true
};

registerLocaleData(localePt);

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
        provideNgxMask(),
        {
            provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
            useValue: matFormFieldDefaultOptions
        },
        { provide: LOCALE_ID, useValue: 'pt-BR' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
