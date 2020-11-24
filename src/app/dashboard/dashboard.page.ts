import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, AlertController, LoadingController, ToastController, Platform, PopoverController, NavController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';

import { finalize } from 'rxjs/operators';
import * as moment from "moment"; 
import { Ionic4DatepickerModalComponent } from "@logisticinfotech/ionic4-datepicker";
import { IonicTimepickerModalComponent } from '@logisticinfotech/ionic-timepicker';

import { TranslateService } from '@ngx-translate/core';
//Api
import { UserService } from '../api/user.service';
import { AuthService } from '../auth/auth.service';
// Environment
import {environment} from '../../environments/environment';
// Modal
import { UserViewPage } from '../modals/user-view/user-view.page';
// import { ConsoleReporter } from 'jasmine';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  // @ViewChild('map') element: ElementRef;

  aspectRatio: any;
  user: any;
  currentUserId: any;
  allVehicleImg: any;
  publicPath: any;
  addVehicleImg: any;
  lockImg: any;
  mapImg: any;
  windHeight: any;
  btnHeight: any;

  constructor( public alertController: AlertController, 
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private service: UserService,
    private navCtrl:NavController,
    private authService: AuthService,
    private popoverController: PopoverController,
    private router: Router,
    private platform: Platform,
    private translate: TranslateService) {

      this.windHeight = platform.height() * 0.9;
      this.btnHeight = platform.height() * 0.36;

      this.publicPath = environment.publicURL;
      this.allVehicleImg = this.publicPath + '/images/all-vehicles.png';
      this.addVehicleImg = this.publicPath + '/images/add-car.png';
      this.lockImg = this.publicPath + '/images/lock.png';
      this.mapImg = this.publicPath + '/images/map.png';
      let lang = localStorage.getItem('lang');
      
      if(lang == null || lang == '') {
        translate.use('en');
      }
      else {
        translate.use(lang);
      }

      this.currentUserId = this.authService.getCurrentUserId();

    }

  btnBackgroundColor = "#171717";

  ngOnInit() {
    this.getUserData();
  }

  async btnGoogleMapShow()
  {
    this.navCtrl.navigateRoot(['location'], {replaceUrl: true});
  }

  getUserData(){

    this.service.getUserData(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
     
      if(res['status']) {
        this.user = res['user']; 
      }  
    }, err=>{
      console.log(err);
    })
  }

  show(){
    
  }

  async refreshPage(){
    
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Refreshing page ...'
    });

    loading.present();

    loading.dismiss();

    this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
  }

  addDevice() {
    this.navCtrl.navigateRoot(['add-device'], {replaceUrl: true});
  }

  deviceManage() {
    this.navCtrl.navigateRoot(['device-manage'], {replaceUrl: true});
  }

  goSettingPage() {
    this.navCtrl.navigateRoot(['setting-page'], {replaceUrl: true});
  }

  goArmPage() {
    this.navCtrl.navigateRoot(['arm-page'], {replaceUrl: true});
  }
  
  goAlertPage() {
    this.navCtrl.navigateRoot(['alert'], {replaceUrl: true});
  }

  goWifiPage() {
    this.navCtrl.navigateRoot(['wifi'], {replaceUrl: true});
  }

  logout() {
    this.navCtrl.navigateRoot(['login'], {replaceUrl: true});
  }

  goProfilePage() {
    this.navCtrl.navigateRoot(['profile'], {replaceUrl: true});
  }
}
