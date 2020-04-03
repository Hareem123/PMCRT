import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  isLoggedIn = false;

  constructor(private router: Router, private toastr: ToastrService) {}

  ngOnInit() {
    var user = localStorage.getItem("authorization");
    this.currentUser = JSON.parse(user);
    if (this.currentUser["response"]["role"] == "Server Admin") {
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem("authorization");
    this.router.navigate(["/login"]);
  }
}
