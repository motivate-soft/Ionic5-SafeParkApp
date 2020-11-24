import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicePagePageRoutingModule } from './device-page-routing.module';

import { DevicePagePage } from './device-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DevicePagePageRoutingModule
  ],
  declarations: [DevicePagePage]
})
export class DevicePagePageModule {}
