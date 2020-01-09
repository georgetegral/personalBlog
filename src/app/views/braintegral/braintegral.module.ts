import { NgModule } from '@angular/core';
import { BraintegralComponent } from './braintegral.component';
import { BraintegralRoutingModule } from './braintegral-routing.module';
// import ngx-translate and the http loader
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    BraintegralRoutingModule,
    TranslateModule
  ],
  declarations: [ BraintegralComponent ],
  exports: []
})
export class BraintegralModule { }
