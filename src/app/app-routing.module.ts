import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
        canActivate: [authGuard]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    },  
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
