# FORM BUILDER  

## Table Of Contents  
These are the initial tasks to create this prototype.  

1. [Attribute Grid](#attribute-grid)
1. [Attribute Header](#attribute-header)  
1. Attribute Header - Static Mode  
1. Attribute Header - Edit Mode  
1. Attribute Sidebar  
1. Attribute Footer  

---  

## Attribute Grid  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra.  
  
**Attribute Grid** Base Structure.  
See 'attr-gird.component.html'
```html  
<mat-grid-list cols="4" rowHeight="100px">
  <mat-grid-tile id="attribute-header" colspan="4" rowspan="1">Header</mat-grid-tile>
  <mat-grid-tile id="attribute-sidebar" colspan="1" rowspan="6">Header</mat-grid-tile>
  <mat-grid-tile id="attribute-canvas" colspan="3" rowspan="6">Header</mat-grid-tile>
  <mat-grid-tile id="attribute-header" colspan="4" rowspan="1">Header</mat-grid-tile>
</mat-grid-list>
```

---  

## Attribute Header  