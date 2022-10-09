import { Component, Input, OnInit } from '@angular/core';
import { MenuOption } from '../models/drop-menu.model';

@Component({
  selector: 'shared-action-bar',
  templateUrl: 'action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class SharedActionComponent implements OnInit {

  @Input()
  actions: MenuOption[] | null = [];

  constructor() {
  }

  ngOnInit() {
  }

  onActionClick(clicked: MenuOption) {

  }
}