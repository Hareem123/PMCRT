import { Injectable } from "@angular/core";
import { BaseUrlService } from "./base-url.service";
import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class VolunteerService {
  constructor(
    private baseUrl: BaseUrlService,
    private httpClient: HttpClient,
    private userService: UserService,
    private router: Router,
  ) { }

  getVolunteerData() {
    const token = this.userService.getUserToken();
      let headers = new HttpHeaders({ Authorization: "jwt " + token });
      // tslint:disable-next-line: max-line-length
      return this.httpClient.get(this.baseUrl.url() + "volunteersPanel", {
        headers: headers
      });
  }
}
