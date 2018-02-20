import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Klikacz1Component } from './klikacz1/klikacz1.component';
import { Klikacz2Component } from './klikacz2/klikacz2.component';


@NgModule({
  declarations: [
    AppComponent,
    Klikacz1Component,
    Klikacz2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
