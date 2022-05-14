import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {AngularMaterialModule} from "../shared/angular-material/angular-material.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AngularMaterialModule
  ]
})
export class HomeModule { }
