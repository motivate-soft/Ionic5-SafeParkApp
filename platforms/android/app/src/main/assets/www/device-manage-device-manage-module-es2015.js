(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-manage-device-manage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/device-manage/device-manage.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device-manage/device-manage.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <!-- fab placed to the bottom end -->  \n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n    <ion-fab-button (click)=\"goDashboardPage()\">  \n      <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n    </ion-fab-button>  \n  </ion-fab>  \n  \n  <div class=\"section\" style=\"margin-top: 80px;\">\n\n    <ion-label>\n      <h1 style=\"margin: 10px 0 0 10px;font-size: 20px;text-align: center;\">Vehicle Management</h1>\n    </ion-label>\n\n    <ion-searchbar (ionInput)=\"searchUsers($event)\"></ion-searchbar>\n    \n    <ion-toolbar style=\"width: 90%; margin: auto\" *ngIf=\"userType =='admin'\">\n      <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"admin\">\n          <ion-icon name=\"people-sharp\"></ion-icon>Clients Vehicles\n        </ion-segment-button>\n        <ion-segment-button value=\"client\">\n          <ion-icon name=\"man-sharp\"></ion-icon>My Vehicles\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n\n      <ion-select [(ngModel)]=\"selectedUser\" (ionChange)=\"onUserChanged()\" placeholder=\"Client\" *ngIf=\"userType == 'admin' && selectedSegment == 'admin'\" style=\"width: 40%;margin-left: 40%;margin-right: 20%;margin-top: 20px;\" >\n        <ion-select-option *ngFor=\"let item of allUsers\" value=\"{{item.id}}\">\n          <ion-label>{{item.fullName}}</ion-label>\n        </ion-select-option>\n      </ion-select>\n\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let item of allDevices\">\n            <ion-item (click)=\"editItem(item)\">\n              <img [src]=\"profileImagePath\" style=\"width: 50px; border-radius: 50%;margin-right: 20px;\"/>\n              \n              <ion-label>\n\n                <h2 *ngIf=\"driverName\">{{driverName}}</h2>\n\n                <h2><ion-icon slot=\"icon-only\" name=\"car-sport-sharp\"></ion-icon> : {{item.name}}</h2>\n\n                <p style=\"padding-top: 2px\"><img [src]=\"licensePlate\" style=\"width: 15px\"/> : <ion-badge color=\"success\" style=\"margin-bottom: -2px;\">{{item.plateNo}}</ion-badge></p>\n    \n                <p *ngIf=\"item.battery >= 20\"><ion-icon slot=\"icon-only\" color=\"secondary\" name=\"battery-half-sharp\"></ion-icon> : <ion-badge color=\"secondary\" style=\"margin-bottom: -2px;\">{{item.battery}}%</ion-badge></p>\n                <p *ngIf=\"item.battery < 20\"><ion-icon slot=\"icon-only\" color=\"danger\" name=\"battery-half-sharp\"></ion-icon> : <ion-badge color=\"danger\" style=\"margin-bottom: -2px;\">{{item.battery}}%</ion-badge></p>\n    \n                <p *ngIf=\"item.engine == 1\"><img [src]=\"engineImage\" style=\"width: 15px\"/> : ON</p>\n                <p *ngIf=\"item.engine == 0\"><img [src]=\"engineDarkImg\" style=\"width: 15px\"/> : OFF</p>\n              \n              </ion-label>\n              \n            </ion-item>\n        \n            <ion-item-options color=\"secondary\" side=\"end\">\n              <ion-item-option color=\"success\" (click)=\"turnOnOff(item)\" *ngIf=\"item.engine == 1\">\n                <ion-label>ON</ion-label>          \n              </ion-item-option>\n              \n              <ion-item-option color=\"light\" (click)=\"turnOnOff(item)\" *ngIf=\"item.engine == 0\">\n                <ion-label>OFF</ion-label>\n              </ion-item-option>\n    \n              <!-- <ion-item-option color=\"secondary\" (click)=\"editItem(item)\">\n                <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n              </ion-item-option> -->\n    \n              <ion-item-option color=\"light\" (click)=\"googleMap(item)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"earth-sharp\"></ion-icon>\n              </ion-item-option>\n    \n              <ion-item-option color=\"danger\" (click)=\"emergencyCall(item)\">\n                <!-- <ion-icon slot=\"icon-only\" name=\"call-sharp\"></ion-icon> -->\n                <ion-label>SOS</ion-label>\n              </ion-item-option>\n    \n              <ion-item-option color=\"dark\" (click)=\"deleteItem(item)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-item-option>\n    \n            </ion-item-options>\n            \n          </ion-item-sliding>\n        </ion-list>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/device-manage/device-manage-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/device-manage/device-manage-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DeviceManagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceManagePageRoutingModule", function() { return DeviceManagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _device_manage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-manage.page */ "./src/app/device-manage/device-manage.page.ts");




const routes = [
    {
        path: '',
        component: _device_manage_page__WEBPACK_IMPORTED_MODULE_3__["DeviceManagePage"]
    }
];
let DeviceManagePageRoutingModule = class DeviceManagePageRoutingModule {
};
DeviceManagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeviceManagePageRoutingModule);



/***/ }),

/***/ "./src/app/device-manage/device-manage.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/device-manage/device-manage.module.ts ***!
  \*******************************************************/
/*! exports provided: createTranslateLoader, DeviceManagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceManagePageModule", function() { return DeviceManagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _device_manage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-manage-routing.module */ "./src/app/device-manage/device-manage-routing.module.ts");
/* harmony import */ var _device_manage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./device-manage.page */ "./src/app/device-manage/device-manage.page.ts");






function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


let DeviceManagePageModule = class DeviceManagePageModule {
};
DeviceManagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _device_manage_routing_module__WEBPACK_IMPORTED_MODULE_6__["DeviceManagePageRoutingModule"]
        ],
        declarations: [_device_manage_page__WEBPACK_IMPORTED_MODULE_7__["DeviceManagePage"]]
    })
], DeviceManagePageModule);



/***/ }),

/***/ "./src/app/device-manage/device-manage.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/device-manage/device-manage.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff !important;\n}\n\nion-title {\n  text-align: center;\n  font-family: \"PoppinsH\" !important;\n  font-weight: 100 !important;\n}\n\nion-title img {\n  width: 15%;\n}\n\n.details {\n  padding: 0 20px 20px 20px !important;\n}\n\n.details ion-item {\n  --border-radius: 5px !important;\n}\n\n.section {\n  margin-top: 25px;\n}\n\nion-label {\n  font-weight: 200 !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  height: 30px !important;\n  font-family: \"PoppinsB\" !important;\n  margin-top: -10px !important;\n}\n\nion-textarea {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input::shadow input {\n  color: red;\n}\n\nion-select.selectGroup {\n  font-weight: 200;\n  width: 100% !important;\n  background-color: white !important;\n  color: black;\n  height: 30px !important;\n  margin-top: -10px;\n  border-radius: 20px !important;\n  font-family: \"PoppinsB\" !important;\n  justify-content: start;\n  /* Set a different placeholder color */\n  --placeholder-color: black;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select.selectGroup ion-select-option {\n  font-family: \"PoppinsB\" !important;\n}\n\nion-select.selectKita {\n  font-weight: 200;\n  width: 100% !important;\n  background-color: transparent !important;\n  color: white;\n  font-family: \"PoppinsB\" !important;\n  justify-content: start;\n  /* Set a different placeholder color */\n  --placeholder-color: white;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select.selectKita ion-select-option {\n  font-family: \"PoppinsB\" !important;\n}\n\n.selectGroup ion-select-option {\n  width: 100%;\n}\n\nion-footer {\n  --color: white !important;\n  height: 45px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nh6 {\n  color: steelblue;\n}\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.subtitle-to-user {\n  margin-top: -12px;\n  background-color: white;\n  color: black;\n  width: 200% !important;\n  text-align: center !important;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlLW1hbmFnZS9FOlxcd29ya19kYXRhXFxIU0hcXEpPQlNcXEF5YXp1cnJlaG1hblxcU2FmZVBhcmtcXEFwcC9zcmNcXGFwcFxcZGV2aWNlLW1hbmFnZVxcZGV2aWNlLW1hbmFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RldmljZS1tYW5hZ2UvZGV2aWNlLW1hbmFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSw2QkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFJQSxrQ0FBQTtFQUFvQywyQkFBQTtBQ0Z4Qzs7QURESTtFQUNJLFVBQUE7QUNHUjs7QURFQTtFQUNJLG9DQUFBO0FDQ0o7O0FEQUk7RUFDSSwrQkFBQTtBQ0VSOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0VBQTZCLGtDQUFBO0FDRWpDOztBRENBO0VBQ0ksZ0JBQUE7RUFBaUIsYUFBQTtFQUFlLHdCQUFBO0VBQTBCLDJCQUFBO0VBQTZCLGlDQUFBO0VBQ3ZGLG1CQUFBO0VBQXFCLDBCQUFBO0VBQTRCLHVCQUFBO0VBQXlCLGtDQUFBO0VBQW9DLDRCQUFBO0FDVWxIOztBRFBBO0VBQ0ksZ0JBQUE7RUFBaUIsYUFBQTtFQUFlLHdCQUFBO0VBQTBCLDJCQUFBO0VBQTZCLGlDQUFBO0VBQ3ZGLG1CQUFBO0VBQXFCLDBCQUFBO0VBQTRCLGtDQUFBO0FDZ0JyRDs7QURiQTtFQUNJLFVBQUE7QUNnQko7O0FEYkE7RUFDSSxnQkFBQTtFQUFrQixzQkFBQTtFQUF3QixrQ0FBQTtFQUFvQyxZQUFBO0VBQWMsdUJBQUE7RUFDNUYsaUJBQUE7RUFBbUIsOEJBQUE7RUFBZ0Msa0NBQUE7RUFBb0Msc0JBQUE7RUFFdkYsc0NBQUE7RUFDQSwwQkFBQTtFQUVBLHdDQUFBO0VBQ0Esd0JBQUE7QUNxQko7O0FEbkJJO0VBQ0ksa0NBQUE7QUNxQlI7O0FEakJFO0VBQ0UsZ0JBQUE7RUFBa0Isc0JBQUE7RUFBd0Isd0NBQUE7RUFBMEMsWUFBQTtFQUFjLGtDQUFBO0VBQW9DLHNCQUFBO0VBRXRJLHNDQUFBO0VBQ0EsMEJBQUE7RUFFQSx3Q0FBQTtFQUNBLHdCQUFBO0FDdUJKOztBRHJCSTtFQUNJLGtDQUFBO0FDdUJSOztBRG5CQTtFQUNJLFdBQUE7QUNzQko7O0FEbkJBO0VBQ0kseUJBQUE7RUFBMkIsdUJBQUE7RUFBeUIsa0NBQUE7QUN3QnhEOztBRHJCQTtFQUNJLGdCQUFBO0FDd0JKOztBRHJCQTtFQUNJLG1CQUFBO0FDd0JKOztBRHJCRTtFQUNFLG1CQUFBO0FDd0JKOztBRHJCQTtFQUNJLGlCQUFBO0VBQW1CLHVCQUFBO0VBQXdCLFlBQUE7RUFBYyxzQkFBQTtFQUF1Qiw2QkFBQTtFQUE4QixtQkFBQTtBQzZCbEgiLCJmaWxlIjoic3JjL2FwcC9kZXZpY2UtbWFuYWdlL2RldmljZS1tYW5hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgfVxyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zSCcgIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDsgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIGJhY2tncm91bmQ6bm9uZTsgb3V0bGluZTogbm9uZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50OyBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDsgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDsgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQ6bm9uZTsgb3V0bGluZTogbm9uZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50OyBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQ6OnNoYWRvdyBpbnB1dCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuXHJcbmlvbi1zZWxlY3Quc2VsZWN0R3JvdXAge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgY29sb3I6IGJsYWNrOyBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IC0xMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7IGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgXHJcbiAgICAvKiBTZXQgYSBkaWZmZXJlbnQgcGxhY2Vob2xkZXIgY29sb3IgKi9cclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG4gIFxyXG4gICAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHJcbiAgICBpb24tc2VsZWN0LW9wdGlvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1zZWxlY3Quc2VsZWN0S2l0YSB7XHJcbiAgICBmb250LXdlaWdodDogMjAwOyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBjb2xvcjogd2hpdGU7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7IGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgXHJcbiAgICAvKiBTZXQgYSBkaWZmZXJlbnQgcGxhY2Vob2xkZXIgY29sb3IgKi9cclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xyXG4gIFxyXG4gICAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cclxuICAgIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHJcbiAgICBpb24tc2VsZWN0LW9wdGlvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4uc2VsZWN0R3JvdXAgaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDsgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDYge1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICB9XHJcbiAgXHJcbiAgLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gIH1cclxuXHJcbi5zdWJ0aXRsZS10by11c2VyIHtcclxuICAgIG1hcmdpbi10b3A6IC0xMnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtjb2xvcjogYmxhY2s7IHdpZHRoOiAyMDAlICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogMjBweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0hcIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG59XG5pb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLmRldGFpbHMge1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGV0YWlscyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQ6OnNoYWRvdyBpbnB1dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1zZWxlY3Quc2VsZWN0R3JvdXAge1xuICBmb250LXdlaWdodDogMjAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcbiAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuaW9uLXNlbGVjdC5zZWxlY3RHcm91cCBpb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdC5zZWxlY3RLaXRhIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuaW9uLXNlbGVjdC5zZWxlY3RLaXRhIGlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0R3JvdXAgaW9uLXNlbGVjdC1vcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG59XG5cbmg2IHtcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuLmFsZXJ0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLnN1YnRpdGxlLXRvLXVzZXIge1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDIwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/device-manage/device-manage.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/device-manage/device-manage.page.ts ***!
  \*****************************************************/
/*! exports provided: DeviceManagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceManagePage", function() { return DeviceManagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _modals_device_page_device_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../modals/device-page/device-page.page */ "./src/app/modals/device-page/device-page.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







//Api


// Environment

let DeviceManagePage = class DeviceManagePage {
    constructor(alertController, modalCtrl, authService, router, navCtrl, userService, translate, loadingCtrl) {
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.counter = 1;
        this.selectedSegment = 'client';
    }
    ngOnInit() {
        this.publicPath = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].publicURL;
        this.profileImagePath = this.publicPath + '/images/default.png';
        this.engineImage = this.publicPath + '/images/engine.png';
        this.engineDarkImg = this.publicPath + '/images/engine-dark.png';
        this.licensePlate = this.publicPath + '/images/licence-plate.png';
        this.currentUserId = this.authService.getCurrentUserId();
        this.getUserData();
        this.getAllDevices();
    }
    getUserData() {
        this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            if (res['status']) {
                this.user = res['user'];
                this.userType = this.user.userType;
            }
        }, err => {
            console.log(err);
        });
    }
    getAllUsers() {
        this.userService.getAllClients().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            if (res['status']) {
                this.allUsers = res['users'];
            }
        }, err => {
            console.log(err);
        });
    }
    getAllDevices() {
        this.userService.getAllDevices(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.allDevices = res;
            this.initDevices = this.allDevices;
        }, err => {
            console.log(err);
        });
    }
    segmentChanged(ev) {
        console.log(this.selectedSegment);
        if (this.selectedSegment == 'admin') {
            this.getAllUsers();
            this.selectedUser = this.allUsers[0]['id'];
            this.getAllAdminDevices(this.someOneId);
        }
        else {
            this.getAllDevices();
        }
    }
    getAllAdminDevices(id) {
        this.userService.getAllDevices(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.allDevices = res;
            this.initDevices = this.allDevices;
        }, err => {
            console.log(err);
        });
    }
    onUserChanged() {
        this.getAllAdminDevices(this.selectedUser);
        for (let i = 0; i < this.allUsers.length; i++) {
            if (this.allUsers[i].id == this.selectedUser) {
                this.driverName = this.allUsers[i].fullName;
                break;
            }
        }
    }
    // Update User
    editItem(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modals_device_page_device_page_page__WEBPACK_IMPORTED_MODULE_5__["DevicePagePage"],
                componentProps: { data: item },
                backdropDismiss: true
            });
            modal.onDidDismiss()
                .then((res) => {
                this.getAllDevices();
            });
            return yield modal.present();
        });
    }
    // Update User
    turnOnOff(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let showMessage = "Do you agree to Turn on the Engine";
            if (item.engine == 1) {
                showMessage = "Do you agree to Turn off the Engine";
            }
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: showMessage,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        cssClass: 'danger',
                        handler: () => {
                            this.userService.turnOnOff(item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
                                this.getAllDevices();
                            }, err => {
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Delete User
    deleteItem(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'Are you sure you want permanently to delete this device?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        cssClass: 'danger',
                        handler: () => {
                            this.userService
                                .deleteDevice(item.id)
                                .pipe()
                                .subscribe(res => {
                                this.getAllDevices();
                            }, err => {
                                console.log(err);
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    //go to the dashboard page
    goDashboardPage() {
        this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
    }
    searchUsers(ev) {
        // set val to the value of the searchbar
        const val = ev.target.value;
        let tmpDevices = this.allDevices;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            tmpDevices = tmpDevices.filter((item) => {
                return ((item['name'] + ' ' + item['imei'] + '' + item['plateNo']).toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (tmpDevices.length > 0) {
                this.allDevices = tmpDevices;
            }
        }
        else {
            this.allDevices = this.initDevices;
            tmpDevices = [];
        }
    }
    emergencyCall(item) {
        this.userService.emergency(item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.getAllDevices();
        }, err => {
            console.log(err);
        });
    }
};
DeviceManagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
DeviceManagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-manage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./device-manage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/device-manage/device-manage.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./device-manage.page.scss */ "./src/app/device-manage/device-manage.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _api_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], DeviceManagePage);



/***/ })

}]);
//# sourceMappingURL=device-manage-device-manage-module-es2015.js.map