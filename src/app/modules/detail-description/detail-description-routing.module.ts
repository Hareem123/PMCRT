import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DetailDescriptionComponent } from "./detail-description/detail-description.component";
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  { path: '',   
  component: DashboardLayoutComponent,
  children: [
    { path: '', component: DetailDescriptionComponent },
  ] }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailDescriptionRoutingModule {}
