import { Component, OnInit} from '@angular/core';
import { MapProvider } from '../providers/map/map';
import { ModalController, AlertController, LoadingController, NavController } from '@ionic/angular';
import { MyLocation } from '@ionic-native/google-maps';
import { finalize } from 'rxjs/operators';

// Environment
import {environment} from '../../environments/environment';

//Service
import { UserService } from '../api/user.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  mapId: string = "map_canvas1";
  // streetView: string = "pano_canvas1";
  publicPath: any;
  profileImagePath: any;
  mapImagePath:any;
  roadImagePath: any;
  totalDevices: any;
  initDevices: any;
  searchStr: any;
  initLat: any;
  initLng: any;
  currentLat: any;
  currentLng: any;

  // currentName: any;
  // currentPlateNo: any;
  // currentPhone: any;

  constructor(private map: MapProvider, 
    private userService: UserService,
    private navCtrl:NavController,) {
    this.publicPath = environment.publicURL;
    this.profileImagePath = this.publicPath + '/images/default.png';
     this.mapImagePath = this.publicPath + '/images/googleMap.png';
    this.roadImagePath = this.publicPath + '/images/road.png';
   }

  ngOnInit() {
    this.initLat = 44.439195789225614;
    this.initLng = 26.09365010309947;
    this.getTotalDevices();
  }

  // ionViewWillEnter() {
  //   // this.map.getMyLocation().then((location: MyLocation) => {
  //   //   this.map.attachMap(this.mapId, location.latLng);
  //   // });
  // }

  ionViewWillLeave() {
    this.map.detachMap();
  }

  goDashboardPage() {
    this.navCtrl.navigateRoot(['dashboard'], {replaceUrl: true});
  }

  getTotalDevices()
  {
    this.userService.getTotalDevices().pipe(finalize(()=> {})).subscribe(res => {
      this.initDevices = res;
      this.totalDevices = this.initDevices;
      this.map.attachMap(this.totalDevices, this.mapId, {lat: 44.439195789225614, lng: 26.09365010309947});
    }, err=>{
      console.log(err);
    })
  }

  displayMap(){
    const val = this.searchStr;
    let tmpDevices = this.initDevices;
    this.userService.flag = false;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      tmpDevices = tmpDevices.filter((item) => {
        return ((item['name'] + ' ' + item['plateNo']).toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      if(tmpDevices.length > 0) this.totalDevices = tmpDevices;
    }
    else {
      this.totalDevices = this.initDevices;
      tmpDevices = [];
    }

    if(this.userService.currentLng == 0 && this.userService.currentLat == 0)
    {
      this.currentLng = this.initLng;
      this.currentLat = this.initLat;
      this.map.attachMap(this.totalDevices, this.mapId, {lat: this.currentLat, lng: this.currentLng});
      return true;
    }

    if(this.totalDevices.length > 0)
    {
      this.userService.currentLat = this.totalDevices[0]['lat'];
      this.userService.currentLng = this.totalDevices[0]['lng'];
      this.currentLng = this.userService.currentLng;
      this.currentLat = this.userService.currentLat;
    }
    else {
      this.currentLng = this.userService.currentLng;
      this.currentLat = this.userService.currentLat;
    }

    this.map.attachMap(this.totalDevices, this.mapId, {lat: this.currentLat, lng: this.currentLng});
    
    return true;
  }

  displayStreetView() {
    return true;
    // if(this.userService.currentLng == 0 && this.userService.currentLat == 0)
    // {
    //   return true;
    // }
    // this.userService.flag = true;
    // this.map.showStreetView(this.streetView,  {lat: this.userService.currentLat, lng: this.userService.currentLng});
  }

// getDriver() {
//   this.currentName = this.userService.driver.name;
//   this.currentPhone = this.userService.driver.Phone;
//   this.currentPlateNo = this.userService.driver.plateNo;
// }

}
