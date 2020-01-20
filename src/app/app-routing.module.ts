import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { Grafica1Component } from "./pages/grafica1/grafica1.component";
import { Grafica2Component } from "./pages/grafica2/grafica2.component";
import { LoginComponent } from "./login/login.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { NoPageFoundComponent } from "./shared/nopagefound/nopagefound.component";
import { PagesComponent } from "./pages/pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "grafica1", component: Grafica1Component },
      { path: "grafica2", component: Grafica2Component },
      { path: "progress", component: ProgressComponent },
      { path: "", redirectTo: "/dashboard", pathMatch: "full" }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "register", component: LoginComponent },
  { path: "**", component: NoPageFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
