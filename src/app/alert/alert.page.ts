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
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  currentUserId: any;
  allDevices: any;
  user: any;
  selectedVehicle: any;
  reqData = {};
  selectedItems: any;
  counter: number = 1;

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
  }

  getAllDevices()
  {
    this.userService.getAllDevices(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
      this.allDevices = res;       
    }, err=>{
      console.log(err);
    })
  }

  getAllAlerts()
  {
    this.userService.getAllAlerts(this.selectedVehicle.id).pipe(finalize(()=> {})).subscribe(res => {
      this.selectedItems = res;       
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

  onVehicleChanged() {
    this.getAllAlerts();
  }

}
