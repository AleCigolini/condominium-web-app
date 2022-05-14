import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./modules/login/login.component";
import {HomeComponent} from "./home/home.component";
import {HOME_ROUTE} from "./home/home.route";
import {MODULES_ROUTE} from "./modules/modules-routing.route";
import {MainDefaultLayoutComponent} from "./layouts/main-default-layout/main-default-layout.component";

// const routes: Routes = [
//   { path: '', component: LoginComponent },
//   { path: 'home', component: HomeComponent }
// ];

const ROUTES_DEFAULT_LAYOUT: Routes = [HOME_ROUTE, ...MODULES_ROUTE]

@NgModule({
  imports: [RouterModule.forRoot(
    [
      {
        path: '',
        component: MainDefaultLayoutComponent,
        children: ROUTES_DEFAULT_LAYOUT
      }
    ]
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
