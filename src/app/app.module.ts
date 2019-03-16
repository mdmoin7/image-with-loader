import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ImageWithLoadingComponent } from './image-with-loading/image-with-loading.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ImageWithLoadingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
