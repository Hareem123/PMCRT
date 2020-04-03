import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportRoutingModule } from "./report-routing.module";
import { ReportComponent } from "./report/report.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [ReportComponent, HeaderComponent],
  imports: [CommonModule, ReportRoutingModule]
})
export class ReportModule {}
