import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'condominium-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  public openMenu() {
    this.sidenavToggle.emit();
  }
}
