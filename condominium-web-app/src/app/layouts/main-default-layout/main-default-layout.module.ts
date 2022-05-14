import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDefaultLayoutComponent } from './main-default-layout.component';
import {AngularMaterialModule} from "../../shared/angular-material/angular-material.module";
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {ToolbarModule} from "../../shared/components/toolbar/toolbar.module";
import {FooterModule} from "../../shared/components/footer/footer.module";

@NgModule({
  declarations: [
    MainDefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    TranslateModule,
    ToolbarModule,
    FooterModule
  ],
  exports: [MainDefaultLayoutComponent]
})
export class MainDefaultLayoutModule { }
