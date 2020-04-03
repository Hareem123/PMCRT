import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmtDetailRoutingModule } from './pmt-detail-routing.module';
import { PmtDetailComponent } from './pmt-detail/pmt-detail.component';


@NgModule({
  declarations: [PmtDetailComponent],
  imports: [
    CommonModule,
    PmtDetailRoutingModule
  ]
})
export class PmtDetailModule { }
