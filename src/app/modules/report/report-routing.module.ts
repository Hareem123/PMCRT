import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReportComponent } from "./report/report.component";
import { DashboardLayoutComponent } from '../../layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  { path: '',   
  component: DashboardLayoutComponent,
  children: [
    { path: '', component: ReportComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule {}
