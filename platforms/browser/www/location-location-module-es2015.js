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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff !important;\n}\n\nion-title {\n  text-align: center;\n  font-family: \"PoppinsH\" !important;\n  font-weight: 100 !important;\n}\n\nion-title img {\n  width: 15%;\n}\n\n.details {\n  padding: 0 20px 20px 20px !important;\n}\n\n.details ion-item {\n  --border-radius: 5px !important;\n}\n\n.section {\n  margin-top: 25px;\n}\n\nion-label {\n  font-weight: 200 !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  height: 30px !important;\n  font-family: \"PoppinsB\" !important;\n  margin-top: -10px !important;\n}\n\nion-textarea {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input::shadow input {\n  color: red;\n}\n\nion-select.selectGroup {\n  font-weight: 200;\n  width: 100% !important;\n  background-color: white !important;\n  color: black;\n  height: 30px !important;\n  margin-top: -10px;\n  border-radius: 20px !important;\n  font-family: \"PoppinsB\" !important;\n  justify-content: start;\n  /* Set a different placeholder color */\n  --placeholder-color: black;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select.selectGroup ion-select-option {\n  font-family: \"PoppinsB\" !important;\n}\n\nion-select.selectKita {\n  font-weight: 200;\n  width: 100% !important;\n  background-color: transparent !important;\n  color: white;\n  font-family: \"PoppinsB\" !important;\n  justify-content: start;\n  /* Set a different placeholder color */\n  --placeholder-color: white;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select.selectKita ion-select-option {\n  font-family: \"PoppinsB\" !important;\n}\n\n.selectGroup ion-select-option {\n  width: 100%;\n}\n\nion-footer {\n  --color: white !important;\n  height: 45px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nh6 {\n  color: steelblue;\n}\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.subtitle-to-user {\n  margin-top: -12px;\n  background-color: white;\n  color: black;\n  width: 200% !important;\n  text-align: center !important;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9jYXRpb24vRTpcXEhTSFxcSk9CU1xcUmVobWFuXFxTYWZlUGFya1xcU2FmZVBhcmtcXEFwcFxcQXBwL3NyY1xcYXBwXFxsb2NhdGlvblxcbG9jYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSw2QkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFJQSxrQ0FBQTtFQUFvQywyQkFBQTtBQ0Z0Qzs7QURERTtFQUNJLFVBQUE7QUNHTjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FEQUU7RUFDSSwrQkFBQTtBQ0VOOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0VBQTZCLGtDQUFBO0FDRS9COztBRENBO0VBQ0UsZ0JBQUE7RUFBaUIsYUFBQTtFQUFlLHdCQUFBO0VBQTBCLDJCQUFBO0VBQTZCLGlDQUFBO0VBQ3ZGLG1CQUFBO0VBQXFCLDBCQUFBO0VBQTRCLHVCQUFBO0VBQXlCLGtDQUFBO0VBQW9DLDRCQUFBO0FDVWhIOztBRFBBO0VBQ0UsZ0JBQUE7RUFBaUIsYUFBQTtFQUFlLHdCQUFBO0VBQTBCLDJCQUFBO0VBQTZCLGlDQUFBO0VBQ3ZGLG1CQUFBO0VBQXFCLDBCQUFBO0VBQTRCLGtDQUFBO0FDZ0JuRDs7QURiQTtFQUNFLFVBQUE7QUNnQkY7O0FEYkE7RUFDRSxnQkFBQTtFQUFrQixzQkFBQTtFQUF3QixrQ0FBQTtFQUFvQyxZQUFBO0VBQWMsdUJBQUE7RUFDNUYsaUJBQUE7RUFBbUIsOEJBQUE7RUFBZ0Msa0NBQUE7RUFBb0Msc0JBQUE7RUFFdkYsc0NBQUE7RUFDQSwwQkFBQTtFQUVBLHdDQUFBO0VBQ0Esd0JBQUE7QUNxQkY7O0FEbkJFO0VBQ0ksa0NBQUE7QUNxQk47O0FEakJBO0VBQ0UsZ0JBQUE7RUFBa0Isc0JBQUE7RUFBd0Isd0NBQUE7RUFBMEMsWUFBQTtFQUFjLGtDQUFBO0VBQW9DLHNCQUFBO0VBRXRJLHNDQUFBO0VBQ0EsMEJBQUE7RUFFQSx3Q0FBQTtFQUNBLHdCQUFBO0FDdUJGOztBRHJCRTtFQUNJLGtDQUFBO0FDdUJOOztBRG5CQTtFQUNFLFdBQUE7QUNzQkY7O0FEbkJBO0VBQ0UseUJBQUE7RUFBMkIsdUJBQUE7RUFBeUIsa0NBQUE7QUN3QnREOztBRHJCQTtFQUNFLGdCQUFBO0FDd0JGOztBRHJCQTtFQUNFLG1CQUFBO0FDd0JGOztBRHJCQTtFQUNFLG1CQUFBO0FDd0JGOztBRHJCQTtFQUNFLGlCQUFBO0VBQW1CLHVCQUFBO0VBQXdCLFlBQUE7RUFBYyxzQkFBQTtFQUF1Qiw2QkFBQTtFQUE4QixtQkFBQTtBQzZCaEgiLCJmaWxlIjoic3JjL2FwcC9sb2NhdGlvbi9sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBpbWcge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gIH1cclxuICBmb250LWZhbWlseTogJ1BvcHBpbnNIJyAhaW1wb3J0YW50OyBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50OyBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGJhY2tncm91bmQ6bm9uZTsgb3V0bGluZTogbm9uZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7IGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDsgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgYmFja2dyb3VuZDpub25lOyBvdXRsaW5lOiBub25lOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7IHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50OyBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taW5wdXQ6OnNoYWRvdyBpbnB1dCB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuaW9uLXNlbGVjdC5zZWxlY3RHcm91cCB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgY29sb3I6IGJsYWNrOyBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDsgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50OyBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50OyBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG5cclxuICAvKiBTZXQgYSBkaWZmZXJlbnQgcGxhY2Vob2xkZXIgY29sb3IgKi9cclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuXHJcbiAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblxyXG4gIGlvbi1zZWxlY3Qtb3B0aW9uIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1zZWxlY3Quc2VsZWN0S2l0YSB7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgY29sb3I6IHdoaXRlOyBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50OyBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG5cclxuICAvKiBTZXQgYSBkaWZmZXJlbnQgcGxhY2Vob2xkZXIgY29sb3IgKi9cclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblxyXG4gIGlvbi1zZWxlY3Qtb3B0aW9uIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3RHcm91cCBpb24tc2VsZWN0LW9wdGlvbiB7XHJcbiAgd2lkdGg6IDEwMCU7ICBcclxufVxyXG5cclxuaW9uLWZvb3RlciB7XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmg2IHtcclxuICBjb2xvcjogc3RlZWxibHVlO1xyXG59XHJcblxyXG4uYWxlcnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG5cclxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG5cclxuLnN1YnRpdGxlLXRvLXVzZXIge1xyXG4gIG1hcmdpbi10b3A6IC0xMnB4OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtjb2xvcjogYmxhY2s7IHdpZHRoOiAyMDAlICFpbXBvcnRhbnQ7dGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7Ym9yZGVyLXJhZGl1czogMjBweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0hcIiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG59XG5pb24tdGl0bGUgaW1nIHtcbiAgd2lkdGg6IDE1JTtcbn1cblxuLmRldGFpbHMge1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGV0YWlscyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQ6OnNoYWRvdyBpbnB1dCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbmlvbi1zZWxlY3Quc2VsZWN0R3JvdXAge1xuICBmb250LXdlaWdodDogMjAwO1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcbiAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuaW9uLXNlbGVjdC5zZWxlY3RHcm91cCBpb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbn1cblxuaW9uLXNlbGVjdC5zZWxlY3RLaXRhIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIC8qIFNldCBhIGRpZmZlcmVudCBwbGFjZWhvbGRlciBjb2xvciAqL1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcbiAgLyogU2V0IGZ1bGwgb3BhY2l0eSBvbiB0aGUgcGxhY2Vob2xkZXIgKi9cbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xufVxuaW9uLXNlbGVjdC5zZWxlY3RLaXRhIGlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0R3JvdXAgaW9uLXNlbGVjdC1vcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDVweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG59XG5cbmg2IHtcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuLmFsZXJ0LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuXG4ubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLnN1YnRpdGxlLXRvLXVzZXIge1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDIwMCUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59Il19 */");

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