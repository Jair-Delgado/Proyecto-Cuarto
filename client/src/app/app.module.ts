import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebModule } from './web/web.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { WebRoutingModule } from './web/web-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WebModule,
    SharedModule, 
    AppRoutingModule,
    RouterModule,
    WebRoutingModule
  ],
  exports:[WebModule, SharedModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
