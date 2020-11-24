import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { User } from '../../model/user.module';

//Api
import { UserService } from '../../api/user.service';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.page.html',
  styleUrls: ['./device-page.page.scss'],
})
export class DevicePagePage implements OnInit {

  @Input("data") data: any;

  name: any;
  imei: any;
  phoneNumber: any;
  email: any;
  plateNo: any;
  createdAt: any;
  deviceId: any;
  reqData = {};

  constructor(private service: UserService,
    private modalCtrl:ModalController,
    private readonly toastCtrl: ToastController) { }

  ngOnInit() {
    this.name = this.data.name;
    this.email = this.data.email;
    this.imei = this.data.imei;
    this.phoneNumber = this.data.phoneNumber;
    this.plateNo = this.data.plateNo;
    this.createdAt = this.data.created_at;
    this.deviceId = this.data.id;
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  update(){

    if(this.imei.length != 15)
    {
      this.handleError("Device Imei must be 15 digits");
    }

    this.reqData['name'] = this.name;
    this.reqData['email'] = this.email;
    this.reqData['imei'] = this.imei;
    this.reqData['phoneNumber'] = this.phoneNumber;
    this.reqData['plateNo'] = this.plateNo;
    this.reqData['deviceId'] = this.deviceId;

    this.service.editDevice(this.reqData)
    .pipe()
    .subscribe(
      res => {
        this.handleError(res.message)
        this.dismiss();
      },
      err => {
        console.log(err)
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
