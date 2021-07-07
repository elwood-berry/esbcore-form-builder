import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AttrGirdComponent } from './components/attr-gird/attr-gird.component';
import { AttrHeaderComponent } from './components/attr-header/attr-header.component';
import { AttrSidebarComponent } from './components/attr-sidebar/attr-sidebar.component';
import { AttrCanvasComponent } from './components/attr-canvas/attr-canvas.component';
import { AttrFooterComponent } from './components/attr-footer/attr-footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialLibraryModule],
  declarations: [
    AppComponent,
    FlexLayoutModule,
    AttrGirdComponent,
    AttrHeaderComponent,
    AttrSidebarComponent,
    AttrCanvasComponent,
    AttrFooterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
