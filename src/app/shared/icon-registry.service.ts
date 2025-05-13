import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        const icons = ['home', 'eye', 'eye-black', 'repeat', 'check-circle', 'file-invoice', 'coins', 'comment-dollar', 'envelope-open-dollar', 'file-alt', 'file-chart-line', 'file-invoice-dollar', 'info', 'sack-dollar', 'user-chart'];
        for (const icon of icons) {
            iconRegistry.addSvgIcon(
                icon,
                sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
            );
        }
    }
}