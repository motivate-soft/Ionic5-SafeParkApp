(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wifi-wifi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wifi/wifi.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wifi/wifi.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <!-- fab placed to the bottom end -->  \n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n    <ion-fab-button (click)=\"goDashboardPage()\">  \n      <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n    </ion-fab-button>  \n  </ion-fab>\n  \n  <ion-label style=\"margin-top: 30px;\">\n    <h1 style=\"text-align: center;\">Wifi Connection</h1>\n  </ion-label>\n      \n  <ion-grid style=\"margin-top: 30px;\">\n    <ion-row>\n      <ion-col size=\"6\">\n        \n        <ion-select class=\"selectAdmin\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\" [(ngModel)]=\"selectedVehicle\" (ionChange)=\"onVehicleChanged()\">\n          <ion-select-option *ngFor=\"let item of allDevices\" [value]=\"item\">\n            <ion-label>{{item.name}}</ion-label>          \n          </ion-select-option>\n        </ion-select>\n        \n      </ion-col>\n      <ion-col size=\"6\">\n\n        <ion-select class=\"selectAdmin\" [(ngModel)]=\"wifi\" placeholder=\"Wifi\" (ionChange)=\"onWifiSelected()\">\n          <ion-select-option *ngFor=\"let item of allWifies\" [value]=\"item.ssid\">\n            <ion-label>{{item.ssid}}</ion-label>\n          </ion-select-option>\n        </ion-select>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngFor=\"let item of selectedVehicles\">\n    <ion-item>\n      <img [src]=\"wifiImagePath\" style=\"width: 50px; border-radius: 50%;margin-right: 20px;\"/>\n      <ion-label>\n        <h3>{{item.ssid}}</h3>\n        <ion-button color=\"dark\" (click)=\"deleteWifi(item.id)\">Remove</ion-button>\n        <ion-button *ngIf=\"item.state == '0'\" (click)=\"changeState(item.id)\">Disconnected</ion-button>\n        <ion-button color=\"success\" *ngIf=\"item.state == '1'\" (click)=\"changeState(item.id)\">Connected</ion-button>\n      </ion-label>\n    </ion-item>          \n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/wifi/wifi-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/wifi/wifi-routing.module.ts ***!
  \*********************************************/
/*! exports provided: WifiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiPageRoutingModule", function() { return WifiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wifi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wifi.page */ "./src/app/wifi/wifi.page.ts");




const routes = [
    {
        path: '',
        component: _wifi_page__WEBPACK_IMPORTED_MODULE_3__["WifiPage"]
    }
];
let WifiPageRoutingModule = class WifiPageRoutingModule {
};
WifiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WifiPageRoutingModule);



/***/ }),

/***/ "./src/app/wifi/wifi.module.ts":
/*!*************************************!*\
  !*** ./src/app/wifi/wifi.module.ts ***!
  \*************************************/
/*! exports provided: WifiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiPageModule", function() { return WifiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _wifi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wifi-routing.module */ "./src/app/wifi/wifi-routing.module.ts");
/* harmony import */ var _wifi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wifi.page */ "./src/app/wifi/wifi.page.ts");







let WifiPageModule = class WifiPageModule {
};
WifiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wifi_routing_module__WEBPACK_IMPORTED_MODULE_5__["WifiPageRoutingModule"]
        ],
        declarations: [_wifi_page__WEBPACK_IMPORTED_MODULE_6__["WifiPage"]]
    })
], WifiPageModule);



/***/ }),

/***/ "./src/app/wifi/wifi.page.scss":
/*!*************************************!*\
  !*** ./src/app/wifi/wifi.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\nion-toggle {\n  --background: #444444;\n  --background-checked: rgb(0, 219, 248);\n  --handle-background: #ffffff;\n  --handle-background-checked: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lmaS9FOlxcd29ya19kYXRhXFxIU0hcXEpPQlNcXEF5YXp1cnJlaG1hblxcU2FmZVBhcmtcXEFwcC9zcmNcXGFwcFxcd2lmaVxcd2lmaS5wYWdlLnNjc3MiLCJzcmMvYXBwL3dpZmkvd2lmaS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQUE7QUFDQTtFQUNJLFdBQUE7RUFFQSx1QkFBQTtBQ0FKO0FER0UsZ0VBQUE7QUFDQTs7RUFFRSxjQUFBO0FDQUo7QURHRSwwQ0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBSjtBREdFOzs7O0VBQUE7QUFLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0UsdUJBQUE7QUFDQTtFQUNFLGNBQUE7QUNBSjtBREdFLG1DQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtFQUNBLHNDQUFBO0VBRUEsNEJBQUE7RUFDQSxvQ0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvd2lmaS93aWZpLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldCB0aGUgd2lkdGggdG8gdGhlIGZ1bGwgY29udGFpbmVyIGFuZCBjZW50ZXIgdGhlIGNvbnRlbnQgKi9cclxuaW9uLXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxyXG4gIGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gICAgZmxleDogMCAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XHJcbiAgICBjb2xvcjogIzIwYTA4YTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXHJcbiAgICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcclxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXHJcbiAgICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICAgIGNvbG9yOiAjNTQ1Y2E3O1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcclxuICAgIGNvbG9yOiAjOTcxZTQ5O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIGlvbi10b2dnbGUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYigwLCAyMTksIDI0OCk7XHJcbiAgXHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjNDQ0NDQ0O1xyXG4gIH0iLCIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBTZXQgdGhlIGZsZXggaW4gb3JkZXIgdG8gc2l6ZSB0aGUgdGV4dCB3aWR0aCB0byBpdHMgY29udGVudCAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgZmxleDogMCAwIGF1dG87XG59XG5cbi8qIFNldCB0aGUgcGxhY2Vob2xkZXIgY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcbiAgY29sb3I6ICMyMGEwOGE7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi8qXG4gKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcbiAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvUHNldWRvLWVsZW1lbnRzXG4gKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGNvbG9yOiAjNTQ1Y2E3O1xufVxuXG4vKiBTZXQgdGhlIGljb24gY29sb3IgYW5kIG9wYWNpdHkgKi9cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBjb2xvcjogIzk3MWU0OTtcbiAgb3BhY2l0eTogMTtcbn1cblxuaW9uLXRvZ2dsZSB7XG4gIC0tYmFja2dyb3VuZDogIzQ0NDQ0NDtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYigwLCAyMTksIDI0OCk7XG4gIC0taGFuZGxlLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzQ0NDQ0NDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/wifi/wifi.page.ts":
/*!***********************************!*\
  !*** ./src/app/wifi/wifi.page.ts ***!
  \***********************************/
/*! exports provided: WifiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WifiPage", function() { return WifiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






//Api


// Environment

let WifiPage = class WifiPage {
    constructor(alertCtrl, modalCtrl, authService, router, navCtrl, userService, translate, loadingCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.reqData = {};
        this.counter = 1;
        this.publicPath = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].publicURL;
        this.wifiImagePath = this.publicPath + '/images/wifi.png';
        this.currentUserId = this.authService.getCurrentUserId();
        this.getUserData();
        this.getAllDevices();
        this.getAllWifies();
    }
    ngOnInit() {
    }
    getUserData() {
        this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            if (res['status']) {
                this.user = res['user'];
            }
        }, err => {
            console.log(err);
        });
    }
    getAllDevices() {
        this.userService.getAllDevices(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.allDevices = res;
        }, err => {
            console.log(err);
        });
    }
    getAllWifies() {
        this.userService.getAllWifies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.allWifies = res;
        }, err => {
            console.log(err);
        });
    }
    goDashboardPage() {
        this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
    }
    onVehicleChanged() {
        this.name = this.selectedVehicle.name;
        this.vehicleId = this.selectedVehicle.id;
        this.getVehicles();
    }
    getVehicles() {
        this.userService.getVehicles(this.vehicleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.selectedVehicles = res;
        }, err => {
            console.log(err);
        });
    }
    onWifiSelected() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let flag = false;
            for (let i = 0; i < this.selectedVehicles.length; i++) {
                if (this.selectedVehicles[i]['ssid'] == this.wifi) {
                    flag = true;
                }
            }
            if (flag == true) {
                this.connectState(this.wifi);
                return true;
            }
            const prompt = yield this.alertCtrl.create({
                header: 'Add Wifi',
                message: "Please enter password",
                inputs: [
                    {
                        name: 'password',
                        placeholder: 'Password'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: data => {
                            let obj = {
                                'vehicleId': this.vehicleId,
                                'password': data['password'],
                                'wifi': this.wifi
                            };
                            this.userService.addWifi(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
                                this.handleError(res['message']);
                                this.getVehicles();
                            }, err => {
                                this.handleError(err);
                            });
                        }
                    }
                ]
            });
            yield prompt.present();
        });
    }
    deleteWifi(vehicleId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: 'Remove Wifi',
                message: "Do you agree that delete this ssid of wifi",
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Agree',
                        handler: data => {
                            this.userService.deleteWifi(vehicleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
                                this.getVehicles();
                            }, err => {
                                this.handleError(err);
                            });
                        }
                    }
                ]
            });
            yield prompt.present();
        });
    }
    handleError(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let message;
            message = `` + error;
            const toast = yield this.toastCtrl.create({
                message,
                duration: 5000,
                position: 'bottom'
            });
            toast.present();
        });
    }
    showInterstitialAds() {
    }
    connectState(ssid) {
        let obj = {
            'ssid': ssid,
        };
        this.userService.connectState(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.getVehicles();
        }, err => {
            this.handleError(err);
        });
    }
    changeState(vehicleId) {
        let obj = {
            'vehicleId': vehicleId,
        };
        this.userService.changeVehicleState(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.getVehicles();
        }, err => {
            this.handleError(err);
        });
    }
};
WifiPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
WifiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wifi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wifi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wifi/wifi.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wifi.page.scss */ "./src/app/wifi/wifi.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], WifiPage);



/***/ })

}]);
//# sourceMappingURL=wifi-wifi-module-es2015.js.map