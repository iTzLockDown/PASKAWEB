import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppError404Component} from './Views/Common/error/app-error404/app-error404.component';
import {AppError500Component} from './Views/Common/error/app-error500/app-error500.component';
import {AppLoginComponent} from './Views/app-login/app-login.component';
import {AppDefaultLayoutComponent} from './Views/Common/app-default-layout/app-default-layout.component';
import {AppUsuarioComponent} from './Views/app-usuario/app-usuario.component';
import {FormUsuarioComponent} from './Views/app-usuario/form-usuario/form-usuario.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: AppError404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: AppError500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: AppLoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  { path: 'dashboard', loadChildren: () => import('./Views/dashboard.module').then(m => m.DashboardModule) },
  { path: '**', component: AppError404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
