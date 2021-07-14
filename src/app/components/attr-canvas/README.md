# ITEM CANVAS.

The canvas shows many "ITEMS" 

ITEMS 



**ALPHA**  
1. Displays the draggable area.  
2. Loops through the data using *ngFor.  

```html

<div class="attr-canvas-container" cdkDropList (cdkDropListDropped)="drop($event)">

  <div *ngFor="let attribute of dataAttributes" class="attribute-class">
    <div>{{attribute.name}}</div>
  </div>

</div>

```  

---  

**BRAVO**  
1. Displays the draggable area.
2. Loops through the data using *ngFor.
3. Determine which portion of HTML to render based on an ngSwitch.  

```html

<div class="attr-canvas-container" cdkDropList (cdkDropListDropped)="drop($event)">
  
  <div *ngFor="let attribute of dataAttributes" [ngSwitch]="attrSwitch(attribute.attrType)" class="attribute-class">
    <div *ngSwitchCase="single">I am a single attribute</div>
    <div *ngSwitchCase="multiple">I am a multiple attribute</div>
  </div>

</div>
```  

---  

**CHARLIE**  
1. Displays the draggable area.
2. Loops through the data using *ngFor.
3. This demonstrates that ability to render the item header based on the data.  

```html

<div class="attr-canvas-container" cdkDropList (cdkDropListDropped)="drop($event)">
  
  <app-attr-item *ngFor="let attribute of dataAttributes" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" cdkDrag></app-attr-item>

</div>
```  

---  

**DELTA**  
1. Displays the draggable area.
2. Loops through the data using *ngFor.
3. Build expansion panels with different item headers.  

```html

<div class="attr-canvas-container" cdkDropList (cdkDropListDropped)="drop($event)">

  <mat-expansion-panel *ngFor="let attribute of dataAttributes" class="attr-expansion-panel" hideToggle cdkDrag>
    <mat-expansion-panel-header>

      <app-attr-item [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" [attribute.]="" cdkDrag></app-attr-item>
      
      <div class="" *cdkDragPlaceholder></div>
    </mat-expansion-panel-header>
    <p>This is the primary content of the panel.</p>
  </mat-expansion-panel>

  <!-- <ng-container *ngTemplateOutlet="tmplStaticSingleAttr"></ng-container> -->
  <!-- <ng-container *ngTemplateOutlet="tmplStaticMultipleOptionAttr"></ng-container> -->
  <!-- <mat-accordion *ngFor="let attribute of esbAttributes" cdkDrag></mat-accordion> -->
  <!-- <div class="attribute-panel" *ngFor="let attribute of esbAttributes" cdkDrag></div> -->
  <!-- CONTAINER:EXPANSION PANEL - MULTI SELECTION -->

</div>
```  

---  

**ECHO**  
1. Displays the draggable area.
2. Loops through the data using *ngFor.
3. Building based on templates  

```html

<div class="attr-canvas-container" cdkDropList (cdkDropListDropped)="drop($event)">

  <!-- <ng-container *ngTemplateOutlet="tmplStaticSingleAttr"></ng-container> -->
  <!-- <ng-container *ngTemplateOutlet="tmplStaticMultipleOptionAttr"></ng-container> -->
  <!-- <mat-accordion *ngFor="let attribute of esbAttributes" cdkDrag></mat-accordion> -->
  <!-- <div class="attribute-panel" *ngFor="let attribute of esbAttributes" cdkDrag></div> -->

</div>  

<!-- SINGLE ITEM -->
<ng-template #tmplStaticSingleAttr>
  <div>
    <app-attr-item></app-attr-item>
  </div>
</ng-template>


<!-- MULTI SELECTION: EXPANSION PANEL -->
<ng-template #tmplStaticMultipleOptionAttr>
  <mat-accordion *ngFor="let attribute of esbAttributes" cdkDrag>
    <mat-expansion-panel hideToggle>
      <mat-expansion-panel-header>

        <app-attr-item></app-attr-item>

        <div class="" *cdkDragPlaceholder></div>
      </mat-expansion-panel-header>
      <p>This is the primary content of the panel.</p>
    </mat-expansion-panel>
  </mat-accordion>
</ng-template>

```

---  

**FOXTROT**  
1. Displays the draggable area.
2. Loops through the data using *ngFor.

```html  
<div class="attr-canvas-container version-99" cdkDropList (cdkDropListDropped)="drop($event)">

  <div *ngFor="let option of attributeOptions" class="attribute-option" cdkDrag>
    <app-attr-item [optionId]="option.attrId" [optionType]="option.optionType" [optionName]="option.optionName"
      [placeholder]="option.placeholder" [required]="option.required" [visibleCustomer]="option.visibleCustomer"
      [visibleVendor]="option.visibleVendor" [chargeType]="option.chargeType" [chargeCost]="option.chargeCost"
      [chargePrice]="option.chargePrice" [chargeLabor]="option.chargeLabor" [chargeTime]="option.chargeTime">
    </app-attr-item>
  </div>

</div>
```  