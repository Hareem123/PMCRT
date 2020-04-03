import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
// import "rxjs/add/operator/filter";

import { DetailDashboardService } from "../../../services/detail-dashboard.service";

@Component({
  selector: "app-detail-description",
  templateUrl: "./detail-description.component.html",
  styleUrls: ["./detail-description.component.css"]
})
export class DetailDescriptionComponent implements OnInit {
  searchForm: FormGroup;
  public searchTxt: any;

  constructor(
    private detailDashboardService: DetailDashboardService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {}
  paramsData: any;
  tableData: any = [];

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.paramsData = { ...params.keys, ...params };
    });
    this.getCardData(this.paramsData.params);
  }

  getCardData(paramData) {
    this.detailDashboardService.getCardData(paramData).subscribe(res => {
      if (res["success"]) {
        this.tableData = res["response"]["objects"];
      }
      // this.colData = columns;
    });
  }
}
