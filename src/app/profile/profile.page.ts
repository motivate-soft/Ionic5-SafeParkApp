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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  avatarPath: any;
  publicPath: any;
  currentUserId: any;
  user: any;
  userType: any;
  fullName: any;
  userName: any;
  email : String = "";
  phone: any;
  password : String = "";
  currentPassword : String = "";
  newPassword : String = "";
  confirmPassword : String = "";
  isDisabled : boolean = false;
  initEmail : String = "";

  constructor(public alertController: AlertController, 
    private modalCtrl: ModalController,
    private readonly authService: AuthService,
    private router: Router,
    private navCtrl:NavController, 
    private userService: UserService,
    public alertCtrl: AlertController,
    private translate: TranslateService,
    private loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController) {
      this.isDisabled = false;
      this.publicPath = environment.publicURL;
      this.avatarPath = this.publicPath + '/images/avatar.png';
      this.currentUserId = this.authService.getCurrentUserId();
      this.getUserData();
     }

  ngOnInit() {
  }

  getUserData(){
    this.userService.getUserData(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
      if(res['status']) {
        this.user = res['user'];
        this.userType = this.user.userType;
        this.userName = this.user.username;
        this.fullName = this.user.fullName;
        this.email = this.user.email;
        this.initEmail = this.email;
        this.password = this.user.password;
        this.phone = this.user.phone;        
      }  
    }, err=>{
      console.log(err);
    })
  }

  goBack() {
    this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
  }

  validate() {
    if(this.email == "") {
      this.isDisabled = false;
      return true;
    }

    if(this.email == this.initEmail && this.newPassword == "") {
      this.isDisabled = false;
      return true;
    }

    if(this.newPassword != "" && this.confirmPassword == "") {
      this.isDisabled = false;
      return true;
    }

    if(this.newPassword == "" && this.confirmPassword != "") {
      this.isDisabled = false;
      return true;
    }

    this.isDisabled = true;
    return true;
  }

  async updateProfile() {

    if(this.newPassword != this.confirmPassword)
    {
      this.handleError("Please confirm password correctly");
      return true;
    }

    let obj = {
      userId: this.currentUserId,
      email: this.email,
      newPassword: this.newPassword,
    }

    const prompt = await this.alertCtrl.create({
      header : 'Update Profile!',
      message: "Do you agree that updated email?",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          value: this.email
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

            if(data['email'] == this.email)
            {
              this.userService
              .updateProfile(obj)
              .pipe(finalize(() => {}))
              .subscribe(
                _ => {
                  if(JSON.parse(_)['success'])
                  {
                    this.navCtrl.navigateRoot(['login'], {replaceUrl: true});
                  }
                  else
                    this.handleError('Invalid Credentials');
                },
                err => {
                  console.log(err);
                  this.handleError(err)
                });
            }
            else
            {
              return true
            }
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

}
