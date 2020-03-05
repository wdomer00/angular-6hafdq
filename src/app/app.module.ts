import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactusComponent } from './components/contactus/contactus.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ContactusComponent ],
  providers:    [ Title ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
