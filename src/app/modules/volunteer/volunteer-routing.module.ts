import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { VolunteerComponent } from "./volunteer/volunteer.component";
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  { path: '',   
  component: DashboardLayoutComponent,
  children: [
    { path: '', component: VolunteerComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule {}
