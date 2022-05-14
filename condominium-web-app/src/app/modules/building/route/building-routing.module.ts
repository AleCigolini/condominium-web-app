import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {BuildingComponent} from "../building.component";

const routesBuilding: Routes = [
  {
    path: '',
    component: BuildingComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routesBuilding)
  ],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
