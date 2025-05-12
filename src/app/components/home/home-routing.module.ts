import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContribuicaoMensalComponent } from './contribuicao-mensal/contribuicao-mensal.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'contribuicao-mensal', component: ContribuicaoMensalComponent, data: { title: 'Contribuições' } },
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
