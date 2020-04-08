import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  currentUser: any = { email: '' };
  isLoggedIn = false;

  constructor(private router: Router, private toastr: ToastrService, private userService: UserService) {
    this.currentUser = this.userService.getCurrentUser();
  }

  ngOnInit() {
    if(!this.userService.isUserAuthorized()) {
      return this.router.navigate(['/login']);
    }
  }

  logout() {
    this.userService.logoutUser();
    this.router.navigate(["/login"]);
  }
}
