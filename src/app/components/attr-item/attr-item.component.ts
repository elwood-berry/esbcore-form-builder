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
  @Input() optionId: number; // ie. '0'
  @Input() optionType: string; // ie. 'single'
  @Input() optionName: string; // ie. 'First Name'
  @Input() placeholder: string; // ie. 'Please provide your first name.'
  @Input() required: boolean; // ie. 'false'
  @Input() visibleCustomer: boolean; // ie. 'false'
  @Input() visibleVendor: boolean; // ie. 'false'
  @Input() chargeType: string; // ie. 'Flat'
  @Input() chargeCost: number; // ie. '100'
  @Input() chargePrice: number; // ie. '100'
  @Input() chargeLabor: number; // ie. '100'
  @Input() chargeTime: number; // ie. '100'

  constructor() {}

  ngOnInit() {}
}
