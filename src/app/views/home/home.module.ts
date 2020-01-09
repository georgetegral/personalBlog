import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
// import ngx-translate and the http loader
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    HomeRoutingModule,
    TranslateModule
  ],
  declarations: [ HomeComponent ],
  exports: []
})
export class HomeModule { }
