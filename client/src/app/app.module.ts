import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { WebRoutingModule } from './web/web-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { WebModule } from './web/web.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        WebModule
    ]
})
export class AppModule { }
