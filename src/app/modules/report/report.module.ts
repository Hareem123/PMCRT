import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportRoutingModule } from "./report-routing.module";
import { ReportComponent } from "./report/report.component";
import { DashboardModule } from '../dashboard/dashboard.module';
@NgModule({
  declarations: [ReportComponent],
  imports: [CommonModule, ReportRoutingModule, DashboardModule]
})
export class ReportModule {}
