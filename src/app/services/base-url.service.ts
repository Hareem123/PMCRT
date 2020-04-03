import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BaseUrlService {
  url() {
    return "https://pakistancrt.azurewebsites.net/app/";
  }
}
