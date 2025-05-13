import { Component, Input } from '@angular/core';

export interface dataCardInterface {
    total: number;
    label: string;
    value: number;
    percentage?: number;
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.less']
})
export class CardComponent {
    @Input() data!: dataCardInterface;
}
