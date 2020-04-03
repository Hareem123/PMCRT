import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { BaseUrlService } from "./base-url.service";
import { HttpHeaders, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserService {
  token: any = "";
  // headers: any;
  constructor(
    private baseUrl: BaseUrlService,
    private router: Router,
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {
    var user = localStorage.getItem("authorization");
    var obj = JSON.parse(user);
    if (obj) {
      this.token = obj["token"];
    }
  }

  loginUser(user: User) {
    const headers = new HttpHeaders({
      "content-type": "application/json; charset=utf-8"
    });
    return this.httpClient.post(this.baseUrl.url() + "login", user, {
      headers
    });
  }

  verifytoken(token) {
    this.httpClient
      .post(this.baseUrl.url() + "verifyToken", { token: token })
      .subscribe(
        res => {
          if (res["success"]) {
            if (this.router.url == "/login") {
              this.router.navigate(["/dashboard"]);
            }
          } else {
            this.router.navigate(["/login"]);
          }
        },
        err => {
          this.router.navigate(["/login"]);
        }
      );
  }
}
