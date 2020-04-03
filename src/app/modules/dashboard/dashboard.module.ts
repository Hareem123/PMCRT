import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";
import { HeaderModule } from "../header/header.module";

@NgModule({
  declarations: [DashboardComponent, HeaderComponent],
  imports: [CommonModule, DashboardRoutingModule, HeaderModule],
  bootstrap: [HeaderComponent]
})
export class DashboardModule {}
