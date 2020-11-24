import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { User } from '../../model/user.module';

//Api
import { UserService } from '../../api/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.page.html',
  styleUrls: ['./user-management.page.scss'],
})
export class UserManagementPage implements OnInit {

  @Input("data") data:User;

  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  birthdate: string;
  zip: string;
  city: string;
  phone: string;
  usertype: string;
  password = '';
  warning: string;
  monday: any;
  tuesday:any;
  wednesday:any;
  thursday:any;
  friday:any;

  week = [
    {
      label: 'Monday',
      isChecked: true,
      color: 'primary'
    },
    {
      label: 'Tuesday',
      isChecked: true,
      color: 'tertiary'
    },
    {
      label: 'Wednesday',
      isChecked: true,
      color: 'success'
    },
    {
      label: 'Thursday',
      isChecked: true,
      color: 'secondary'
    },
    {
      label: 'Friday',
      isChecked: true,
      color: 'warning'
    }
  ];

  constructor(
    private service: UserService,
    private modalCtrl:ModalController
  ) { }

  ngOnInit() {
    this.id = this.data.id;
    this.firstName = this.data.firstName;
    this.lastName = this.data.lastName;
    this.username = this.data.username;
    this.email =  this.data.email;
    this.birthdate = this.data.birthdate;
    this.zip = this.data.zip;
    this.city = this.data.city;
    this.phone = this.data.phone;
    this.usertype = this.data.usertype;
    this.week[0].isChecked = this.data.monday;
    this.week[1].isChecked = this.data.tuesday;
    this.week[2].isChecked = this.data.wednesday;
    this.week[3].isChecked = this.data.thursday;
    this.week[4].isChecked = this.data.friday;
  }

  update() {

    if(!this.isValidataion())
    {
      this.warning = "Input Error!"
      return;
    }

    let obj = {
      id: this.data.id,
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.username,
      email:  this.data.email,
      birthdate: this.data.birthdate,
      zip: this.zip,
      city: this.city,
      phone: this.phone,
      usertype: this.usertype,
      password: this.password,
      monday: this.changeBooleanInt(this.week[0].isChecked),
      tuesday: this.changeBooleanInt(this.week[1].isChecked),
      wednesday: this.changeBooleanInt(this.week[2].isChecked),
      thursday: this.changeBooleanInt(this.week[3].isChecked),
      friday: this.changeBooleanInt(this.week[4].isChecked)
    }
    
    this.service.updateAdmin(obj)
    .pipe()
    .subscribe(
      _ => {
        this.dismiss();
      },
      err => {
        console.log(err)
      });
  }

  changeBooleanInt(strboolean: any)
  {

    if(strboolean == false)
    {
      return 0;
    }

    return 1;
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  isValidataion() {
    if(this.firstName != undefined && this.firstName != null 
      && this.lastName != undefined && this.lastName != null
      && this.username != undefined && this.username != null
      && this.email != undefined && this.email != null
      && this.birthdate != undefined && this.birthdate != null
      && this.zip != undefined && this.zip != null
      && this.city != undefined && this.city != null
      && this.phone != undefined && this.phone != null)
      {
        return true;
      }
    return false;
  }
}
