import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        CommonModule,
        MatIconModule,
        MatButtonModule
    ],
})
export class SharedModule { }