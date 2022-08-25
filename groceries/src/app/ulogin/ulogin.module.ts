import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UloginPageRoutingModule } from './ulogin-routing.module';

import { UloginPage } from './ulogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UloginPageRoutingModule
  ],
  declarations: [UloginPage]
})
export class UloginPageModule {}
