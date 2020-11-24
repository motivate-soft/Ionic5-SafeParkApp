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

@Component({
  selector: 'app-device-manage',
  templateUrl: './device-manage.page.html',
  styleUrls: ['./device-manage.page.scss'],
})
export class DeviceManagePage implements OnInit {

  currentUserId: any;
  allDevices: any;
  publicPath: any;
  profileImagePath: any;
  counter = 1;
  user: any;
  initDevices: any;
  engineImage: any;
  licensePlate: any;
  engineDarkImg: any;
  selectedSegment = 'client';
  userType: any;
  someOneId: any;
  selectedUser: any;
  allUsers: any;
  driverName: any;

  constructor(public alertController: AlertController, 
    private modalCtrl: ModalController,
    private readonly authService: AuthService,
    private router: Router,
    private navCtrl:NavController, 
    private userService: UserService,
    private translate: TranslateService,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.publicPath = environment.publicURL;
    this.profileImagePath = this.publicPath + '/images/default.png';
    this.engineImage = this.publicPath + '/images/engine.png';
    this.engineDarkImg = this.publicPath + '/images/engine-dark.png';
    this.licensePlate = this.publicPath + '/images/licence-plate.png';
    this.currentUserId = this.authService.getCurrentUserId();
    this.getUserData();
    this.getAllDevices();
  }

  getUserData(){
    this.userService.getUserData(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
      if(res['status']) {
        this.user = res['user'];
        this.userType = this.user.userType;
      }  
    }, err=>{
      console.log(err);
    })
  }

  getAllUsers(){
    this.userService.getAllClients().pipe(finalize(()=> {})).subscribe(res => {
      if(res['status']) {
        this.allUsers = res['users'];
      }  
    }, err=>{
      console.log(err);
    })
  }

  getAllDevices()
  {
    this.userService.getAllDevices(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
      this.allDevices = res;
      this.initDevices = this.allDevices;       
    }, err=>{
      console.log(err);
    })
  }

  segmentChanged(ev: any) {

    console.log(this.selectedSegment);
    
    if(this.selectedSegment == 'admin')
    {
      this.getAllUsers();
      this.selectedUser = this.allUsers[0]['id'];
      this.getAllAdminDevices(this.someOneId);
    }
    else {
      this.getAllDevices();
    }
  }

  getAllAdminDevices(id: any) {
    this.userService.getAllDevices(id).pipe(finalize(()=> {})).subscribe(res => {
      this.allDevices = res;
      this.initDevices = this.allDevices;       
    }, err=>{
      console.log(err);
    })
  }

  onUserChanged() {
    this.getAllAdminDevices(this.selectedUser);
    for(let i = 0;i<this.allUsers.length;i++)
    {
      if(this.allUsers[i].id == this.selectedUser)
      {
        this.driverName = this.allUsers[i].fullName;
        break;
      }
    }
  }

  // Update User
  async editItem(item: User) {
  
    const modal = await this.modalCtrl.create({
      component: DevicePagePage,
      componentProps: { data: item },
      backdropDismiss: true
    });

    modal.onDidDismiss()
      .then((res) => {
        this.getAllDevices();

    });

    return await modal.present();

  }
  
  // Update User
  async turnOnOff(item: any) {

    let showMessage = "Do you agree to Turn on the Engine";

    if(item.engine == 1)
    {
      showMessage = "Do you agree to Turn off the Engine"
    }
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: showMessage,
      buttons: [ {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          cssClass: 'danger',
          handler: () => {
            this.userService.turnOnOff(item.id).pipe(finalize(()=> {})).subscribe(res => {
              this.getAllDevices();
            }, err=>{
              console.log(err);
            })            
          }
        }
      ]
    });

    await alert.present();

  }

  // Delete User
  async deleteItem(item: any) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want permanently to delete this device?',
      buttons: [ {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          cssClass: 'danger',
          handler: () => {
            this.userService
            .deleteDevice(item.id)
            .pipe()
            .subscribe(
              res => {
                this.getAllDevices();
              },
              err => {
                console.log(err)
              });
          }
        }
      ]
    });

    await alert.present();

  }

  //go to the dashboard page
  goDashboardPage() {
    this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
  }

  searchUsers(ev: any)
  {
    // set val to the value of the searchbar
    const val = ev.target.value;

    let tmpDevices = this.allDevices;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      tmpDevices = tmpDevices.filter((item) => {
        return ((item['name'] + ' ' + item['imei'] + '' + item['plateNo']).toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      
      if(tmpDevices.length > 0) 
      {
        this.allDevices = tmpDevices;
      }

    }
    else {
        this.allDevices = this.initDevices;
        tmpDevices = [];
      }
  }

  emergencyCall(item: any)
  { 
    this.userService.emergency(item.id).pipe(finalize(()=> {})).subscribe(res => {
      this.getAllDevices();
    }, err=>{
      console.log(err);
    })
  }
}
