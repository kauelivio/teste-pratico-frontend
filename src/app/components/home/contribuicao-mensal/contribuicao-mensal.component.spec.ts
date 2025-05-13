import { ComponentFixture, TestBed } from '@angular/core/testing';
import localePt from '@angular/common/locales/pt';

import { ContribuicaoMensalComponent } from './contribuicao-mensal.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'src/app/shared/shared.module';
import { By } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { CardComponent } from './card/card.component';

describe('ContribuicaoMensalComponent', () => {
    let component: ContribuicaoMensalComponent;
    let fixture: ComponentFixture<ContribuicaoMensalComponent>;

    beforeEach(() => {
        registerLocaleData(localePt);
        TestBed.configureTestingModule({
            declarations: [
                ContribuicaoMensalComponent,
                CardComponent
            ],
            imports: [
                NgApexchartsModule,
                SharedModule
            ],
            providers: [
                { provide: LOCALE_ID, useValue: 'pt' }
            ]
        });
        fixture = TestBed.createComponent(ContribuicaoMensalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('deve mostrar a soma correta', () => {
        const expectedTotal = component.data.reduce((acc, cur) => acc + cur.total, 0);
        const totalElement = fixture.debugElement.query(By.css('h2')).nativeElement;

        expect(component.totalSum).toBe(expectedTotal);
        expect(totalElement.textContent).toContain(expectedTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    });
});
