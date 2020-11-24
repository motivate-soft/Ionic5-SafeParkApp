import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.page.html',
  styleUrls: ['./user-view.page.scss'],
})
export class UserViewPage implements OnInit {

  @Input("data") data: any;
  @Input("data") groupname: any;

  firstName: string;
  lastName: string;
  username: string;
  email: string;
  birthdate: string;
  zip: string;
  city: string;
  phone: string;


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

  // Comment about me
  c_aboutme: any;
  // Comment what I like to do
  c_like: any;
  // Comment food
  c_food: any;
  
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {

    console.log('Group name: ', this.data);

    this.firstName = this.data.firstName;
    this.lastName = this.data.lastName;
    this.username = this.data.username;
    this.email =  this.data.email;
    this.birthdate = this.data.birthdate;
    this.zip = this.data.zip;
    this.city = this.data.city;
    this.phone = this.data.phone;
    this.c_aboutme = this.data.c_aboutme;
    this.c_food = this.data.c_food;
    this.c_like = this.data.c_like

    this.week[0].isChecked = this.data.monday;
    this.week[1].isChecked = this.data.tuesday;
    this.week[2].isChecked = this.data.wednesday;
    this.week[3].isChecked = this.data.thursday;
    this.week[4].isChecked = this.data.friday;
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
