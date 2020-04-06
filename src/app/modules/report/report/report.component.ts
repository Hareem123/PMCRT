import { Component, OnInit, ViewChild } from "@angular/core";
import { DetailDashboardService } from "../../../services/detail-dashboard.service";

import * as Chart from "chart.js";

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { createOfflineCompileUrlResolver } from '@angular/compiler';
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
  ) {}

  ngOnInit() {
    this.dashboardService.getPieData("volunteersAtWork").subscribe((res) => {
      if (res["success"]) {
        const data = res["response"]["objects"];
        this.volunteersAtWorkChart = this.createPieChartFromData(data, 'field', this.volunteersAtWorkChartRef.nativeElement, false);
      }
    });
    this.dashboardService
      .getPieData("volunteersByProfession")
      .subscribe((res) => {
        if (res["success"]) {
          const data = res["response"]["objects"];
          this.volunteersByProfessionChart = this.createPieChartFromData(data, 'profession', this.volunteersByProfessionChartRef.nativeElement);
        }
      });
    this.dashboardService.getPieData("volunteersBySkills").subscribe((res) => {
      if (res["success"]) {
        const data = res["response"]["objects"];
        this.volunteersBySkillChart = this.createPieChartFromData(data, 'skill', this.volunteersBySkillChartRef.nativeElement);
      }
    });
    this.dashboardService.getPieData("volunteersByGender").subscribe((res) => {
      if (res["success"]) {
        const data = res["response"]["objects"];
        this.volunteersByGenderChart = this.createPieChartFromData(data, 'gender', this.volunteersByGenderChartRef.nativeElement)
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

  createPieChartFromData(data, key, elementRef, showLabel = true) {
        let fields = [];
        let count = [];
        let colors = [];
        data.forEach((e) => {
          fields.push(e[key]);
          count.push(e.count);
          colors.push(this.getRandomColor());
        });
      return new Chart(
        elementRef,
        {
          type: "doughnut",
          data: {
            labels: fields,
            datasets: [
              {
                label: fields,
                backgroundColor: colors,
                data: count,
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
              display: showLabel,
              position: "left",
            },
          },
        }
      );
  }


  truncateString(str, num) {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num) + '...'
  }

}
