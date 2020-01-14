import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

// My imports
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    AdminRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  declarations: [ AdminComponent ],
  exports: []
})
export class AdminModule { 
  constructor(){ }
}
