import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UloginPage } from './ulogin.page';

const routes: Routes = [
  {
    path: '',
    component: UloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UloginPageRoutingModule {}
