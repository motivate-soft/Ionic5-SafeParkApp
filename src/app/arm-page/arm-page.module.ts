import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmPagePageRoutingModule } from './arm-page-routing.module';

import { ArmPagePage } from './arm-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmPagePageRoutingModule
  ],
  declarations: [ArmPagePage]
})
export class ArmPagePageModule {}
