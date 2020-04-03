import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { BaseUrlService } from "./base-url.service";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DetailDashboardService {
  token: any = "";

  constructor(
    private baseUrl: BaseUrlService,
    private router: Router,
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {}

  getCardData(filter) {
    var user = localStorage.getItem("authorization");
    var obj = JSON.parse(user);
    if (obj) {
      this.token = obj["response"]["token"];
    }
    let headers = new HttpHeaders({ Authorization: "jwt " + this.token });
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(
      this.baseUrl.url() + "dashboardFilter?filter=" + filter.field,
      {
        headers: headers
      }
    );
  }
}
