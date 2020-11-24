import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
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
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-wifi',
  templateUrl: './wifi.page.html',
  styleUrls: ['./wifi.page.scss'],
})
export class WifiPage implements OnInit {

  currentUserId: any;
  allDevices: any;
  user: any;
  selectedVehicle: any;
  reqData = {};
  selectedItems: any;
  counter: number = 1;
  publicPath:any;
  wifiImagePath: any;
  name: any;
  vehicleId: any;
  allWifies : any;
  wifi: any;
  selectedVehicles: any;

  constructor(public alertCtrl: AlertController, 
    private modalCtrl: ModalController,
    private readonly authService: AuthService,
    private router: Router,
    private navCtrl:NavController, 
    private userService: UserService,
    private translate: TranslateService,
    private loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController) {
      this.publicPath = environment.publicURL;
      this.wifiImagePath = this.publicPath + '/images/wifi.png';
      this.currentUserId = this.authService.getCurrentUserId();
      this.getUserData();
      this.getAllDevices();
      this.getAllWifies();
     }

  ngOnInit() {
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

  getAllDevices()
  {
    this.userService.getAllDevices(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
      this.allDevices = res;       
    }, err=>{
      console.log(err);
    })
  }

  getAllWifies()
  {
    this.userService.getAllWifies().pipe(finalize(()=> {})).subscribe(res => {
      this.allWifies = res;
    }, err=>{
      console.log(err);
    })
  }

  goDashboardPage() {
    this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
  }

  onVehicleChanged() {
    this.name = this.selectedVehicle.name;
    this.vehicleId = this.selectedVehicle.id;
    this.getVehicles()
  }

  getVehicles()
  {
    this.userService.getVehicles(this.vehicleId).pipe(finalize(()=> {})).subscribe(res => {
      this.selectedVehicles = res;     
    }, err=>{
      console.log(err);
    })
  }

  async onWifiSelected()
  {
    let flag = false;

    for(let i=0;i<this.selectedVehicles.length;i++) {
      if(this.selectedVehicles[i]['ssid'] == this.wifi) {
        flag = true;
      }
    }
    if(flag == true) {
      this.connectState(this.wifi);
      
      return true;
    }

    const prompt = await this.alertCtrl.create({
      header : 'Add Wifi',
      message: "Please enter password",
      inputs: [

        {
          name: 'password',
          placeholder: 'Password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {

          }
        },
        {
          text: 'Confirm',
          handler: data => {

            let obj = {
              'vehicleId': this.vehicleId,
              'password': data['password'],
              'wifi': this.wifi
            }
            this.userService.addWifi(obj).pipe(finalize(()=> {})).subscribe(res => {
              this.handleError(res['message']);
              this.getVehicles();              
            }, err=>{
              this.handleError(err);
            })
          }
        }
      ]
    });
    
    await prompt.present();

  }

  async deleteWifi(vehicleId: any) {
 
    const prompt = await this.alertCtrl.create({
      header : 'Remove Wifi',
      message: "Do you agree that delete this ssid of wifi",
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Agree',
          handler: data => {
            this.userService.deleteWifi(vehicleId).pipe(finalize(()=> {})).subscribe(res => {
              this.getVehicles();   
            }, err=>{
              this.handleError(err);
            })
          }
        }
      ]
    });
    
    await prompt.present();
  }

  async handleError(error: any) {

    let message: string;
    message = `` + error;

    const toast = await this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

  showInterstitialAds(){

  }

  connectState(ssid: any)
  {
    let obj = {
      'ssid': ssid,
    }
    this.userService.connectState(obj).pipe(finalize(()=> {})).subscribe(res => {
      this.getVehicles();
    }, err=>{
      this.handleError(err);
    })    
  }

  changeState(vehicleId: any)
  {
    let obj = {
      'vehicleId': vehicleId,
    }
    this.userService.changeVehicleState(obj).pipe(finalize(()=> {})).subscribe(res => {
      this.getVehicles();
    }, err=>{
      this.handleError(err);
    })    
  }

}
