function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wifi-wifi-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wifi/wifi.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wifi/wifi.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWifiWifiPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <!-- fab placed to the bottom end -->  \n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n    <ion-fab-button (click)=\"goDashboardPage()\">  \n      <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n    </ion-fab-button>  \n  </ion-fab>\n  \n  <ion-label style=\"margin-top: 30px;\">\n    <h1 style=\"text-align: center;\">Wifi Connection</h1>\n  </ion-label>\n      \n  <ion-grid style=\"margin-top: 30px;\">\n    <ion-row>\n      <ion-col size=\"6\">\n        \n        <ion-select class=\"selectAdmin\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\" [(ngModel)]=\"selectedVehicle\" (ionChange)=\"onVehicleChanged()\">\n          <ion-select-option *ngFor=\"let item of allDevices\" [value]=\"item\">\n            <ion-label>{{item.name}}</ion-label>          \n          </ion-select-option>\n        </ion-select>\n        \n      </ion-col>\n      <ion-col size=\"6\">\n\n        <ion-select class=\"selectAdmin\" [(ngModel)]=\"wifi\" placeholder=\"Wifi\" (ionChange)=\"onWifiSelected()\">\n          <ion-select-option *ngFor=\"let item of allWifies\" [value]=\"item.ssid\">\n            <ion-label>{{item.ssid}}</ion-label>\n          </ion-select-option>\n        </ion-select>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-list *ngFor=\"let item of selectedVehicles\">\n    <ion-item>\n      <img [src]=\"wifiImagePath\" style=\"width: 50px; border-radius: 50%;margin-right: 20px;\"/>\n      <ion-label>\n        <h3>{{item.ssid}}</h3>\n        <ion-button color=\"dark\" (click)=\"deleteWifi(item.id)\">Remove</ion-button>\n        <ion-button *ngIf=\"item.state == '0'\" (click)=\"changeState(item.id)\">Disconnected</ion-button>\n        <ion-button color=\"success\" *ngIf=\"item.state == '1'\" (click)=\"changeState(item.id)\">Connected</ion-button>\n      </ion-label>\n    </ion-item>          \n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/wifi/wifi-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/wifi/wifi-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: WifiPageRoutingModule */

  /***/
  function srcAppWifiWifiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WifiPageRoutingModule", function () {
      return WifiPageRoutingModule;
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


    var _wifi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./wifi.page */
    "./src/app/wifi/wifi.page.ts");

    var routes = [{
      path: '',
      component: _wifi_page__WEBPACK_IMPORTED_MODULE_3__["WifiPage"]
    }];

    var WifiPageRoutingModule = function WifiPageRoutingModule() {
      _classCallCheck(this, WifiPageRoutingModule);
    };

    WifiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WifiPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/wifi/wifi.module.ts":
  /*!*************************************!*\
    !*** ./src/app/wifi/wifi.module.ts ***!
    \*************************************/

  /*! exports provided: WifiPageModule */

  /***/
  function srcAppWifiWifiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WifiPageModule", function () {
      return WifiPageModule;
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


    var _wifi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./wifi-routing.module */
    "./src/app/wifi/wifi-routing.module.ts");
    /* harmony import */


    var _wifi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./wifi.page */
    "./src/app/wifi/wifi.page.ts");

    var WifiPageModule = function WifiPageModule() {
      _classCallCheck(this, WifiPageModule);
    };

    WifiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wifi_routing_module__WEBPACK_IMPORTED_MODULE_5__["WifiPageRoutingModule"]],
      declarations: [_wifi_page__WEBPACK_IMPORTED_MODULE_6__["WifiPage"]]
    })], WifiPageModule);
    /***/
  },

  /***/
  "./src/app/wifi/wifi.page.scss":
  /*!*************************************!*\
    !*** ./src/app/wifi/wifi.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppWifiWifiPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\nion-toggle {\n  --background: #444444;\n  --background-checked: rgb(0, 219, 248);\n  --handle-background: #ffffff;\n  --handle-background-checked: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lmaS9FOlxcSFNIXFxKT0JTXFxSZWhtYW5cXFNhZmVQYXJrXFxTYWZlUGFya1xcQXBwXFxBcHAvc3JjXFxhcHBcXHdpZmlcXHdpZmkucGFnZS5zY3NzIiwic3JjL2FwcC93aWZpL3dpZmkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtEQUFBO0FBQ0E7RUFDSSxXQUFBO0VBRUEsdUJBQUE7QUNBSjtBREdFLGdFQUFBO0FBQ0E7O0VBRUUsY0FBQTtBQ0FKO0FER0UsMENBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTs7OztFQUFBO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdFLHVCQUFBO0FBQ0E7RUFDRSxjQUFBO0FDQUo7QURHRSxtQ0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBSjtBREdFO0VBQ0UscUJBQUE7RUFDQSxzQ0FBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3dpZmkvd2lmaS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcclxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xyXG4gICAgY29sb3I6ICMyMGEwOGE7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAvKlxyXG4gICAqIFNldCB0aGUgZm9udCBvZiB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwbGFjZWhvbGRlclxyXG4gICAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXHJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xyXG4gICAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XHJcbiAgICBjb2xvcjogIzU0NWNhNztcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XHJcbiAgICBjb2xvcjogIzk3MWU0OTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBpb24tdG9nZ2xlIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzQ0NDQ0NDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2IoMCwgMjE5LCAyNDgpO1xyXG4gIFxyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzQ0NDQ0NDtcclxuICB9IiwiLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4vKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XG4gIGNvbG9yOiAjMjBhMDhhO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKlxuICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXG4gKiBTaGFkb3cgcGFydHMgd29yayB3aXRoIHBzZXVkby1lbGVtZW50cywgdG9vIVxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xuICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKTo6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBjb2xvcjogIzU0NWNhNztcbn1cblxuLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgY29sb3I6ICM5NzFlNDk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi10b2dnbGUge1xuICAtLWJhY2tncm91bmQ6ICM0NDQ0NDQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2IoMCwgMjE5LCAyNDgpO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM0NDQ0NDQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/wifi/wifi.page.ts":
  /*!***********************************!*\
    !*** ./src/app/wifi/wifi.page.ts ***!
    \***********************************/

  /*! exports provided: WifiPage */

  /***/
  function srcAppWifiWifiPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WifiPage", function () {
      return WifiPage;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api/user.service */
    "./src/app/api/user.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts"); //Api
    // Environment


    var WifiPage = /*#__PURE__*/function () {
      function WifiPage(alertCtrl, modalCtrl, authService, router, navCtrl, userService, translate, loadingCtrl, toastCtrl) {
        _classCallCheck(this, WifiPage);

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

      _createClass(WifiPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this = this;

          this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            if (res['status']) {
              _this.user = res['user'];
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAllDevices",
        value: function getAllDevices() {
          var _this2 = this;

          this.userService.getAllDevices(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this2.allDevices = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getAllWifies",
        value: function getAllWifies() {
          var _this3 = this;

          this.userService.getAllWifies().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this3.allWifies = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "goDashboardPage",
        value: function goDashboardPage() {
          this.navCtrl.navigateRoot(['dashboard'], {
            replaceUrl: true
          });
        }
      }, {
        key: "onVehicleChanged",
        value: function onVehicleChanged() {
          this.name = this.selectedVehicle.name;
          this.vehicleId = this.selectedVehicle.id;
          this.getVehicles();
        }
      }, {
        key: "getVehicles",
        value: function getVehicles() {
          var _this4 = this;

          this.userService.getVehicles(this.vehicleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this4.selectedVehicles = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "onWifiSelected",
        value: function onWifiSelected() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this5 = this;

            var flag, i, prompt;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    flag = false;

                    for (i = 0; i < this.selectedVehicles.length; i++) {
                      if (this.selectedVehicles[i]['ssid'] == this.wifi) {
                        flag = true;
                      }
                    }

                    if (!(flag == true)) {
                      _context.next = 5;
                      break;
                    }

                    this.connectState(this.wifi);
                    return _context.abrupt("return", true);

                  case 5:
                    _context.next = 7;
                    return this.alertCtrl.create({
                      header: 'Add Wifi',
                      message: "Please enter password",
                      inputs: [{
                        name: 'password',
                        placeholder: 'Password'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler(data) {}
                      }, {
                        text: 'Confirm',
                        handler: function handler(data) {
                          var obj = {
                            'vehicleId': _this5.vehicleId,
                            'password': data['password'],
                            'wifi': _this5.wifi
                          };

                          _this5.userService.addWifi(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
                            _this5.handleError(res['message']);

                            _this5.getVehicles();
                          }, function (err) {
                            _this5.handleError(err);
                          });
                        }
                      }]
                    });

                  case 7:
                    prompt = _context.sent;
                    _context.next = 10;
                    return prompt.present();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "deleteWifi",
        value: function deleteWifi(vehicleId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this6 = this;

            var prompt;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Remove Wifi',
                      message: "Do you agree that delete this ssid of wifi",
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler(data) {}
                      }, {
                        text: 'Agree',
                        handler: function handler(data) {
                          _this6.userService.deleteWifi(vehicleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
                            _this6.getVehicles();
                          }, function (err) {
                            _this6.handleError(err);
                          });
                        }
                      }]
                    });

                  case 2:
                    prompt = _context2.sent;
                    _context2.next = 5;
                    return prompt.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    message = "" + error;
                    _context3.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 5000,
                      position: 'bottom'
                    });

                  case 3:
                    toast = _context3.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "showInterstitialAds",
        value: function showInterstitialAds() {}
      }, {
        key: "connectState",
        value: function connectState(ssid) {
          var _this7 = this;

          var obj = {
            'ssid': ssid
          };
          this.userService.connectState(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this7.getVehicles();
          }, function (err) {
            _this7.handleError(err);
          });
        }
      }, {
        key: "changeState",
        value: function changeState(vehicleId) {
          var _this8 = this;

          var obj = {
            'vehicleId': vehicleId
          };
          this.userService.changeVehicleState(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this8.getVehicles();
          }, function (err) {
            _this8.handleError(err);
          });
        }
      }]);

      return WifiPage;
    }();

    WifiPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    WifiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wifi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wifi.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wifi/wifi.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wifi.page.scss */
      "./src/app/wifi/wifi.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], WifiPage);
    /***/
  }
}]);
//# sourceMappingURL=wifi-wifi-module-es5.js.map