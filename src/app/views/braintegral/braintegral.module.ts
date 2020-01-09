import { NgModule } from '@angular/core';
import { BraintegralComponent } from './braintegral.component';
import { BraintegralRoutingModule } from './braintegral-routing.module';

// My imports
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BraintegralRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ BraintegralComponent ],
  exports: []
})
export class BraintegralModule { 
  constructor(){ }
}
