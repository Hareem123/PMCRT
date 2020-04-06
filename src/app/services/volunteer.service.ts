import { Injectable } from "@angular/core";
import { BaseUrlService } from "./base-url.service";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class VolunteerService {
  token: any = "";

  constructor(
    private baseUrl: BaseUrlService,
    private httpClient: HttpClient,
  ) {}

  getVolunteerData() {
    var user = localStorage.getItem("authorization");
    var obj = JSON.parse(user);
    if (obj) {
      this.token = obj["response"]["token"];
    }
    let headers = new HttpHeaders({ Authorization: "jwt " + this.token });
    // tslint:disable-next-line: max-line-length
    return this.httpClient.get(this.baseUrl.url() + "volunteersPanel", {
      headers: headers
    });
  }
}
