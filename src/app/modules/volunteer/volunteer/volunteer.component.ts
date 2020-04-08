import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { VolunteerService } from "../../../services/volunteer.service";
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-volunteer",
  templateUrl: "./volunteer.component.html",
  styleUrls: ["./volunteer.component.css"]
})
export class VolunteerComponent implements OnInit {
  public searchTxt: any;
  searchForm: FormGroup;
  data: any = [];

  constructor(
    private volunteerService: VolunteerService,
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
    if(!this.userService.isUserAuthorized()) {
      this.router.navigate(['/login']);
    }
    this.getVolunteerData();
  }
  getVolunteerData() {
    this.volunteerService.getVolunteerData().subscribe(res => {
      if (res["success"]) {
        this.data = res["response"];
      }
    });
  }
}
