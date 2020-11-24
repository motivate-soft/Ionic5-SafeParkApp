import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { HttpModule, Http } from '@angular/http';
// import { AdMobFree } from '@ionic-native/admob-free/ngx';

import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Ionic4DatepickerModule } from "@logisticinfotech/ionic4-datepicker";

import { CommonModule } from '@angular/common';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { environment } from '../environments/environment';

// Image
import { Camera } from '@ionic-native/camera/ngx';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { MapProvider } from './providers/map/map';

import { SuccessmodalPageModule } from './modals/successmodal/successmodal.module';
import { UserManagementPageModule } from './modals/user-management/user-management.module';
import { UserViewPageModule } from './modals/user-view/user-view.module';

import { DevicePagePageModule }  from './modals/device-page/device-page.module';

export function tokenGetter() {
  return localStorage.getItem('jwt_token');
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get("jwt_token");
    },
    whitelistedDomains: environment.whitelistedDomains,
    blacklistedRoutes: environment.whitelistedDomains
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [
    
  ],
  imports: [
    BrowserModule,  
    IonicModule.forRoot(), 
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    Ionic4DatepickerModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: environment.whitelistedDomains
      },
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    SuccessmodalPageModule,
    UserManagementPageModule,
    UserViewPageModule,
    DevicePagePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker,
    Crop,
    FileTransfer, FileTransferObject,
    FCM,
    MapProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
