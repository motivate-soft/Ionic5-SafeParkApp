import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';
import { AuthService } from '../../auth/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  loginForm : FormGroup;

  error_messages = {
    'username':[
      { type:'required', message: 'Username is required'}
      // { type:'minlength', message: 'Username lenght must be longer than or equal to 6 characters '},
      // { type:'maxlength', message: 'Username lenght Cannot exceed 20 characters '},
      // { type:'pattern', message: 'Please enter valid Username format '}
    ],
    'password':[
      { type:'required', message: 'Password is required'}
      // { type:'minlength', message: 'Password lenght must be longer than or equal to 6 characters '},
      // { type:'maxlength', message: 'Password lenght Cannot exceed 10 characters '},
      // { type:'pattern', message: 'Password must contain numbers,uppercase and lowercase letters '}
    ]
  }


  constructor(public formBuilder:FormBuilder,
    private navCtrl:NavController,
    // public admobFree: AdMobFree, 
    private readonly authService: AuthService,
    private router: Router,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('',Validators.compose([
        Validators.required
        // Validators.minLength(6),
        // Validators.maxLength(20)
        // Validators.pattern('^[a-zA-Z0-9_.+-]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required
        // Validators.minLength(6),
        // Validators.maxLength(20)
        // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]))
    })
   }

  ngOnInit() 
  {
  }

  // goSignup()
  // {
  //   this.navCtrl.navigateForward('signup');
  // }

  async login()
  {
    
    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Logging in ...'
    });

    loading.present();
   
    this.authService
      .login(this.loginForm.value)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        _ => {
        
          if(JSON.parse(_)['success'])
          {

            this.authService.setCurrentUserId(JSON.parse(_)['userId']);

            this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
          }
          else
            this.handleError('Invalid Credentials');
        },
        err => {
          console.log(err);
          this.handleError(err)
        });
  }

  forgotPassword(){
    this.router.navigate(['/forgot-password'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
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

  showInterstitialAds(){
    // let interstitialConfig: AdMobFreeInterstitialConfig = {
    //     isTesting: false, // Remove in production
    //     autoShow: true,//,
    //     id: "ca-app-pub-2582975357316139/1582620736"
    // };
    // this.admobFree.interstitial.config(interstitialConfig);
    // this.admobFree.interstitial.prepare().then(() => {
    // }).catch(e => alert(e));
  }
}
