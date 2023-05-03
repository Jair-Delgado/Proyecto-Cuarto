import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
import { WebRoutingModule } from './web/web-routing.module';

const routes :Routes =[
  {path:'',redirectTo:'home',pathMatch:'full'},
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebRoutingModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
