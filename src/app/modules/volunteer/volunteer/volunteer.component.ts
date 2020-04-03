import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getVolunteerData();
  }
  getVolunteerData() {
    this.volunteerService.getVolunteerData().subscribe(res => {
      if (res["success"]) {
        this.data = res["response"];
        console.log(this.data);
      }
    });
  }
}
