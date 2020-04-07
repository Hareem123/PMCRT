import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';
import { AppModule } from 'src/app/app.module';
import { HeaderComponent } from '../header/header/header.component';

@NgModule({
  declarations: [DashboardComponent, DashboardLayoutComponent, HeaderComponent],
  imports: [CommonModule, DashboardRoutingModule],
  exports: [DashboardLayoutComponent, HeaderComponent]
})
export class DashboardModule {}
