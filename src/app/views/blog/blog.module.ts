import { NgModule } from '@angular/core';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
// import ngx-translate and the http loader
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    BlogRoutingModule,
    TranslateModule
  ],
  declarations: [ BlogComponent ],
  exports: []
})
export class BlogModule { }
