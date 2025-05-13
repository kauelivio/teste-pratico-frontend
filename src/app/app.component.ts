import { Component } from '@angular/core';
import { IconRegistryService } from './shared/icon-registry.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    constructor(private iconRegistry: IconRegistryService) { }
}
