(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setting-page-setting-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-page/setting-page.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/setting-page/setting-page.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <!-- fab placed to the bottom end -->  \n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n    <ion-fab-button (click)=\"goDashboardPage()\">  \n      <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n    </ion-fab-button>  \n  </ion-fab>  \n      \n  <ion-list style=\"margin-top: 20px;\">\n    <ion-list-header>\n      <ion-label>\n        <h1 style=\"text-align: center;\">Alarm Trigger Options</h1>\n      </ion-label>\n    </ion-list-header>\n  \n    <ion-item>\n      <ion-label>Vehicle</ion-label>\n\n      <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\" [(ngModel)]=\"selectedVehicle\" (ionChange)=\"onVehicleChanged()\">\n        <ion-select-option *ngFor=\"let item of allDevices\" [value]=\"item\">\n          <ion-label>{{item.name}}</ion-label>          \n        </ion-select-option>\n      </ion-select>\n\n    </ion-item>\n  </ion-list>\n\n    <ion-list *ngIf=\"selectedVehicle\">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">Driver Name</ion-label>\n              <ion-input value=\"{{user.fullName}}\" readonly></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">Name</ion-label>\n              <ion-input value=\"{{selectedVehicle.name}}\" readonly></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">Plate No</ion-label>\n              <ion-input value=\"{{selectedVehicle.plateNo}}\" readonly></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">Imei</ion-label>\n              <ion-input value=\"{{selectedVehicle.imei}}\" readonly></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n\n      <ion-item *ngIf=\"wifi == 1\">\n        <ion-label>Wifi</ion-label>\n        <ion-toggle color=\"secondary\" checked (ionChange)=\"checkState('wifi', $event.target.checked)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"wifi == 0\">\n        <ion-label>Wifi</ion-label>\n        <ion-toggle color=\"secondary\"  (ionChange)=\"checkState('wifi', $event.target.checked)\"></ion-toggle>\n      </ion-item>\n\n      <!-- /////phone number -->\n      <ion-item>\n        <ion-label position=\"floating\">Number 1</ion-label>\n        <ion-input [(ngModel)]=\"number1\" (ionChange)=\"updateVehicleData()\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Number 2</ion-label>\n        <ion-input [(ngModel)]=\"number2\" (ionChange)=\"updateVehicleData()\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Number 3</ion-label>\n        <ion-input [(ngModel)]=\"number3\" (ionChange)=\"updateVehicleData()\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Number 4</ion-label>\n        <ion-input [(ngModel)]=\"number4\" (ionChange)=\"updateVehicleData()\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Number 5</ion-label>\n        <ion-input [(ngModel)]=\"number5\" (ionChange)=\"updateVehicleData()\"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"gps == 1\">\n        <ion-label>Gps</ion-label>\n        <ion-toggle color=\"secondary\" checked (ionChange)=\"checkState('gps', $event.target.checked)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"gps == 0\">\n        <ion-label>Gps</ion-label>\n        <ion-toggle color=\"secondary\" (ionChange)=\"checkState('gps', $event.target.checked)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"gyro == 1\">\n        <ion-label>Gyro</ion-label>\n        <ion-toggle color=\"secondary\" checked (ionChange)=\"checkState('gyro', $event.target.checked)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"gyro == 0\">\n        <ion-label>Gyro</ion-label>\n        <ion-toggle color=\"secondary\" (ionChange)=\"checkState('gyro', $event.target.checked)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"powerSupply == 1\">\n        <ion-label>Power Supply</ion-label>\n        <ion-toggle color=\"secondary\" checked (ionChange)=\"checkState('powerSupply', $event.target.checked)\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"powerSupply == 0\">\n        <ion-label>Power Supply</ion-label>\n        <ion-toggle color=\"secondary\" (ionChange)=\"checkState('powerSupply', $event.target.checked)\"></ion-toggle>\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/setting-page/setting-page-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/setting-page/setting-page-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPagePageRoutingModule", function() { return SettingPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _setting_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting-page.page */ "./src/app/setting-page/setting-page.page.ts");




const routes = [
    {
        path: '',
        component: _setting_page_page__WEBPACK_IMPORTED_MODULE_3__["SettingPagePage"]
    }
];
let SettingPagePageRoutingModule = class SettingPagePageRoutingModule {
};
SettingPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingPagePageRoutingModule);



/***/ }),

/***/ "./src/app/setting-page/setting-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/setting-page/setting-page.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPagePageModule", function() { return SettingPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _setting_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setting-page-routing.module */ "./src/app/setting-page/setting-page-routing.module.ts");
/* harmony import */ var _setting_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setting-page.page */ "./src/app/setting-page/setting-page.page.ts");







let SettingPagePageModule = class SettingPagePageModule {
};
SettingPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _setting_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingPagePageRoutingModule"]
        ],
        declarations: [_setting_page_page__WEBPACK_IMPORTED_MODULE_6__["SettingPagePage"]]
    })
], SettingPagePageModule);



/***/ }),

/***/ "./src/app/setting-page/setting-page.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/setting-page/setting-page.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\nion-toggle {\n  --background: #444444;\n  --background-checked: rgb(0, 219, 248);\n  --handle-background: #ffffff;\n  --handle-background-checked: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2V0dGluZy1wYWdlL0U6XFx3b3JrX2RhdGFcXEhTSFxcSk9CU1xcQXlhenVycmVobWFuXFxTYWZlUGFya1xcQXBwL3NyY1xcYXBwXFxzZXR0aW5nLXBhZ2VcXHNldHRpbmctcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3NldHRpbmctcGFnZS9zZXR0aW5nLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUFBO0FBQ0E7RUFDSSxXQUFBO0VBRUEsdUJBQUE7QUNBSjtBREdFLGdFQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0FKO0FER0UsMENBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTs7OztFQUFBO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFLHVCQUFBO0FBQ0E7RUFDRSxjQUFBO0FDQUo7QURHRSxtQ0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBSjtBREdFO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmctcGFnZS9zZXR0aW5nLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xyXG5pb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXHJcbiAgaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcclxuICAgIGNvbG9yOiAjMjBhMDhhO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAgKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcclxuICAgKiBTaGFkb3cgcGFydHMgd29yayB3aXRoIHBzZXVkby1lbGVtZW50cywgdG9vIVxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcclxuICAgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKTo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gICAgY29sb3I6ICM1NDVjYTc7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gICAgY29sb3I6ICM5NzFlNDk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvZ2dsZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NDQ0NDQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiKDAsIDIxOSwgMjQ4KTtcclxuICBcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM0NDQ0NDQ7XHJcbiAgfSIsIi8qIFNldCB0aGUgd2lkdGggdG8gdGhlIGZ1bGwgY29udGFpbmVyIGFuZCBjZW50ZXIgdGhlIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xuICBjb2xvcjogIzIwYTA4YTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLypcbiAqIFNldCB0aGUgZm9udCBvZiB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwbGFjZWhvbGRlclxuICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbiAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgY29sb3I6ICM1NDVjYTc7XG59XG5cbi8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGNvbG9yOiAjOTcxZTQ5O1xuICBvcGFjaXR5OiAxO1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiKDAsIDIxOSwgMjQ4KTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjNDQ0NDQ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/setting-page/setting-page.page.ts":
/*!***************************************************!*\
  !*** ./src/app/setting-page/setting-page.page.ts ***!
  \***************************************************/
/*! exports provided: SettingPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPagePage", function() { return SettingPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");






//Api


let SettingPagePage = class SettingPagePage {
    constructor(alertCtrl, modalCtrl, authService, router, navCtrl, userService, translate, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.reqData = {};
        this.customPopoverOptions = {
            header: 'My vehicles',
            message: 'Only select your dominant hair color'
        };
        this.currentUserId = this.authService.getCurrentUserId();
        this.getUserData();
        this.getAllDevices();
    }
    ngOnInit() {
        this.wifi = 0;
        this.gyro = 0;
        this.gps = 0;
        this.powerSupply = 0;
    }
    getAllDevices() {
        this.userService.getAllDevices(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.allDevices = res;
        }, err => {
            console.log(err);
        });
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
    goDashboardPage() {
        this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
    }
    onVehicleChanged() {
        this.number1 = this.selectedVehicle.number1;
        this.number2 = this.selectedVehicle.number2;
        this.number3 = this.selectedVehicle.number3;
        this.number4 = this.selectedVehicle.number4;
        this.number5 = this.selectedVehicle.number5;
        this.powerSupply = this.selectedVehicle.powerSupply;
        this.wifi = this.selectedVehicle.wifi;
        this.gyro = this.selectedVehicle.gyro;
        this.gps = this.selectedVehicle.gps;
    }
    checkState(object, checked) {
        if (object == 'wifi') {
            if (checked == true) {
                this.wifi = "1";
            }
            else {
                this.wifi = "0";
            }
        }
        if (object == 'gps') {
            if (checked == true) {
                this.gps = "1";
            }
            else {
                this.gps = "0";
            }
        }
        if (object == 'gyro') {
            if (checked == true) {
                this.gyro = "1";
            }
            else {
                this.gyro = "0";
            }
        }
        if (object == 'powerSupply') {
            if (checked == true) {
                this.powerSupply = "1";
            }
            else {
                this.powerSupply = "0";
            }
        }
        this.updateVehicleData();
    }
    updateVehicleData() {
        this.reqData['vehicleId'] = this.selectedVehicle.id;
        this.reqData['gyro'] = this.gyro;
        this.reqData['wifi'] = this.wifi;
        this.reqData['powerSupply'] = this.powerSupply;
        this.reqData['gps'] = this.gps;
        this.reqData['number1'] = this.number1;
        this.reqData['number2'] = this.number2;
        this.reqData['number3'] = this.number3;
        this.reqData['number4'] = this.number4;
        this.reqData['number5'] = this.number5;
        this.userService.updateVehicleData(this.reqData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
};
SettingPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
SettingPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/setting-page/setting-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting-page.page.scss */ "./src/app/setting-page/setting-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], SettingPagePage);



/***/ })

}]);
//# sourceMappingURL=setting-page-setting-page-module-es2015.js.map