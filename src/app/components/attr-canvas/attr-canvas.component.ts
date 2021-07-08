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
  public attrRequired(status: boolean) {
    this.status = status;
    console.log('Status: ', this.status);
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
  templateUrl: './html/confirm-deletion.html'
})
export class DialogConfirmDeletion {}

// STATUS: REQUIRED - TRUE
@Component({
  selector: 'status-required-true',
  templateUrl: './html/status-required_true.html'
})
export class statusRequiredTrue {}
