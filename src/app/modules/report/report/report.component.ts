import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

import { DetailDashboardService } from "../../../services/detail-dashboard.service";

import * as $ from "jquery";
import * as Chart from "chart.js";

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

@Component({
  selector: "app-report",
  templateUrl: "./report.component.html",
  styleUrls: ["./report.component.css"],
})
export class ReportComponent implements OnInit {
  volunteersAtWorkloading = false;

  volunteersAtWorkChart: any;
  volunteersByProfessionChart: any;
  volunteersBySkillChart: any;
  volunteersByGenderChart: any;

  field: any = [];
  field1: any = [];
  count: any = [];
  chart = [];
  data: any = [];

  @ViewChild("volunteersAtWorkChart", { static: false })
  private volunteersAtWorkChartRef;

  @ViewChild("volunteersByProfessionChart", { static: false })
  private volunteersByProfessionChartRef;

  @ViewChild("volunteersBySkillChart", { static: false })
  private volunteersBySkillChartRef;

  @ViewChild("volunteersByGenderChart", { static: false })
  private volunteersByGenderChartRef;

  constructor(
    // private formBuilder: FormBuilder,
    private dashboardService: DetailDashboardService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.dashboardService.getPieData("volunteersAtWork").subscribe((res) => {
      if (res["success"]) {
        const data = res["response"]["objects"];
        data.forEach((element) => {
          this.field.push(element.field);
          this.count.push(element.count);
        });
        this.volunteersAtWorkChart = new Chart(
          this.volunteersAtWorkChartRef.nativeElement,
          {
            type: "doughnut",
            data: {
              labels: this.field,
              datasets: [
                {
                  label: "Volunteers At Work",
                  backgroundColor: this.getRandomColor,
                  data: this.count,
                },
              ],
            },
            options: {
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    let label = data.labels[tooltipItem.index];
                    let value =
                      data.datasets[tooltipItem.datasetIndex].data[
                        tooltipItem.index
                      ];
                    value = Number(value);
                    return label + " :  " + value.toLocaleString();
                  },
                },
              },
              legend: {
                onClick: (e) => e.stopPropagation(),
                display: false,
                position: "left",
              },
            },
          }
        );
      }
    });
    this.dashboardService
      .getPieData("volunteersByProfession")
      .subscribe((res) => {
        if (res["success"]) {
          const data = res["response"]["objects"];
          data.forEach((element) => {
            this.field1.push(element.profession);
            this.count.push(element.count);
          });
          this.volunteersByProfessionChart = new Chart(
            this.volunteersByProfessionChartRef.nativeElement,
            {
              type: "doughnut",
              data: {
                labels: this.field1,
                datasets: [
                  {
                    label: this.field1,
                    backgroundColor: this.getRandomColor,
                    data: this.count,
                  },
                ],
              },
              options: {
                tooltips: {
                  callbacks: {
                    label: function (tooltipItem, data) {
                      let label = data.labels[tooltipItem.index];
                      let value =
                        data.datasets[tooltipItem.datasetIndex].data[
                          tooltipItem.index
                        ];
                      value = Number(value);
                      return label + " :  " + value.toLocaleString();
                    },
                  },
                },
                legend: {
                  onClick: (e) => e.stopPropagation(),
                  display: false,
                  position: "left",
                },
              },
            }
          );
        }
      });
    this.dashboardService.getPieData("volunteersBySkills").subscribe((res) => {
      if (res["success"]) {
        const data = res["response"]["objects"];
        data.forEach((element) => {
          this.field1.push(element.profession);
          this.count.push(element.count);
        });
        this.volunteersBySkillChart = new Chart(
          this.volunteersBySkillChartRef.nativeElement,
          {
            type: "doughnut",
            data: {
              labels: this.field1,
              datasets: [
                {
                  label: this.field1,
                  backgroundColor: this.getRandomColor,
                  data: this.count,
                },
              ],
            },
            options: {
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    let label = data.labels[tooltipItem.index];
                    let value =
                      data.datasets[tooltipItem.datasetIndex].data[
                        tooltipItem.index
                      ];
                    value = Number(value);
                    return label + " :  " + value.toLocaleString();
                  },
                },
              },
              legend: {
                onClick: (e) => e.stopPropagation(),
                display: false,
                position: "left",
              },
            },
          }
        );
      }
    });
    this.dashboardService.getPieData("volunteersByGender").subscribe((res) => {
      if (res["success"]) {
        const data = res["response"]["objects"];
        data.forEach((element) => {
          this.field1.push(element.profession);
          this.count.push(element.count);
        });
        this.volunteersByGenderChart = new Chart(
          this.volunteersByGenderChartRef.nativeElement,
          {
            type: "doughnut",
            data: {
              labels: this.field1,
              datasets: [
                {
                  label: this.field1,
                  backgroundColor: this.getRandomColor,
                  data: this.count,
                },
              ],
            },
            options: {
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    let label = data.labels[tooltipItem.index];
                    let value =
                      data.datasets[tooltipItem.datasetIndex].data[
                        tooltipItem.index
                      ];
                    value = Number(value);
                    return label + " :  " + value.toLocaleString();
                  },
                },
              },
              legend: {
                onClick: (e) => e.stopPropagation(),
                display: false,
                position: "left",
              },
            },
          }
        );
      }
    });
  }
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
