import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
// import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free/ngx';

import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  dark = false;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    // public admobFree: AdMobFree
    private fcm: FCM,
    private translate: TranslateService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.translate.setDefaultLang('en');
      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(this.platform.is("cordova"))
      {
        this.showBannerAd();
      }

      this.fcm.onNotification().subscribe(data => {
        if (data.wasTapped) {
          console.log("Received in background");
          this.router.navigate(['communication', data.message]);
        } else {
          console.log("Received in foreground");
        };
      });

      this.fcm.onTokenRefresh().subscribe(token => {
        localStorage.setItem('fcm', token);
      });

      this.getToken();

    });
  }

  showBannerAd() {
    // let bannerConfig: AdMobFreeBannerConfig = {
    //     isTesting: false, // Remove in production
    //     autoShow: true,
    //     id: "ca-app-pub-2582975357316139/8583143350"
    // };
    // this.admobFree.banner.config(bannerConfig);

    // this.admobFree.banner.prepare().then(() => {
    //     // success
    // }).catch(e => alert(e));
  }

  subscribeToTopic() {
    this.fcm.subscribeToTopic('enappd');
  }
  getToken() {
    this.fcm.getToken().then(token => {
      // Register your new token in your back-end if you want
      // backend.registerToken(token);
      localStorage.setItem('fcm', token);
    });
  }
  unsubscribeFromTopic() {
    this.fcm.unsubscribeFromTopic('enappd');
  }
}
