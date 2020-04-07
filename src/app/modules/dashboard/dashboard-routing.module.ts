import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  { path: '',   
  component: DashboardLayoutComponent,
  children: [
    { path: '', component: DashboardComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
