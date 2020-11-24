function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-manage-device-manage-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/device-manage/device-manage.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/device-manage/device-manage.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeviceManageDeviceManagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <!-- fab placed to the bottom end -->  \n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n    <ion-fab-button (click)=\"goDashboardPage()\">  \n      <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n    </ion-fab-button>  \n  </ion-fab>  \n  \n  <div class=\"section\" style=\"margin-top: 80px;\">\n\n    <ion-label>\n      <h1 style=\"margin: 10px 0 0 10px;font-size: 20px;text-align: center;\">Vehicle Management</h1>\n    </ion-label>\n\n    <ion-searchbar (ionInput)=\"searchUsers($event)\"></ion-searchbar>\n    \n    <ion-toolbar style=\"width: 90%; margin: auto\" *ngIf=\"userType =='admin'\">\n      <ion-segment [(ngModel)]=\"selectedSegment\" (ionChange)=\"segmentChanged($event)\">\n        <ion-segment-button value=\"admin\">\n          <ion-icon name=\"people-sharp\"></ion-icon>Clients Vehicles\n        </ion-segment-button>\n        <ion-segment-button value=\"client\">\n          <ion-icon name=\"man-sharp\"></ion-icon>My Vehicles\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n\n      <ion-select [(ngModel)]=\"selectedUser\" (ionChange)=\"onUserChanged()\" placeholder=\"Client\" *ngIf=\"userType == 'admin' && selectedSegment == 'admin'\" style=\"width: 40%;margin-left: 40%;margin-right: 20%;margin-top: 20px;\" >\n        <ion-select-option *ngFor=\"let item of allUsers\" value=\"{{item.id}}\">\n          <ion-label>{{item.fullName}}</ion-label>\n        </ion-select-option>\n      </ion-select>\n\n        <ion-list>\n          <ion-item-sliding *ngFor=\"let item of allDevices\">\n            <ion-item (click)=\"editItem(item)\">\n              <img [src]=\"profileImagePath\" style=\"width: 50px; border-radius: 50%;margin-right: 20px;\"/>\n              \n              <ion-label>\n                <h2><ion-icon slot=\"icon-only\" name=\"car-sport-sharp\"></ion-icon> : {{item.name}}</h2>\n                <p><img [src]=\"licensePlate\" style=\"width: 15px\"/> : <ion-badge color=\"success\">{{item.plateNo}}</ion-badge></p>\n    \n                <p *ngIf=\"item.battery >= 20\"><ion-icon slot=\"icon-only\" color=\"secondary\" name=\"battery-half-sharp\"></ion-icon> : <ion-badge color=\"secondary\">{{item.battery}}%</ion-badge></p>\n                <p *ngIf=\"item.battery < 20\"><ion-icon slot=\"icon-only\" color=\"danger\" name=\"battery-half-sharp\"></ion-icon> : <ion-badge color=\"danger\">{{item.battery}}%</ion-badge></p>\n    \n                <p *ngIf=\"item.engine == 1\"><img [src]=\"engineImage\" style=\"width: 15px\"/> : ON</p>\n                <p *ngIf=\"item.engine == 0\"><img [src]=\"engineDarkImg\" style=\"width: 15px\"/> : OFF</p>\n              \n              </ion-label>\n              \n            </ion-item>\n        \n            <ion-item-options color=\"secondary\" side=\"end\">\n              <ion-item-option color=\"success\" (click)=\"turnOnOff(item)\" *ngIf=\"item.engine == 1\">\n                <ion-label>ON</ion-label>          \n              </ion-item-option>\n              \n              <ion-item-option color=\"light\" (click)=\"turnOnOff(item)\" *ngIf=\"item.engine == 0\">\n                <ion-label>OFF</ion-label>\n              </ion-item-option>\n    \n              <!-- <ion-item-option color=\"secondary\" (click)=\"editItem(item)\">\n                <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n              </ion-item-option> -->\n    \n              <ion-item-option color=\"light\" (click)=\"googleMap(item)\">\n                <ion-icon color=\"primary\" slot=\"icon-only\" name=\"earth-sharp\"></ion-icon>\n              </ion-item-option>\n    \n              <ion-item-option color=\"danger\" (click)=\"emergencyCall(item)\">\n                <!-- <ion-icon slot=\"icon-only\" name=\"call-sharp\"></ion-icon> -->\n                <ion-label>SOS</ion-label>\n              </ion-item-option>\n    \n              <ion-item-option color=\"dark\" (click)=\"deleteItem(item)\">\n                <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n              </ion-item-option>\n    \n            </ion-item-options>\n            \n          </ion-item-sliding>\n        </ion-list>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/device-manage/device-manage-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/device-manage/device-manage-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DeviceManagePageRoutingModule */

  /***/
  function srcAppDeviceManageDeviceManageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceManagePageRoutingModule", function () {
      return DeviceManagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _device_manage_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./device-manage.page */
    "./src/app/device-manage/device-manage.page.ts");

    var routes = [{
      path: '',
      component: _device_manage_page__WEBPACK_IMPORTED_MODULE_3__["DeviceManagePage"]
    }];

    var DeviceManagePageRoutingModule = function DeviceManagePageRoutingModule() {
      _classCallCheck(this, DeviceManagePageRoutingModule);
    };

    DeviceManagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DeviceManagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/device-manage/device-manage.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/device-manage/device-manage.module.ts ***!
    \*******************************************************/

  /*! exports provided: createTranslateLoader, DeviceManagePageModule */

  /***/
  function srcAppDeviceManageDeviceManageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceManagePageModule", function () {
      return DeviceManagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _device_manage_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./device-manage-routing.module */
    "./src/app/device-manage/device-manage-routing.module.ts");
    /* harmony import */


    var _device_manage_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./device-manage.page */
    "./src/app/device-manage/device-manage.page.ts");

    function createTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var DeviceManagePageModule = function DeviceManagePageModule() {
      _classCallCheck(this, DeviceManagePageModule);
    };

    DeviceManagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _device_manage_routing_module__WEBPACK_IMPORTED_MODULE_6__["DeviceManagePageRoutingModule"]],
      declarations: [_device_manage_page__WEBPACK_IMPORTED_MODULE_7__["DeviceManagePage"]]
    })], DeviceManagePageModule);
    /***/
  },

  /***/
  "./src/app/device-manage/device-manage.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/device-manage/device-manage.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeviceManageDeviceManagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #fff !important;\n}\n\nion-title {\n  text-align: center;\n  font-family: \"PoppinsH\" !important;\n  font-weight: 100 !important;\n}\n\nion-title img {\n  width: 15%;\n}\n\n.details {\n  padding: 0 20px 20px 20px !important;\n}\n\n.details ion-item {\n  --border-radius: 5px !important;\n}\n\n.section {\n  margin-top: 25px;\n}\n\nion-label {\n  font-weight: 200 !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  height: 30px !important;\n  font-family: \"PoppinsB\" !important;\n  margin-top: -10px !important;\n}\n\nion-textarea {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input::shadow input {\n  color: red;\n}\n\nion-select.selectGroup {\n  font-weight: 200;\n  width: 100% !important;\n  background-color: white !important;\n  color: black;\n  height: 30px !important;\n  margin-top: -10px;\n  border-radius: 20px !important;\n  font-family: \"PoppinsB\" !important;\n  justify-content: start;\n  /* Set a different placeholder color */\n  --placeholder-color: black;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select.selectGroup ion-select-option {\n  font-family: \"PoppinsB\" !important;\n}\n\nion-select.selectKita {\n  font-weight: 200;\n  width: 100% !important;\n  background-color: transparent !important;\n  color: white;\n  font-family: \"PoppinsB\" !important;\n  justify-content: start;\n  /* Set a different placeholder color */\n  --placeholder-color: white;\n  /* Set full opacity on the placeholder */\n  --placeholder-opacity: 1;\n}\n\nion-select.selectKita ion-select-option {\n  font-family: \"PoppinsB\" !important;\n}\n\n.selectGroup ion-select-option {\n  width: 100%;\n}\n\nion-footer {\n  --color: white !important;\n  height: 45px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nh6 {\n  color: steelblue;\n}\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n\n.subtitle-to-user {\n  margin-top: -12px;\n  background-color: white;\n  color: black;\n  width: 200% !important;\n  text-align: center !important;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV2aWNlLW1hbmFnZS9FOlxcSFNIXFxKT0JTXFxSZWhtYW5cXFNhZmVQYXJrXFxTYWZlUGFya1xcQXBwXFxBcHAvc3JjXFxhcHBcXGRldmljZS1tYW5hZ2VcXGRldmljZS1tYW5hZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9kZXZpY2UtbWFuYWdlL2RldmljZS1tYW5hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksNkJBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBSUEsa0NBQUE7RUFBb0MsMkJBQUE7QUNGeEM7O0FEREk7RUFDSSxVQUFBO0FDR1I7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREFJO0VBQ0ksK0JBQUE7QUNFUjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUE2QixrQ0FBQTtBQ0VqQzs7QURDQTtFQUNJLGdCQUFBO0VBQWlCLGFBQUE7RUFBZSx3QkFBQTtFQUEwQiwyQkFBQTtFQUE2QixpQ0FBQTtFQUN2RixtQkFBQTtFQUFxQiwwQkFBQTtFQUE0Qix1QkFBQTtFQUF5QixrQ0FBQTtFQUFvQyw0QkFBQTtBQ1VsSDs7QURQQTtFQUNJLGdCQUFBO0VBQWlCLGFBQUE7RUFBZSx3QkFBQTtFQUEwQiwyQkFBQTtFQUE2QixpQ0FBQTtFQUN2RixtQkFBQTtFQUFxQiwwQkFBQTtFQUE0QixrQ0FBQTtBQ2dCckQ7O0FEYkE7RUFDSSxVQUFBO0FDZ0JKOztBRGJBO0VBQ0ksZ0JBQUE7RUFBa0Isc0JBQUE7RUFBd0Isa0NBQUE7RUFBb0MsWUFBQTtFQUFjLHVCQUFBO0VBQzVGLGlCQUFBO0VBQW1CLDhCQUFBO0VBQWdDLGtDQUFBO0VBQW9DLHNCQUFBO0VBRXZGLHNDQUFBO0VBQ0EsMEJBQUE7RUFFQSx3Q0FBQTtFQUNBLHdCQUFBO0FDcUJKOztBRG5CSTtFQUNJLGtDQUFBO0FDcUJSOztBRGpCRTtFQUNFLGdCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLHdDQUFBO0VBQTBDLFlBQUE7RUFBYyxrQ0FBQTtFQUFvQyxzQkFBQTtFQUV0SSxzQ0FBQTtFQUNBLDBCQUFBO0VBRUEsd0NBQUE7RUFDQSx3QkFBQTtBQ3VCSjs7QURyQkk7RUFDSSxrQ0FBQTtBQ3VCUjs7QURuQkE7RUFDSSxXQUFBO0FDc0JKOztBRG5CQTtFQUNJLHlCQUFBO0VBQTJCLHVCQUFBO0VBQXlCLGtDQUFBO0FDd0J4RDs7QURyQkE7RUFDSSxnQkFBQTtBQ3dCSjs7QURyQkE7RUFDSSxtQkFBQTtBQ3dCSjs7QURyQkU7RUFDRSxtQkFBQTtBQ3dCSjs7QURyQkE7RUFDSSxpQkFBQTtFQUFtQix1QkFBQTtFQUF3QixZQUFBO0VBQWMsc0JBQUE7RUFBdUIsNkJBQUE7RUFBOEIsbUJBQUE7QUM2QmxIIiwiZmlsZSI6InNyYy9hcHAvZGV2aWNlLW1hbmFnZS9kZXZpY2UtbWFuYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE1JTtcclxuICAgIH1cclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGluc0gnICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7IG91dGxpbmU6IG5vbmU7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDsgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7IG91dGxpbmU6IG5vbmU7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDsgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0OjpzaGFkb3cgaW5wdXQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG5pb24tc2VsZWN0LnNlbGVjdEdyb3VwIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7IHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7IGNvbG9yOiBibGFjazsgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDsgYm9yZGVyLXJhZGl1czogMjBweCAhaW1wb3J0YW50OyBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50OyBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIFxyXG4gICAgLyogU2V0IGEgZGlmZmVyZW50IHBsYWNlaG9sZGVyIGNvbG9yICovXHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjaztcclxuICBcclxuICAgIC8qIFNldCBmdWxsIG9wYWNpdHkgb24gdGhlIHBsYWNlaG9sZGVyICovXHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblxyXG4gICAgaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tc2VsZWN0LnNlbGVjdEtpdGEge1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgY29sb3I6IHdoaXRlOyBmb250LWZhbWlseTogJ1BvcHBpbnNCJyAhaW1wb3J0YW50OyBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gIFxyXG4gICAgLyogU2V0IGEgZGlmZmVyZW50IHBsYWNlaG9sZGVyIGNvbG9yICovXHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcclxuICBcclxuICAgIC8qIFNldCBmdWxsIG9wYWNpdHkgb24gdGhlIHBsYWNlaG9sZGVyICovXHJcbiAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcblxyXG4gICAgaW9uLXNlbGVjdC1vcHRpb24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLnNlbGVjdEdyb3VwIGlvbi1zZWxlY3Qtb3B0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgXHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDsgaGVpZ2h0OiA0NXB4ICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmg2IHtcclxuICAgIGNvbG9yOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbi5hbGVydC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgfVxyXG4gIFxyXG4gIC5teS1jdXN0b20tY2xhc3MgLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICB9XHJcblxyXG4uc3VidGl0bGUtdG8tdXNlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTJweDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7Y29sb3I6IGJsYWNrOyB3aWR0aDogMjAwJSAhaW1wb3J0YW50O3RleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O2JvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNIXCIgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xufVxuaW9uLXRpdGxlIGltZyB7XG4gIHdpZHRoOiAxNSU7XG59XG5cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xufVxuLmRldGFpbHMgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiAyMDAgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTEwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLXRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMCAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0OjpzaGFkb3cgaW5wdXQge1xuICBjb2xvcjogcmVkO1xufVxuXG5pb24tc2VsZWN0LnNlbGVjdEdyb3VwIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAvKiBTZXQgYSBkaWZmZXJlbnQgcGxhY2Vob2xkZXIgY29sb3IgKi9cbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2s7XG4gIC8qIFNldCBmdWxsIG9wYWNpdHkgb24gdGhlIHBsYWNlaG9sZGVyICovXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbmlvbi1zZWxlY3Quc2VsZWN0R3JvdXAgaW9uLXNlbGVjdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Quc2VsZWN0S2l0YSB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAvKiBTZXQgYSBkaWZmZXJlbnQgcGxhY2Vob2xkZXIgY29sb3IgKi9cbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogd2hpdGU7XG4gIC8qIFNldCBmdWxsIG9wYWNpdHkgb24gdGhlIHBsYWNlaG9sZGVyICovXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbmlvbi1zZWxlY3Quc2VsZWN0S2l0YSBpb24tc2VsZWN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNCXCIgIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdEdyb3VwIGlvbi1zZWxlY3Qtb3B0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ1cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xufVxuXG5oNiB7XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbi5hbGVydC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLm15LWN1c3RvbS1jbGFzcyAuYWxlcnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG59XG5cbi5zdWJ0aXRsZS10by11c2VyIHtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMDAlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/device-manage/device-manage.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/device-manage/device-manage.page.ts ***!
    \*****************************************************/

  /*! exports provided: DeviceManagePage */

  /***/
  function srcAppDeviceManageDeviceManagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeviceManagePage", function () {
      return DeviceManagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _modals_device_page_device_page_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../modals/device-page/device-page.page */
    "./src/app/modals/device-page/device-page.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../api/user.service */
    "./src/app/api/user.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //Api
    // Environment


    var DeviceManagePage = /*#__PURE__*/function () {
      function DeviceManagePage(alertController, modalCtrl, authService, router, navCtrl, userService, translate, loadingCtrl) {
        _classCallCheck(this, DeviceManagePage);

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

      _createClass(DeviceManagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.publicPath = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].publicURL;
          this.profileImagePath = this.publicPath + '/images/default.png';
          this.engineImage = this.publicPath + '/images/engine.png';
          this.engineDarkImg = this.publicPath + '/images/engine-dark.png';
          this.licensePlate = this.publicPath + '/images/licence-plate.png';
          this.currentUserId = this.authService.getCurrentUserId();
          this.getUserData();
          this.getAllDevices();
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this = this;

          this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            if (res['status']) {
              _this.user = res['user'];
              _this.userType = _this.user.userType;
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers() {
          var _this2 = this;

          this.userService.getAllClients().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            if (res['status']) {
              _this2.allUsers = res['users'];
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAllDevices",
        value: function getAllDevices() {
          var _this3 = this;

          this.userService.getAllDevices(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this3.allDevices = res;
            _this3.initDevices = _this3.allDevices;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          console.log(this.selectedSegment);

          if (this.selectedSegment == 'admin') {
            this.getAllUsers();
            this.selectedUser = this.allUsers[0]['id'];
            this.getAllAdminDevices(this.someOneId);
          } else {
            this.getAllDevices();
          }
        }
      }, {
        key: "getAllAdminDevices",
        value: function getAllAdminDevices(id) {
          var _this4 = this;

          this.userService.getAllDevices(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this4.allDevices = res;
            _this4.initDevices = _this4.allDevices;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onUserChanged",
        value: function onUserChanged() {
          this.getAllAdminDevices(this.selectedUser);
        } // Update User

      }, {
        key: "editItem",
        value: function editItem(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalCtrl.create({
                      component: _modals_device_page_device_page_page__WEBPACK_IMPORTED_MODULE_5__["DevicePagePage"],
                      componentProps: {
                        data: item
                      },
                      backdropDismiss: true
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (res) {
                      _this5.getAllDevices();
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Update User

      }, {
        key: "turnOnOff",
        value: function turnOnOff(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var showMessage, alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    showMessage = "Do you agree to Turn on the Engine";

                    if (item.engine == 1) {
                      showMessage = "Do you agree to Turn off the Engine";
                    }

                    _context2.next = 4;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirm!',
                      message: showMessage,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        cssClass: 'danger',
                        handler: function handler() {
                          _this6.userService.turnOnOff(item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
                            _this6.getAllDevices();
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 4:
                    alert = _context2.sent;
                    _context2.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        } // Delete User

      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: 'Confirm!',
                      message: 'Are you sure you want permanently to delete this device?',
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Okay',
                        cssClass: 'danger',
                        handler: function handler() {
                          _this7.userService.deleteDevice(item.id).pipe().subscribe(function (res) {
                            _this7.getAllDevices();
                          }, function (err) {
                            console.log(err);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        } //go to the dashboard page

      }, {
        key: "goDashboardPage",
        value: function goDashboardPage() {
          this.navCtrl.navigateRoot(['dashboard'], {
            replaceUrl: true
          });
        }
      }, {
        key: "searchUsers",
        value: function searchUsers(ev) {
          // set val to the value of the searchbar
          var val = ev.target.value;
          var tmpDevices = this.allDevices; // if the value is an empty string don't filter the items

          if (val && val.trim() != '') {
            tmpDevices = tmpDevices.filter(function (item) {
              return (item['name'] + ' ' + item['imei'] + '' + item['plateNo']).toLowerCase().indexOf(val.toLowerCase()) > -1;
            });

            if (tmpDevices.length > 0) {
              this.allDevices = tmpDevices;
            }
          } else {
            this.allDevices = this.initDevices;
            tmpDevices = [];
          }
        }
      }, {
        key: "googleMap",
        value: function googleMap(item) {}
      }, {
        key: "emergencyCall",
        value: function emergencyCall(item) {
          var _this8 = this;

          this.userService.emergency(item.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this8.getAllDevices();
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return DeviceManagePage;
    }();

    DeviceManagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _api_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    DeviceManagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-device-manage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./device-manage.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/device-manage/device-manage.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./device-manage.page.scss */
      "./src/app/device-manage/device-manage.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _api_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], DeviceManagePage);
    /***/
  }
}]);
//# sourceMappingURL=device-manage-device-manage-module-es5.js.map