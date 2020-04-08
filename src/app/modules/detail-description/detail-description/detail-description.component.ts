import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
// import "rxjs/add/operator/filter";

import { DetailDashboardService } from "../../../services/detail-dashboard.service";
import { UserService } from 'src/app/services/user.service';

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
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
  ) {}
  tableData: any = [];
  title: String = '';
  field: String = '';

  ngOnInit() {
    if(!this.userService.isUserAuthorized()) {
        this.router.navigate(['/login']);
    }
    this.route.queryParamMap.subscribe((paramsData: any) => {
      const { params } = paramsData;
      this.title = params.title;
      this.field = params.field;
    });
    this.getCardData(this.field);
  }

  getCardData(field) {
    this.detailDashboardService.getCardData(field).subscribe(res => {
      if (res["success"]) {
        this.tableData = res["response"]["objects"];
      }
    });
  }
}
