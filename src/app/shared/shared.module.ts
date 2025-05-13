import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskDirective } from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        NgxMaskDirective
    ],
    exports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        NgxMaskDirective
    ],
})
export class SharedModule { }