import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { MiddleComponent } from './middle/middle.component';
import { RightComponent } from './right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    MiddleComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
