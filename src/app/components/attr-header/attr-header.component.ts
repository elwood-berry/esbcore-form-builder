import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-attr-header',
  templateUrl: './attr-header.component.html',
  styleUrls: ['./attr-header.component.scss']
})
export class AttrHeaderComponent implements OnInit {
  //
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  //
  constructor(public dialog: MatDialog) {}

  //
  ngOnInit() {}

  //
  openDialog() {
    // #docregion focus-restoration
    const dialogRef = this.dialog.open(DialogFromMenuExampleDialog, {
      restoreFocus: false
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger.focus());
    // #enddocregion focus-restoration
  }
}

@Component({
  selector: 'dialog-from-menu-dialog',
  templateUrl: 'dialog-from-menu-example-dialog.html'
})
export class DialogFromMenuExampleDialog {}
