import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProgressComponent } from "./pages/progress/progress.component";
import { Grafica1Component } from "./pages/grafica1/grafica1.component";
import { Grafica2Component } from "./pages/grafica2/grafica2.component";
import { BreadcrumbsComponent } from "./shared/breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NoPageFoundComponent } from "./shared/nopagefound/nopagefound.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageFoundComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    Grafica2Component,
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    PagesComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
