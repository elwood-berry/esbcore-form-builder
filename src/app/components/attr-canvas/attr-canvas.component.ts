/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

// ANGULAR: CORE
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// ANGULAR: MATERIAL
import { MatDialog } from '@angular/material/dialog';

// SERVICES
import { AttributesService } from '../../services/attributes/attributes.service';

// COMPONENT DECORATOR
@Component({
  selector: 'app-attr-canvas',
  templateUrl: './attr-canvas.component.html',
  styleUrls: ['./attr-canvas.component.scss']
})

// CLASS: ATTRIBUTE CANVAS
export class AttrCanvasComponent implements OnInit {
  /*
  PROPERTIES.
  ----------------------------------------------- */
  public urlAttributes: string = 'assets/data/attributes/attributes.json';
  public attributeOptions: any[];

  // TEMPLATES - Used for displaying conditional HTML in the template.
  // public displayRequired = `<strong style="color: #FF0000;">Shut It Down<strong>`; // <span class="material-icons-outlined">check_box</span>
  public esbAttributes = [
    {
      name: 'First Name',
      placeholder: 'Please provide your first name.',
      required: false,
      visibleCustomer: true,
      visibleVendor: false
    },
    {
      name: 'Last Name',
      placeholder: 'Please provide your last name.',
      required: true,
      visibleCustomer: false,
      visibleVendor: false
    },
    {
      name: 'Address #1',
      placeholder: 'Please provide a valid address.',
      required: true,
      visibleCustomer: true,
      visibleVendor: false
    },
    {
      name: 'Address #2',
      placeholder: 'Suite, Apt',
      required: false,
      visibleCustomer: true,
      visibleVendor: true
    },
    {
      name: 'City',
      placeholder: 'Please select city.',
      required: true,
      visibleCustomer: false,
      visibleVendor: true
    },
    {
      name: 'State',
      placeholder: 'Please select state.',
      required: true,
      visibleCustomer: false,
      visibleVendor: false
    }
  ];

  public status: boolean;

  /*
  CONSTRUCTOR.
  ----------------------------------------------- */
  constructor(public dialog: MatDialog, private json: AttributesService) {
    // CONSTRUCTOR - JSON.GETDATA - 'json.getAttributes'
    json.getAttributes(this.urlAttributes).subscribe(result => {
      console.log('Attributes Data', result[0].options);
      this.attributeOptions = result[0].options; // UPDATE PROPERTY
      console.log('New Attributes Data', this.attributeOptions);
    });
  }

  // ATTRIBUTE SWITCH
  public attrSwitch(value) {
    console.log('Type: ', value);
  }

  // CDK: Drag & Drop
  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.esbAttributes,
      event.previousIndex,
      event.currentIndex
    );
  }

  // DEFINE DISPLAY: 'REQUIRED?'
  public attrRequired(status: boolean) {
    this.status = status;
    // console.log('Status: ', this.status);
    return this.status;
  }

  // DEFINE DISPLAY: 'VISIBLE TO CUSTOMERS?'
  public visibilityToCustomer(status) {
    if (status === true) {
      return 'I am visible';
    } else {
      return 'I am NOT visible';
    }
  }

  // DEFINE DISPLAY: 'VISIBLE TO VENDORS?'
  public visibilityToVendor(status) {
    if (status === true) {
      return 'Visible To Vendor';
    } else {
      return 'Not Visible';
    }
  }

  // DIALOG: 'Are You Sure You Want To Delete This?'
  openDialog() {
    this.dialog.open(DialogConfirmDeletion);
  }

  ngOnInit() {}
}

// HTML TEMPLATES
// ---------------------------------------------

// CONFIRM DELETION
@Component({
  selector: 'dialog-confirm-deletion',
  templateUrl: '../../../assets/html/confirm-deletion.html'
})
export class DialogConfirmDeletion {}

// TEMPLATE: STATIC SINGLE ATTRIBUTE.
@Component({
  selector: 'tmpl-static-single-attribute',
  templateUrl: '../../../assets/html/tmpl-static-single-attribute.html'
})
export class TmplStaticSingleAttribute {}
