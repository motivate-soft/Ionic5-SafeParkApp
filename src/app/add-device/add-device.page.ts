import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController} from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';
import { UserService } from '../api/user.service';
import { AuthService } from '../auth/auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.page.html',
  styleUrls: ['./add-device.page.scss'],
})
export class AddDevicePage implements OnInit {

  deviceForm : FormGroup;
  deviceImei: any;
  currentUserId: any;
  user: any;
  userType: any;
  allUsers: any;
  selectedUser: any;

  constructor(public formBuilder:FormBuilder,
    private navCtrl:NavController, 
    private readonly authService: AuthService,
    private router: Router,
    private readonly loadingCtrl: LoadingController,
    private readonly toastCtrl: ToastController,
    private readonly userService: UserService) {
    
      this.deviceForm = this.formBuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required
      ])),
      name: new FormControl('',Validators.compose([
        Validators.required
      ])),
      phoneNumber: new FormControl('',Validators.compose([
        Validators.required
      ])),
      plateNo: new FormControl('',Validators.compose([
        Validators.required
      ])),
      imei: new FormControl('',Validators.compose([
        Validators.required
      ]))
    });
    
    this.currentUserId = this.authService.getCurrentUserId();
    this.getUserData();
    this.getAllUsers();

  }

  ngOnInit() {

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

  onUserChanged() {
  }

  goDashboardPage() {
    this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
  }

  async add()
  {
    let selectUserId = 0;
    
    if(this.selectedUser != undefined && this.selectedUser != '' && this.selectedUser != null)
    {
      selectUserId = this.selectedUser;
    }
    else{
      selectUserId = this.currentUserId
    }
    
    console.log(selectUserId);

    if(this.deviceImei.length != 15)
    {
      this.handleError("Device Imei must be 15 digits");
      return true;
    }

    const loading = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Adding New Device ...'
    });

    loading.present();
   
    this.userService
      .addDevice(this.deviceForm.value, selectUserId)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        _ => {
          console.log(_);
          if(JSON.parse(_)['success'])
          {
            this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
            this.handleError("Add New Device Successfully");
          }
          else
            this.handleError("Didn't Add");
        },
        err => {

          this.handleError(err)
        });
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
