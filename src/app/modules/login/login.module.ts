import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { FooterLayoutComponent } from '../../layouts/footer-layout/footer-layout.component';

@NgModule({
  declarations: [LoginComponent, FooterLayoutComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule,
  ],
  exports: [FooterLayoutComponent],
})
export class LoginModule { }
