import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';

import { AppComponent } from './app.component';
import { AttrGirdComponent } from './components/attr-gird/attr-gird.component';
import { AttrHeaderComponent } from './components/attr-header/attr-header.component';
import { AttrSidebarComponent } from './components/attr-sidebar/attr-sidebar.component';
import { AttrCanvasComponent } from './components/attr-canvas/attr-canvas.component';
import { AttrFooterComponent } from './components/attr-footer/attr-footer.component';
import { SingleAttributeService } from './services/single-attribute/single-attribute.service';
import { DataAttributesService } from './services/data-attributes.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialLibraryModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    AttrGirdComponent,
    AttrHeaderComponent,
    AttrSidebarComponent,
    AttrCanvasComponent,
    AttrFooterComponent
  ],
  bootstrap: [AppComponent],
  providers: [SingleAttributeService, DataAttributesService]
})
export class AppModule {}
