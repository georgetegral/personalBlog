import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./views/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'braintegral',
        loadChildren: () => import('./views/braintegral/braintegral.module').then(m => m.BraintegralModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
