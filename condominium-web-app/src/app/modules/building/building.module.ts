import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingComponent } from './building.component';
import {BuildingRoutingModule} from "./route/building-routing.module";



@NgModule({
  declarations: [
    BuildingComponent
  ],
  imports: [
    CommonModule,
    BuildingRoutingModule
  ],
  exports: [BuildingComponent]
})
export class BuildingModule { }
