import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    const icons = ['home', 'eye', 'eye-black', 'repeat', 'check-circle'];
    for (const icon of icons) {
      iconRegistry.addSvgIcon(
        icon,
        sanitizer.bypassSecurityTrustResourceUrl(`assets/icons/${icon}.svg`)
      );
    }
  }
}