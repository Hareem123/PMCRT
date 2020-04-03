import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

import { CountUp } from "CountUp.js";
import * as $ from "jquery";
import { DashboardService } from "../../../services/dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  totalVolunteer: any;
  registerations: any;
  // work: any;
  // profession: any;
  // skillCounter: any;
  // genderCounter: any;

  constructor(
    private dashboardService: DashboardService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.totalVolunteer = new CountUp("totalVolunteer", 0);
    this.totalVolunteer.start();

    this.registerations = new CountUp("registerations", 0);
    this.registerations.start();

    // this.work = new CountUp("work", 0);
    // this.work.start();

    // this.profession = new CountUp("profession", 0);
    // this.profession.start();

    // this.skillCounter = new CountUp("skillCounter", 0);
    // this.skillCounter.start();

    // this.genderCounter = new CountUp("genderCounter", 0);
    // this.genderCounter.start();

    this.getDashboardData();
  }

  getDashboardData() {
    this.dashboardService.getDashboardData().subscribe(
      res => {
        if (res["success"]) {
          this.totalVolunteer.update(res["response"]["total_volunteers"]);
          this.registerations.update(res["response"]["todays_registrations"]);
        }
      },
      err => {
        this.toastr.error("Error occurred, Please try again.", "Error");
      }
    );
  }
  totalVolunteers(item, title) {
    this.router.navigate(["/detailDescription"], {
      queryParams: { field: item, title: title }
    });
  }
}
