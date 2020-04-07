import { Component, OnInit, ViewChild } from "@angular/core";
import { DetailDashboardService } from "../../../services/detail-dashboard.service";

import * as Chart from "chart.js";

import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import randomMC from 'random-material-color';

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
        this.volunteersAtWorkChart = this.createChartFromData(data, 'field', this.volunteersAtWorkChartRef.nativeElement, false, "bar");
      }
    });
    this.dashboardService
      .getPieData("volunteersByProfession")
      .subscribe((res) => {
        if (res["success"]) {
          const data = res["response"]["objects"];
          this.volunteersByProfessionChart = this.createChartFromData(data, 'profession', this.volunteersByProfessionChartRef.nativeElement);
        }
      });
    this.dashboardService.getPieData("volunteersBySkills").subscribe((res) => {
      if (res["success"]) {
        const data = res["response"]["objects"];
        this.volunteersBySkillChart = this.createChartFromData(data, 'skill', this.volunteersBySkillChartRef.nativeElement);
      }
    });
    this.dashboardService.getPieData("volunteersByGender").subscribe((res) => {
      if (res["success"]) {
        const data = res["response"]["objects"];
        this.volunteersByGenderChart = this.createChartFromData(data, 'gender', this.volunteersByGenderChartRef.nativeElement)
      }
    });
  }
  getRandomColor() {
    return randomMC.getColor();
  }

  createChartFromData(data, key, elementRef, showLabel = true, chartType = "doughnut") {
        let fields = [];
        let legends = [];
        let count = [];
        let colors = [];
        data.forEach((e) => {
          legends.push(e[key]);
          fields.push(this.truncateString(e[key], 10));
          count.push(e.count);
          colors.push(this.getRandomColor());
        });
      return new Chart(
        elementRef,
        {
          type: chartType,
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
                  let label = legends[tooltipItem.index];
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
