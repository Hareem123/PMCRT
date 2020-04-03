import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PreloadAllModules } from "@angular/router";
import { AuthGuardService } from "./guards/auth-guard.service";

const routes: Routes = [
  {
    path: "login",
    data: { title: "Login" },
    loadChildren: "./modules/login/login.module#LoginModule"
  },
  {
    path: "detailDescription",
    data: { title: "detailDescription" },
    loadChildren:
      "./modules/detail-description/detail-description.module#DetailDescriptionModule"
  },
  {
    path: "dashboard",
    // canActivate: [AuthGuardService],
    // data: { role: ["Server Admin", "Admin"] },
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
  },
  {
    path: "volunteer",
    canActivate: [AuthGuardService],
    // data: { role: ["Server Admin", "Admin"] },
    loadChildren: "./modules/volunteer/volunteer.module#VolunteerModule"
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
