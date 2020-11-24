import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';
import { AuthService } from '../auth/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(
    private navCtrl:NavController,
    private router: Router,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController) { }

  ngOnInit() {
    
  }

  goSignIn(){
    this.router.navigate(['/login'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
  }

  goSignUp(){
    this.router.navigate(['/sign-up'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
  }

}
