(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["location-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n  <!-- fab placed to the bottom end -->  \n  <ion-fab vertical=\"top\" horizontal=\"start\">  \n    <ion-fab-button (click)=\"goDashboardPage()\">  \n      <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n    </ion-fab-button>  \n  </ion-fab>  \n\n  <!-- <ion-searchbar (ionInput)=\"searchDevice($event)\" style=\"margin-top: 20px;\"></ion-searchbar> -->\n\n  <ion-searchbar [(ngModel)]=\"searchStr\" style=\"width: 80%;margin: auto;margin-top: 40px;\"></ion-searchbar>\n\n  <div id=\"map_canvas1\" style=\"width: 90%;margin: auto; height:400px\"></div>\n  <!-- <div class=\"pano\" id=\"pano_canvas1\" *ngIf=\"userService.flag == true\" style=\"width: 90%;margin: auto; height:300px\"></div> -->\n  <ion-item>\n    <img [src]=\"roadImagePath\" style=\"width: 30px; height: 30px;margin-left: 60px\" (click)=\"displayStreetView()\" *ngIf=\"userService.currentLng != 0 || userService.currentLat != 0\"/>\n    <img [src]=\"mapImagePath\" style=\"width: 30px; height: 30px;margin-left: 20px\" (click)=\"displayMap()\" *ngIf=\"userService.currentLng != 0 || userService.currentLat != 0\"/>    \n  </ion-item>\n\n  <ion-list>\n    <ion-item *ngIf=\"userService.driver\" >\n      <img [src]=\"profileImagePath\" style=\"width: 30px; height: 30px;margin-right: 20px;\"/>\n      \n      <ion-label>\n        <p> Driver name : {{userService.driver.name}}</p>\n        <p> Plate No : {{userService.driver.plateNo}}</p>\n        <p> Phone Number : {{userService.driver.phoneNumber}}</p>\n      </ion-label>\n\n      <!-- <ion-icon color=\"danger\" name=\"call-sharp\" slot=\"end\"></ion-icon> -->\n      \n    </ion-item>\n  </ion-list>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/location/location-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/location/location-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageRoutingModule", function() { return LocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");




const routes = [
    {
        path: '',
        component: _location_page__WEBPACK_IMPORTED_MODULE_3__["LocationPage"]
    }
];
let LocationPageRoutingModule = class LocationPageRoutingModule {
};
LocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LocationPageRoutingModule);



/***/ }),

/***/ "./src/app/location/location.module.ts":
/*!*********************************************!*\
  !*** ./src/app/location/location.module.ts ***!
  \*********************************************/
/*! exports provided: LocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPageModule", function() { return LocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-routing.module */ "./src/app/location/location-routing.module.ts");
/* harmony import */ var _location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location.page */ "./src/app/location/location.page.ts");







let LocationPageModule = class LocationPageModule {
};
LocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _location_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationPageRoutingModule"]
        ],
        declarations: [_location_page__WEBPACK_IMPORTED_MODULE_6__["LocationPage"]]
    })
], LocationPageModule);



/***/ }),

/***/ "./src/app/location/location.page.scss":
/*!*********************************************!*\
  !*** ./src/app/location/location.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff !important;\n}\n\nion-title {\n  text-align: center;\n  font-family: \"PoppinsH\" !important;\n  font-weight: 100 !important;\n}\n\nion-title img {\n  width: 15%;\n}\n\n.details {\n  padding: 0 20px 20px 20px !important;\n}\n\n.details ion-item {\n  --border-radius: 5px !important;\n}\n\n.section {\n  margin-top: 25px;\n}\n\nion-label {\n  font-weight: 200 !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  height: 30px !important;\n  font-family: \"PoppinsB\" !important;\n  margin-top: -10px !important;\n}\n\nion-textarea {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input::shadow input {\n  color: red;\n}\n\nion-select.selectGroup {\n  font-weight: 200;\n  width: 100% !important;\n  background-color: white !important;\n  color: black;\n  height: 30px !important;\n  margin-top: -10px;\n  border-radius: 20px !important;\n  font-family: \"PoppinsB\" !important;\n  justify-content: start;\n  /* Set a different placeholder color */\n  --placeholder-color: black;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select.selectGroup ion-select-option {\n  font-family: \"PoppinsB\" !important;\n}\n\nion-select.selectKita {\n  font-weight: 200;\n  width: 100% !important;\n  background-color: transparent !important;\n  color: white;\n  font-family: \"PoppinsB\" !important;\n  justify-content: start;\n  /* Set a different placeholder color */\n  --placeholder-color: white;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select.selectKita ion-select-option {\n  font-family: \"PoppinsB\" !important;\n}\n\n.selectGroup ion-select-option {\n  width: 100%;\n}\n\nion-footer {\n  --color: white !important;\n  height: 45px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nh6 {\n  color: steelblue;\n}\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.subtitle-to-user {\n  margin-top: -12px;\n  background-color: white;\n  color: black;\n  width: 200% !important;\n  text-align: center !important;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vRTpcXHdvcmtfZGF0YVxcSFNIXFxKT0JTXFxBeWF6dXJyZWhtYW5cXFNhZmVQYXJrXFxBcHAvc3JjXFxhcHBcXGxvY2F0aW9uXFxsb2NhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLDZCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUlBLGtDQUFBO0VBQW9DLDJCQUFBO0FDRnRDOztBRERFO0VBQ0ksVUFBQTtBQ0dOOztBREVBO0VBQ0Usb0NBQUE7QUNDRjs7QURBRTtFQUNJLCtCQUFBO0FDRU47O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsMkJBQUE7RUFBNkIsa0NBQUE7QUNFL0I7O0FEQ0E7RUFDRSxnQkFBQTtFQUFpQixhQUFBO0VBQWUsd0JBQUE7RUFBMEIsMkJBQUE7RUFBNkIsaUNBQUE7RUFDdkYsbUJBQUE7RUFBcUIsMEJBQUE7RUFBNEIsdUJBQUE7RUFBeUIsa0NBQUE7RUFBb0MsNEJBQUE7QUNVaEg7O0FEUEE7RUFDRSxnQkFBQTtFQUFpQixhQUFBO0VBQWUsd0JBQUE7RUFBMEIsMkJBQUE7RUFBNkIsaUNBQUE7RUFDdkYsbUJBQUE7RUFBcUIsMEJBQUE7RUFBNEIsa0NBQUE7QUNnQm5EOztBRGJBO0VBQ0UsVUFBQTtBQ2dCRjs7QURiQTtFQUNFLGdCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLGtDQUFBO0VBQW9DLFlBQUE7RUFBYyx1QkFBQTtFQUM1RixpQkFBQTtFQUFtQiw4QkFBQTtFQUFnQyxrQ0FBQTtFQUFvQyxzQkFBQTtFQUV2RixzQ0FBQTtFQUNBLDBCQUFBO0VBRUEsd0NBQUE7RUFDQSx3QkFBQTtBQ3FCRjs7QURuQkU7RUFDSSxrQ0FBQTtBQ3FCTjs7QURqQkE7RUFDRSxnQkFBQTtFQUFrQixzQkFBQTtFQUF3Qix3Q0FBQTtFQUEwQyxZQUFBO0VBQWMsa0NBQUE7RUFBb0Msc0JBQUE7RUFFdEksc0NBQUE7RUFDQSwwQkFBQTtFQUVBLHdDQUFBO0VBQ0Esd0JBQUE7QUN1QkY7O0FEckJFO0VBQ0ksa0NBQUE7QUN1Qk47O0FEbkJBO0VBQ0UsV0FBQTtBQ3NCRjs7QURuQkE7RUFDRSx5QkFBQTtFQUEyQix1QkFBQTtFQUF5QixrQ0FBQTtBQ3dCdEQ7O0FEckJBO0VBQ0UsZ0JBQUE7QUN3QkY7O0FEckJBO0VBQ0UsbUJBQUE7QUN3QkY7O0FEckJBO0VBQ0UsbUJBQUE7QUN3QkY7O0FEckJBO0VBQ0UsaUJBQUE7RUFBbUIsdUJBQUE7RUFBd0IsWUFBQTtFQUFjLHNCQUFBO0VBQXVCLDZCQUFBO0VBQThCLG1CQUFBO0FDNkJoSCIsImZpbGUiOiJzcmMvYXBwL2xvY2F0aW9uL2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgfVxyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGluc0gnICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcclxuICBpb24taXRlbSB7XHJcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDpub25lOyBvdXRsaW5lOiBub25lOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50OyBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDsgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDsgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kOm5vbmU7IG91dGxpbmU6IG5vbmU7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dDo6c2hhZG93IGlucHV0IHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG5pb24tc2VsZWN0LnNlbGVjdEdyb3VwIHtcclxuICBmb250LXdlaWdodDogMjAwOyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBjb2xvcjogYmxhY2s7IGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4OyBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7IGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcblxyXG4gIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xyXG5cclxuICAvKiBTZXQgZnVsbCBvcGFjaXR5IG9uIHRoZSBwbGFjZWhvbGRlciAqL1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHJcbiAgaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXNlbGVjdC5zZWxlY3RLaXRhIHtcclxuICBmb250LXdlaWdodDogMjAwOyB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBjb2xvcjogd2hpdGU7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7IGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcblxyXG4gIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xyXG5cclxuICAvKiBTZXQgZnVsbCBvcGFjaXR5IG9uIHRoZSBwbGFjZWhvbGRlciAqL1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcclxuXHJcbiAgaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgICBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdEdyb3VwIGlvbi1zZWxlY3Qtb3B0aW9uIHtcclxuICB3aWR0aDogMTAwJTsgIFxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDsgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDYge1xyXG4gIGNvbG9yOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcblxyXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcblxyXG4uc3VidGl0bGUtdG8tdXNlciB7XHJcbiAgbWFyZ2luLXRvcDogLTEycHg7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO2NvbG9yOiBibGFjazsgd2lkdGg6IDIwMCUgIWltcG9ydGFudDt0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zSFwiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcbn1cbmlvbi10aXRsZSBpbWcge1xuICB3aWR0aDogMTUlO1xufVxuXG4uZGV0YWlscyB7XG4gIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbn1cbi5kZXRhaWxzIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbn1cblxuLnNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dDo6c2hhZG93IGlucHV0IHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLXNlbGVjdC5zZWxlY3RHcm91cCB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgLyogU2V0IGEgZGlmZmVyZW50IHBsYWNlaG9sZGVyIGNvbG9yICovXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrO1xuICAvKiBTZXQgZnVsbCBvcGFjaXR5IG9uIHRoZSBwbGFjZWhvbGRlciAqL1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5pb24tc2VsZWN0LnNlbGVjdEdyb3VwIGlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tc2VsZWN0LnNlbGVjdEtpdGEge1xuICBmb250LXdlaWdodDogMjAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgLyogU2V0IGEgZGlmZmVyZW50IHBsYWNlaG9sZGVyIGNvbG9yICovXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHdoaXRlO1xuICAvKiBTZXQgZnVsbCBvcGFjaXR5IG9uIHRoZSBwbGFjZWhvbGRlciAqL1xuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XG59XG5pb24tc2VsZWN0LnNlbGVjdEtpdGEgaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RHcm91cCBpb24tc2VsZWN0LW9wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbn1cblxuaDYge1xuICBjb2xvcjogc3RlZWxibHVlO1xufVxuXG4uYWxlcnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG59XG5cbi5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4uc3VidGl0bGUtdG8tdXNlciB7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICB3aWR0aDogMjAwJSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/location/location.page.ts":
/*!*******************************************!*\
  !*** ./src/app/location/location.page.ts ***!
  \*******************************************/
/*! exports provided: LocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationPage", function() { return LocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_map_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/map/map */ "./src/app/providers/map/map.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");





// Environment

//Service

let LocationPage = class LocationPage {
    // currentName: any;
    // currentPlateNo: any;
    // currentPhone: any;
    constructor(map, userService, navCtrl) {
        this.map = map;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.mapId = "map_canvas1";
        this.publicPath = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].publicURL;
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
        this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
    }
    getTotalDevices() {
        this.userService.getTotalDevices().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.initDevices = res;
            this.totalDevices = this.initDevices;
            this.map.attachMap(this.totalDevices, this.mapId, { lat: 44.439195789225614, lng: 26.09365010309947 });
        }, err => {
            console.log(err);
        });
    }
    displayMap() {
        const val = this.searchStr;
        let tmpDevices = this.initDevices;
        this.userService.flag = false;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            tmpDevices = tmpDevices.filter((item) => {
                return ((item['name'] + ' ' + item['plateNo']).toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
            if (tmpDevices.length > 0)
                this.totalDevices = tmpDevices;
        }
        else {
            this.totalDevices = this.initDevices;
            tmpDevices = [];
        }
        if (this.userService.currentLng == 0 && this.userService.currentLat == 0) {
            this.currentLng = this.initLng;
            this.currentLat = this.initLat;
            this.map.attachMap(this.totalDevices, this.mapId, { lat: this.currentLat, lng: this.currentLng });
            return true;
        }
        if (this.totalDevices.length > 0) {
            this.userService.currentLat = this.totalDevices[0]['lat'];
            this.userService.currentLng = this.totalDevices[0]['lng'];
            this.currentLng = this.userService.currentLng;
            this.currentLat = this.userService.currentLat;
        }
        else {
            this.currentLng = this.userService.currentLng;
            this.currentLat = this.userService.currentLat;
        }
        this.map.attachMap(this.totalDevices, this.mapId, { lat: this.currentLat, lng: this.currentLng });
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
};
LocationPage.ctorParameters = () => [
    { type: _providers_map_map__WEBPACK_IMPORTED_MODULE_2__["MapProvider"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
LocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/location/location.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./location.page.scss */ "./src/app/location/location.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_map_map__WEBPACK_IMPORTED_MODULE_2__["MapProvider"],
        _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], LocationPage);



/***/ })

}]);
//# sourceMappingURL=location-location-module-es2015.js.map