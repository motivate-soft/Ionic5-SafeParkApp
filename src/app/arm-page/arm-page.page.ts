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
  selector: 'app-arm-page',
  templateUrl: './arm-page.page.html',
  styleUrls: ['./arm-page.page.scss'],
})
export class ArmPagePage implements OnInit {

  currentUserId: any;
  allDevices: any;
  user: any;
  reqData = {};
  state = 0;

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

  checkState(id: any, checked: Boolean)
  {

    if(checked == true) {
      this.state = 1;
    }
    else {
      this.state = 0;
    }

    this.reqData['vehicleId'] = id;
    this.reqData['isArm'] = this.state;
    
    this.userService.updateArm(this.reqData).pipe(finalize(()=> {})).subscribe(res => {
      if(res['status']) {

      }  
    }, err=>{
      console.log(err);
    })

  }

}
