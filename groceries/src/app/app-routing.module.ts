import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ulogin',
    loadChildren: () => import('./ulogin/ulogin.module').then( m => m.UloginPageModule)
  },
  {
    path: 'udashboard',
    loadChildren: () => import('./udashboard/udashboard.module').then( m => m.UdashboardPageModule)
  },
  {
    path: 'uprofile',
    loadChildren: () => import('./uprofile/uprofile.module').then( m => m.UprofilePageModule)
  },
  {
    path: 'shoppage',
    loadChildren: () => import('./shoppage/shoppage.module').then( m => m.ShoppagePageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
