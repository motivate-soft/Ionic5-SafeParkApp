import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController} from '@ionic/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

//import Service module
import { AuthService } from '../auth/auth.service';
import { finalize } from 'rxjs/operators';

//Component
@Component({
  selector: 'app-verify-code',
  templateUrl: './verify-code.page.html',
  styleUrls: ['./verify-code.page.scss'],
})

export class VerifyCodePage implements OnInit {

  //define the login form to validate username and password
  loginForm : FormGroup;

  //message arrays
  error_messages = {
    'verifyCode':[
      { type:'required', message: 'Verify Code is required'}
    ]
  }

  //individula parameter
  _id: any;

  //Contructor

  constructor (
    public formBuilder:FormBuilder,
    private navCtrl:NavController, 
    private readonly authService: AuthService,
    private router: Router,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController,
    private route: ActivatedRoute) {

    this._id = this.route.snapshot.paramMap.get('id');

    this.loginForm = this.formBuilder.group({
      verifyCode: new FormControl('',Validators.compose([
        Validators.required
      ]))
    })
   }

  ngOnInit() 
  {

  }

  //redirect to login page
  goLogin() {
    this.router.navigate(['/login'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
  }

  //check verifyCode
  async verifyCode()
  {

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Logging in ...'
    });

    loading.present();
   
    //request object including verifyCode and user's id
    let obj = {
      verifyCode: this.loginForm.value.verifyCode,
      userId: this._id
    }

    //check backend
    this.authService
      .verifyCode(obj)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        _ => {
          if(JSON.parse(_)['success'] == 'true'){
            this.navCtrl.navigateRoot([`reset-password/${this._id}`], {replaceUrl: true});
          }
          else{

          }

        },
        err => this.handleError(err));
  }

  //check function that it appears error
  async handleError(error: any) {

    //error's message that array to string
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
