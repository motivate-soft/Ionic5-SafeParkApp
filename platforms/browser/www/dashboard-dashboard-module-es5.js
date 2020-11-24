function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <ion-grid>\n    <ion-row class=\"ion-justify-content-center\" style=\"height: 100%\">\n      <div class=\"holder\">\n\n        <ion-button expand=\"block\" (click)=\"refreshPage()\"><ion-icon size=\"large\" name=\"sync\"></ion-icon></ion-button>  \n        <div>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button expand=\"block\" style=\"height: 150px; width: 100%\" (click)=\"goArmPage()\">\n                <div>\n                  <img [src]=\"lockImg\" style=\"width: 50px\"/>\n                  <p class=\"btn-text\">Arm/Disarm</p>\n                </div>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button style=\"height: 150px; width: 100%\" (click)=\"btnGoogleMapShow()\">\n                <div>\n                  <img [src]=\"mapImg\" style=\"width: 50px\"/>\n                  <p class=\"btn-text\">Location</p>\n              </div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-button style=\"height: 150px; width: 100%\" (click)=\"addDevice()\">\n                <div>\n                  <img [src]=\"addVehicleImg\" style=\"width: 50px\"/>\n                  <p class=\"btn-text\">Add Vehicle</p>\n                </div>\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-button style=\"height: 150px; width: 100%\" (click)=\"deviceManage()\">\n                <div>\n                  <img [src]=\"allVehicleImg\" style=\"width: 50px\"/>\n                  <p class=\"btn-text\">All Vehicles</p>\n                </div>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <div class=\"btns-holder\" style=\"margin: auto\">\n          <ion-row>\n            <ion-col>\n              <ion-button style=\"height: 50px; width: 50px\" (click)=\"goWifiPage()\">\n                <ion-icon size=\"large\" name=\"wifi\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button style=\"height: 50px; width: 50px\" (click)=\"goAlertPage()\">\n                <ion-icon size=\"large\" name=\"megaphone\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button style=\"height: 50px; width: 50px\">\n                <ion-icon size=\"large\" name=\"time\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button style=\"height: 50px; width: 50px\" (click)=\"goSettingPage()\">\n                <ion-icon name=\"ellipsis-horizontal\" size=\"large\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n  <div #map id=\"map_canvas\" style=\"height:100%;\"></div>\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button {\n  --background: #171717;\n}\n\nion-content {\n  --background: #ffffff;\n}\n\nion-icon {\n  --background: #fec805 !important;\n  color: #fec805 !important;\n  --color: #fec805 !important;\n}\n\n.btn-text {\n  --background: #fec805 !important;\n  color: #fec805 !important;\n  --color: #fec805 !important;\n  size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0U6XFxIU0hcXEpPQlNcXFJlaG1hblxcU2FmZVBhcmtcXFNhZmVQYXJrXFxBcHBcXEFwcC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQucGFnZS5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMTcxNzE3O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZlYzgwNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZWM4MDUgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICNmZWM4MDUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi10ZXh0IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZlYzgwNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZWM4MDUgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6ICNmZWM4MDUgIWltcG9ydGFudDtcclxuICAgIHNpemU6IDEycHg7XHJcbn0iLCJpb24tYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMTcxNzE3O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuaW9uLWljb24ge1xuICAtLWJhY2tncm91bmQ6ICNmZWM4MDUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZWM4MDUgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogI2ZlYzgwNSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXRleHQge1xuICAtLWJhY2tncm91bmQ6ICNmZWM4MDUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZWM4MDUgIWltcG9ydGFudDtcbiAgLS1jb2xvcjogI2ZlYzgwNSAhaW1wb3J0YW50O1xuICBzaXplOiAxMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../api/user.service */
    "./src/app/api/user.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); //Api
    // Environment
    // import { ConsoleReporter } from 'jasmine';


    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage(alertController, modalCtrl, loadingCtrl, toastCtrl, service, navCtrl, authService, popoverController, router, platform, translate) {
        _classCallCheck(this, DashboardPage);

        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.service = service;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.popoverController = popoverController;
        this.router = router;
        this.platform = platform;
        this.translate = translate;
        this.btnBackgroundColor = "#171717";
        this.publicPath = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].publicURL;
        this.allVehicleImg = this.publicPath + '/images/all-vehicles.png';
        this.addVehicleImg = this.publicPath + '/images/add-car.png';
        this.lockImg = this.publicPath + '/images/lock.png';
        this.mapImg = this.publicPath + '/images/map.png';
        var lang = localStorage.getItem('lang');

        if (lang == null || lang == '') {
          translate.use('en');
        } else {
          translate.use(lang);
        }

        this.currentUserId = this.authService.getCurrentUserId();
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserData();
        }
      }, {
        key: "btnGoogleMapShow",
        value: function btnGoogleMapShow() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.navCtrl.navigateRoot(['location'], {
                      replaceUrl: true
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this = this;

          this.service.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {})).subscribe(function (res) {
            if (res['status']) {
              _this.user = res['user'];
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "show",
        value: function show() {}
      }, {
        key: "refreshPage",
        value: function refreshPage() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var loading;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'bubbles',
                      message: 'Refreshing page ...'
                    });

                  case 2:
                    loading = _context2.sent;
                    loading.present();
                    loading.dismiss();
                    this.navCtrl.navigateRoot(['dashboard'], {
                      replaceUrl: true
                    });

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addDevice",
        value: function addDevice() {
          this.navCtrl.navigateRoot(['add-device'], {
            replaceUrl: true
          });
        }
      }, {
        key: "deviceManage",
        value: function deviceManage() {
          this.navCtrl.navigateRoot(['device-manage'], {
            replaceUrl: true
          });
        }
      }, {
        key: "goSettingPage",
        value: function goSettingPage() {
          this.navCtrl.navigateRoot(['setting-page'], {
            replaceUrl: true
          });
        }
      }, {
        key: "goArmPage",
        value: function goArmPage() {
          this.navCtrl.navigateRoot(['arm-page'], {
            replaceUrl: true
          });
        }
      }, {
        key: "goAlertPage",
        value: function goAlertPage() {
          this.navCtrl.navigateRoot(['alert'], {
            replaceUrl: true
          });
        }
      }, {
        key: "goWifiPage",
        value: function goWifiPage() {
          this.navCtrl.navigateRoot(['wifi'], {
            replaceUrl: true
          });
        }
      }]);

      return DashboardPage;
    }();

    DashboardPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
      }];
    };

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/dashboard/dashboard.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map