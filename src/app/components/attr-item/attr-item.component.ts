/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component, OnInit, Input } from '@angular/core';

// INTERFACE
import { Attribute } from '../../interfaces/attribute/attribute';

@Component({
  selector: 'app-attr-item',
  templateUrl: './attr-item.component.html',
  styleUrls: ['./attr-item.component.scss']
})
export class AttrItemComponent implements OnInit {
  // INPUT properties.
  @Input() itemType: Attribute;
  @Input() name: Attribute;
  @Input() placeholder: Attribute;
  @Input() description: Attribute;
  @Input() type: Attribute[];
  @Input() cost: Attribute;
  @Input() price: Attribute;
  @Input() labor: Attribute;
  @Input() time: Attribute;
  @Input() required: Attribute;
  @Input() visibleCustomer: Attribute;
  @Input() visibleVendor: Attribute;

  constructor() {}

  ngOnInit() {}
}
