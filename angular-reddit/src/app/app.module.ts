import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; //Aggiungiamo qui 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, NgbModule //Aggiungiamolo qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }