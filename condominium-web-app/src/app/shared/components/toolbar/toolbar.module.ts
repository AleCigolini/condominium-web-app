import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {TranslateModule} from "@ngx-translate/core";
import {AngularMaterialModule} from "../../angular-material/angular-material.module";

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    TranslateModule,
    AngularMaterialModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
