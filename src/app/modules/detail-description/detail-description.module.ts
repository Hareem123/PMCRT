import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DetailDescriptionRoutingModule } from "./detail-description-routing.module";
import { DetailDescriptionComponent } from "./detail-description/detail-description.component";
import { DataTableModule } from "angular-6-datatable";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [DetailDescriptionComponent, SearchPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DetailDescriptionRoutingModule,
    DataTableModule,
    DashboardModule,
  ],
})
export class DetailDescriptionModule {}
