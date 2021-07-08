import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-attr-canvas',
  templateUrl: './attr-canvas.component.html',
  styleUrls: ['./attr-canvas.component.scss']
})
export class AttrCanvasComponent implements OnInit {
  /*
  PROPERTIES.
  ----------------------------------------------- */

  // TEMPLATES - Used for displaying conditional HTML in the template.
  public displayRequired: any = `<span class="material-icons-outlined">check_box</span>`;
  public esbAttributes = [
    {
      name: 'First Name',
      placeholder: 'Please provide your first name.',
      required: false,
      visibleCustomer: true,
      visibleVendor: true
    },
    {
      name: 'Last Name',
      placeholder: 'Please provide your last name.',
      required: true,
      visibleCustomer: true,
      visibleVendor: true
    },
    {
      name: 'Address #1',
      placeholder: 'Please provide a valid address.',
      required: true,
      visibleCustomer: true,
      visibleVendor: true
    },
    {
      name: 'Address #2',
      placeholder: 'Suite, Apt',
      required: true,
      visibleCustomer: true,
      visibleVendor: true
    },
    {
      name: 'City',
      placeholder: 'Please select city.',
      required: true,
      visibleCustomer: true,
      visibleVendor: true
    },
    {
      name: 'State',
      placeholder: 'Please select state.',
      required: true,
      visibleCustomer: true,
      visibleVendor: true
    }
  ];

  /*
  CONSTRUCTOR.
  ----------------------------------------------- */
  constructor(public dialog: MatDialog) {}

  // CDK: Drag & Drop
  public drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.esbAttributes,
      event.previousIndex,
      event.currentIndex
    );
  }

  // DEFINE DISPLAY: 'REQUIRED?'
  public attrRequired(status) {
    if (status === true) {
      return this.displayRequired;
    } else {
      return 'Not Required';
    }
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
  templateUrl: './html/confirm-deletion.html'
})
export class DialogConfirmDeletion {}
