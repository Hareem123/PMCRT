import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
// import "rxjs/add/operator/filter";

import { DetailDashboardService } from "../../../services/detail-dashboard.service";

interface ParamsData {
  params: { title: String,
  field: String },
};

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
  // paramsData: ParamsData = { params: { title: '', field: ''} };
  paramsData: any = {};
  tableData: any = [];
  title: String = '';

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.paramsData = { ...params.keys, ...params };
      this.title = this.paramsData.params.title;
    });
    this.getCardData(this.paramsData.params);
  }

  getCardData(paramData) {
    this.detailDashboardService.getCardData(paramData).subscribe(res => {
      if (res["success"]) {
        console.log('api response', res);
        this.tableData = res["response"]["objects"];

        // TODO ideally different models and transformers should be created that will
        // transform the response object according to the filter provided
        if(this.paramsData.params.field == 'totalVolunteers' || this.paramsData.params.field == 'todaysRegistrations') { 
                    
          this.tableData = this.tableData.map((object) => {
              delete object.facebook_handle;
              delete object.twitter_handle;
              delete object.latitude;
              delete object.longitude;
              delete object.agree;
              delete object.role;
              return object;

        });
      }
      }
    });
  }
}
