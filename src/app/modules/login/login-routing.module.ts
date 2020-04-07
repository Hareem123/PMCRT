import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { FooterLayoutComponent } from '../../layouts/footer-layout/footer-layout.component';

const routes: Routes = [
  { path: '',   
  component: FooterLayoutComponent,
  children: [
    { path: '', component: LoginComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
