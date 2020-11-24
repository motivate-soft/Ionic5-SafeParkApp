import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, AlertController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';
import { AuthService } from '../auth/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  registerForm : FormGroup;
  userState: any;


  error_messages = {
    'userName':[
      { type:'required', message: 'Username is required'}
    ],
    'password':[
      { type:'required', message: 'Password is required'}
    ],
    'confirmPassword':[
      { type:'required', message: 'Confirm password is required'}
    ],
    'fullName':[
      { type:'required', message: 'Full Name is required'}
    ],
    'phone':[
      { type:'required', message: 'Phone Number is required'}
    ]
  }

  constructor(public formBuilder:FormBuilder,
    private navCtrl:NavController, 
    private readonly authService: AuthService,
    private router: Router,
    public alertCtrl: AlertController, 
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController) {
    
      this.registerForm = this.formBuilder.group({
      userName: new FormControl('',Validators.compose([
        Validators.required
      ])),
      email: new FormControl('',Validators.compose([
        Validators.required
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required
      ])),
      confirmPassword: new FormControl('',Validators.compose([
        Validators.required
      ])),
      fullName: new FormControl('',Validators.compose([
        Validators.required
      ])),
      phone: new FormControl('',Validators.compose([
        Validators.required
      ])),
      userType: new FormControl('',Validators.compose([
        Validators.required
      ]))
    }) 
  }

  ngOnInit() {

  }

  goSignIn() {
    this.router.navigate(['/login'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
  }

  async register()
  { 
    if(this.registerForm.value.password != this.registerForm.value.confirmPassword)
    {
      this.handleError('Plz enter password correctly');
    }

    const prompt = await this.alertCtrl.create({
      header : 'Register',
      message: "Enter your email to confirm",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            this.handleError('Email is not Confirmed, Pls try');
          }
        },
        {
          text: 'Confirm',
          handler: data => {
            if(data['email'] == this.registerForm.value.email)
            {
              this.authService
              .register(this.registerForm.value)
              .pipe(finalize(() => {}))
              .subscribe(
                _ => {
                  if(JSON.parse(_)['success'])
                  {
                    this.authService.setCurrentUserId(JSON.parse(_)['userId']);
                    this.handleError('Register successfully');
                    this.navCtrl.navigateRoot(['/login'], {replaceUrl: true});
                  }
                  else
                    this.handleError('Invalid Credentials');
                },
                err => {
                  console.log(err);
                  this.handleError(err)
                });
            }
          }
        }
      ]
    });
    
    await prompt.present();
  }

  selectLevel(type)
  {
    this.userState = type;
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

}
