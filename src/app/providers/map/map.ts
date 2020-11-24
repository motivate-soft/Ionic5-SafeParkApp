import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import {
  GoogleMaps, GoogleMap, GoogleMapsEvent,
  GoogleMapOptions, LocationService,MarkerClusterIcon, MarkerLabel, MarkerClusterOptions, MarkerCluster,
  Marker, ILatLng, GoogleMapsAnimation, MarkerOptions, StreetViewPanorama
} from '@ionic-native/google-maps';

//Service
import { UserService } from '../../api/user.service';
import { AuthService } from '../../auth/auth.service';

// Environment
import {environment} from '../../../environments/environment';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
import { ThrowStmt } from '@angular/compiler';
/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class MapProvider {
  public map: GoogleMap;
  private marker: Marker;
  currentUserId: any;
  user: any;
  publicPath: any;
  profileImagePath: any;
  userName: any;
  totalDevices = [];
  initDevices = [];
  
  constructor(private platform: Platform, 
    private userService: UserService, 
    private authService: AuthService,
    private toastCtrl: ToastController) {
    this.publicPath = environment.publicURL;
    this.profileImagePath = this.publicPath + '/images/default.png';
    this.currentUserId = this.authService.getCurrentUserId();
    this.getUserData();
  }

  getUserData(){
    this.userService.getUserData(this.currentUserId).pipe(finalize(()=> {})).subscribe(res => {
      if(res['status']) {
        this.user = res['user'];
        this.userName = this.user['fullName'];
      }  
    }, err=>{
      console.log(err);
    })
  }

  showStreetView( divId: string, coords: ILatLng = {lat: 35, lng: 56})
  {
    let panorama: StreetViewPanorama = GoogleMaps.createPanorama(divId);

    panorama.setPosition({
      target: coords
    });
  }

  attachMap(totalDevices: any, divId: string, coords: ILatLng = {lat: 35, lng: 56}) {

    this.totalDevices = totalDevices;

    return new Promise((resolve, reject) => {

      let options: GoogleMapOptions = {
        controls: {
          compass: true,
          myLocation: true,
          myLocationButton: true,
          mapToolbar: true,
          streetViewControl: true
        }
      };
      
      this.map = GoogleMaps.create(divId, options);
      this.map.setMapTypeId("ROADMAP");

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        this.map.animateCamera({
          target: coords,
          zoom: 14,
          tilt: 60,
          bearing: 140,
          duration: 5000
        })
        .then(() => {
          
          let labelOptions: MarkerLabel = {
            bold: true,
            fontSize: 15,
            color: "white",
            italic: true
          };

          let clusterIcons: MarkerClusterIcon[] = [
            {min: 1, max: 10000, url: this.profileImagePath, size: {width: 32,height: 32}, anchor: {x: 16, y: 16}, label: labelOptions}
          ];
          
          let options: MarkerClusterOptions = {
            markers: dummyData(this.totalDevices),
            icons: clusterIcons,
            boundsDraw: true,
            maxZoomLevel: 17
          };

          function dummyData(deviceLists)
          {
            let i = 0;
            let markerSettings = [];
            for(i=0;i<deviceLists.length;i++)
            {
              let obj = {
                visible: true,
                disableAutoPan:true,
                draggable: true,
                title: deviceLists[i]['name'],
                position: {
                  lat: deviceLists[i]['lat'],
                  lng: deviceLists[i]['lng']
                }
              }
              markerSettings.push(obj);
            }

            return markerSettings;
          }

          return this.map.addMarkerCluster(options).then((markerCluster: MarkerCluster) => {
            markerCluster.addEventListener(GoogleMapsEvent.MARKER_CLICK)
            .subscribe((params: any[]) => {
                let latLng = params[0];
                this.userService.currentLat = latLng.lat;
                this.userService.currentLng = latLng.lng;
                let obj = {
                  lat: this.userService.currentLat,
                  lng: this.userService.currentLng
                }
                this.userService.getDriver(obj).pipe(finalize(()=> {})).subscribe(res => {
                  console.log(res);  
                  }, err=>{
                  console.log(err);
                })
              });    
          });
        });
      });

      this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((params: any[]) => {
        let latLng = params[0];
        this.handleError("You clicked position that Latitude:" + latLng.lat + " Longtitude:"+ latLng.lng);
        this.map.set("clickPosition", latLng);
      });

    });
  }

  detachMap() {
    // this.map.setDiv();
    this.map = null;
  }

  getMyLocation() {
     return LocationService.getMyLocation();
    // return [37,34];
  }

  async handleError(error: any) {
    let message: string;

    message = error;
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom'
    });

    toast.present();
  }

}
