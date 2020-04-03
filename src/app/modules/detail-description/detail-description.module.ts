import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DetailDescriptionRoutingModule } from "./detail-description-routing.module";
import { DetailDescriptionComponent } from "./detail-description/detail-description.component";
import { HeaderComponent } from "./header/header.component";
import { DataTableModule } from "angular-6-datatable";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { HeaderModule } from "../header/header.module";
@NgModule({
  declarations: [DetailDescriptionComponent, HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DetailDescriptionRoutingModule,
    DataTableModule
  ],
  bootstrap: [HeaderComponent]
})
export class DetailDescriptionModule {}
