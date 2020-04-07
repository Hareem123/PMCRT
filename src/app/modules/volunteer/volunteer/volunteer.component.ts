import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { VolunteerService } from "../../../services/volunteer.service";

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
  ) {}

  ngOnInit() {
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
