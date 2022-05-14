import {Routes} from "@angular/router";

export const MODULES_ROUTE: Routes = [
  {
    path: 'building',
    loadChildren: () => import('./building/building.module').then(m => m.BuildingModule),
  }
]
