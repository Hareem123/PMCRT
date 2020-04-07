import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PreloadAllModules } from "@angular/router";
import { AuthGuardService } from "./guards/auth-guard.service";
import { LoginComponent } from './modules/login/login/login.component';
import { FooterLayoutComponent } from './layouts/footer-layout/footer-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: "login",
    data: { title: "Login" },
    component: FooterLayoutComponent,
    loadChildren: "./modules/login/login.module#LoginModule"
  },
  {
    path: "detailDescription",
    data: { title: "detailDescription" },
    // component: DashboardLayoutComponent,
    loadChildren:
      "./modules/detail-description/detail-description.module#DetailDescriptionModule"
  },
  {
    path: "dashboard",
    // canActivate: [AuthGuardService],
    // data: { role: ["Server Admin", "Admin"] },
    // component: DashboardLayoutComponent,
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "volunteer",
    // canActivate: [AuthGuardService],
    // data: { role: ["Server Admin", "Admin"] },
    // component: DashboardLayoutComponent,
    loadChildren: "./modules/volunteer/volunteer.module#VolunteerModule"
  },
  {
    path: "report",
    // canActivate: [AuthGuardService],
    // data: { role: ["Server Admin", "Admin"] },
    // component: DashboardLayoutComponent,
    loadChildren: "./modules/report/report.module#ReportModule"
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: true,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
  // providers: [AuthGuardService]
})
export class AppRoutingModule {}
