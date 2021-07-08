import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-sidebar',
  templateUrl: './attr-sidebar.component.html',
  styleUrls: ['./attr-sidebar.component.scss']
})
export class AttrSidebarComponent implements OnInit {

  // PROPERTIES 
  public typesOfAttributes: string[] = ['Single Value', 'Single Checkbox', 'Radio Button Group', 'Checkbox Group', 'Drop Down Menu'];

  constructor() {}

  ngOnInit() {}
}
