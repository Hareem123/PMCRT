import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { BaseUrlService } from "./base-url.service";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';
@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(
    private baseUrl: BaseUrlService,
    private router: Router,
    private httpClient: HttpClient,
    private toastr: ToastrService,
    private userService: UserService,
  ) {}

  getDashboardData() {
    const token = this.userService.getUserToken();
      let headers = new HttpHeaders({ Authorization: "jwt " + token });
      // tslint:disable-next-line: max-line-length
      return this.httpClient.get(this.baseUrl.url() + "dashboardPanel", {
        headers: headers
      });
  }

}
