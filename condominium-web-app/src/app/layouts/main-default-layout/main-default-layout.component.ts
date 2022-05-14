import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'condominium-main-default-layout',
  templateUrl: './main-default-layout.component.html',
  styleUrls: ['./main-default-layout.component.scss']
})
export class MainDefaultLayoutComponent {
  public reason = '';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  close(reason: string) {
    this.reason = reason;
    this.sidenav!.close();

  }
}
