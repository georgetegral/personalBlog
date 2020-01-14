import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// import ngx-translate and the http loader
import {TranslateModule} from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    HomeRoutingModule,
    TranslateModule,
    CommonModule
  ],
  declarations: [ HomeComponent ],
  exports: []
})
export class HomeModule { }
