import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { VolunteerRoutingModule } from "./volunteer-routing.module";
import { VolunteerComponent } from "./volunteer/volunteer.component";
import { DataTableModule } from "angular-6-datatable";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [VolunteerComponent],
  imports: [
    CommonModule,
    VolunteerRoutingModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class VolunteerModule {}
