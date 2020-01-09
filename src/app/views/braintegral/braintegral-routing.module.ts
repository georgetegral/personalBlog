import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BraintegralComponent } from './braintegral.component';

const routes: Routes = [
  {
    path: '',
    component: BraintegralComponent,
    data: {
      title: 'Braintegral'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BraintegralRoutingModule {}
