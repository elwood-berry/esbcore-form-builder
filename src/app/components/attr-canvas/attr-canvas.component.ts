import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-attr-canvas',
  templateUrl: './attr-canvas.component.html',
  styleUrls: ['./attr-canvas.component.scss']
})
export class AttrCanvasComponent implements OnInit {
  public esbAttributes = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  constructor(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.esbAttributes,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngOnInit() {}
}
