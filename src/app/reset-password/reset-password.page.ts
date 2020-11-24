import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController} from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';

import { AuthService } from '../auth/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  loginForm : FormGroup;

  error_messages = {
    'password':[
      { type:'required', message: 'Password is required'}
    ],
    'confirm':[
      { type:'required', message: 'Confirm Password is required'}
    ]
  }

  _id: any;

  constructor(public formBuilder:FormBuilder,
    private navCtrl:NavController, 
    private readonly authService: AuthService,
    private router: Router,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController,
    private route: ActivatedRoute) {

    this._id = this.route.snapshot.paramMap.get('id');

    this.loginForm = this.formBuilder.group({
      password: new FormControl('',Validators.compose([
        Validators.required
      ])),
      confirm: new FormControl('',Validators.compose([
        Validators.required
      ]))
    })
   }

  ngOnInit() 
  {
    
  }

  goLogin(){
    this.router.navigate(['/login'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
  }

  async resetPassword()
  {

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Logging in ...'
    });

    loading.present();
   
    if(this.loginForm.value.password != this.loginForm.value.confirm)
    {
      this.handleError("Input Password Correctly");
      loading.dismiss();
      return true;
    }

    let obj = {
      'password': this.loginForm.value.password,
      'userId': this._id
    }

    this.authService
      .updatePassword(obj)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        _ => {
          if(JSON.parse(_)['success'] == true){
            this.navCtrl.navigateRoot(['login'], {replaceUrl: true});
          }
          else{

          }

        },
        err => this.handleError(err));
        loading.dismiss();
  }

  async handleError(error: any) {

    console.log(error);

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
