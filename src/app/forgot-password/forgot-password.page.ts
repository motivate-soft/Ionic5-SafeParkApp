import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';

import { AuthService } from '../auth/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  
  loginForm : FormGroup;

  error_messages = {
    'username':[
      { type:'required', message: 'Username is required'}
    ],
    'useremail':[
      { type:'required', message: 'Email is required'}
    ]
  }

  constructor(public formBuilder:FormBuilder,
    private navCtrl:NavController, 
    private readonly authService: AuthService,
    private router: Router,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('',Validators.compose([
        Validators.required
      ])),
      useremail: new FormControl('',Validators.compose([
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
  
  async forgotPassword()
  {

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Logging in ...'
    });

    loading.present();
   
    this.authService
      .forgotPassword(this.loginForm.value)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        _ => {
          if(JSON.parse(_)['success'])
          {
            this.navCtrl.navigateRoot([`verify-code/${JSON.parse(_)['userId']}`], {replaceUrl: true});
          }
          else
            this.handleError('No Match');
        },
        err => this.handleError(err));
  }

  async handleError(error: any) {

    console.log(error);

    let message: string;
    // if (error.status && error.status === 401) {
    //   message = 'Login failed';
    // } else {
    //   message = `Unexpected error: ${error.statusText}`;
    // }
    message = `` + error;

    const toast = await this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

}
