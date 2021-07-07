import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// ASSETS
import { MaterialLibraryModule } from '../assets/libs/material/material-library/material-library.module';

import { AppComponent } from './app.component';
import { AttrGirdComponent } from './components/attr-gird/attr-gird.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MaterialLibraryModule],
  declarations: [AppComponent, AttrGirdComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
