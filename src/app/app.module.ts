import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSlideModule } from './image-slide/image-slide.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImageSlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
