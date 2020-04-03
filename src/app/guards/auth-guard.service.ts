import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  Route
} from "@angular/router";
import { Observable } from "rxjs";
import { BaseUrlService } from "../services/base-url.service";
import { UserService } from "../services/user.service";
import { ToastrService } from "ngx-toastr";
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(
    private userService: UserService,
    private httpClient: HttpClient,
    private _router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    var user = localStorage.getItem("authorization");
    var obj = JSON.parse(user);

    var userRole = "";
    if (userRole == obj.response.role) {
      this.userService.verifytoken(obj["response"]["token"]);
      return true;
    } else {
      if (route.routeConfig.path != "dashboard") {
        this.userService.verifytoken(obj["token"]);
        this._router.navigate(["/dashboard"]);
        this.toastr.error(
          "The current user is not allowed for the " + userRole + " role.",
          "Role Authentication"
        );
        return true;
      }
    }

    this._router.navigate(["/login"]);
    return false;
  }
}
