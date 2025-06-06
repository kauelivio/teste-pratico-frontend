import { NgModule } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { ContribuicaoMensalComponent } from './contribuicao-mensal/contribuicao-mensal.component';
import { CardComponent } from './contribuicao-mensal/card/card.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        ContribuicaoMensalComponent,
        CardComponent
    ],
    imports: [
        NgApexchartsModule,
        MatSidenavModule,
        SharedModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
