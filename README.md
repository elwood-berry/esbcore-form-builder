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



---  
---  

# TASK LOG 

**WED, JULY 7, 2021**  
1. Display type of input ('text', 'text area', 'checkbox', etc)
1. Display the charges menu  
1. Confirmation dialog for deleting
1. Format: Look & Feel - Deletion Confirmation Dialog Window

**THUR, JULY 8, 2021**  

1. click on the header to show dialog.
1. click on the attribute to show dialog.
1. click on the menu icon to see menu 
1. click on the edit icon to show dialog 

**Completed**  
1. ~~Display template HTML based on boolean status of checkboxes ('required', 'customer', 'vendor')~~ 
1. ~~Display/Format Delete button~~

## References
1. https://stackoverflow.com/questions/35269179/angular-conditional-class-with-ngclass
