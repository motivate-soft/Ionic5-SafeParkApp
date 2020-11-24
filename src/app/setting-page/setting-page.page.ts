import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { User } from '../model/user.module';
import { DevicePagePage } from './../modals/device-page/device-page.page';

import { TranslateService } from '@ngx-translate/core';

//Api
import { UserService } from '../api/user.service';
import { AuthService } from '../auth/auth.service';

// Environment
import {environment} from '../../environments/environment';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.page.html',
  styleUrls: ['./setting-page.page.scss'],
})
export class SettingPagePage implements OnInit {

  currentUserId: any;
  allDevices: any;
  user: any;
  selectedVehicle: any;
  reqData = {};
  number1: any;
  number2: any;
  number3: any;
  number4: any;
  number5: any;
  gyro: any;
  gps: any;
  wifi: any;
  powerSupply: any;

  constructor(public alertCtrl: AlertController, 
    private modalCtrl: ModalController,
    private readonly authService: AuthService,
    private router: Router,
    private navCtrl:NavController, 
    private userService: UserService,
    private translate: TranslateService,
    private loadingCtrl: LoadingController) {
      this.currentUserId = this.authService.getCurrentUserId();
      this.getUserData();
      this.getAllDevices();
     }

  ngOnInit() {

    this.wifi = 0;
    this.gyro = 0;
    this.gps = 0;
    this.powerSupply = 0;
  }

  customPopoverOptions: any = {
    header: 'My vehicles',
    message: 'Only select your dominant hair color'
  };

  getAllDevices()
  {
    this.userService.getAllDevices(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
      this.allDevices = res;       
    }, err=>{
      console.log(err);
    })
  }

  getUserData(){
    this.userService.getUserData(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
      if(res['status']) {
        this.user = res['user'];
      }  
    }, err=>{
      console.log(err);
    })
  }

  goDashboardPage() {
    this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
  }

  onVehicleChanged(){

    this.number1 = this.selectedVehicle.number1;
    this.number2 = this.selectedVehicle.number2;
    this.number3 = this.selectedVehicle.number3;
    this.number4 = this.selectedVehicle.number4;
    this.number5 = this.selectedVehicle.number5;
    this.powerSupply = this.selectedVehicle.powerSupply;
    this.wifi = this.selectedVehicle.wifi;
    this.gyro = this.selectedVehicle.gyro;
    this.gps = this.selectedVehicle.gps;
  }

  checkState(object: any, checked: Boolean)
  {
    if(object == 'wifi')
    {
      if(checked == true)
      {
        this.wifi = "1";
      }
      else {
        this.wifi = "0";
      }
    }

    if(object == 'gps')
    {
      if(checked == true)
      {
        this.gps = "1";
      }
      else {
        this.gps = "0";
      }
    }
    if(object == 'gyro')
    {
      if(checked == true)
      {
        this.gyro = "1";
      }
      else {
        this.gyro = "0";
      }
    }
    if(object == 'powerSupply')
    {
      if(checked == true)
      {
        this.powerSupply = "1";
      }
      else {
        this.powerSupply = "0";
      }
    }

    this.updateVehicleData();
  }

  updateVehicleData(){

    this.reqData['vehicleId'] = this.selectedVehicle.id;
    this.reqData['gyro'] = this.gyro;
    this.reqData['wifi'] = this.wifi;
    this.reqData['powerSupply'] = this.powerSupply;
    this.reqData['gps'] = this.gps;
    this.reqData['number1'] = this.number1;
    this.reqData['number2'] = this.number2;
    this.reqData['number3'] = this.number3;
    this.reqData['number4'] = this.number4;
    this.reqData['number5'] = this.number5;

    this.userService.updateVehicleData(this.reqData).pipe(finalize(()=> {})).subscribe(res => {
      console.log(res);  
    }, err=>{
      console.log(err);
    })
  }
}
