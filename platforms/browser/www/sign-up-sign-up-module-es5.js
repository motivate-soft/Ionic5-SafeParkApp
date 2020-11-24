function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-grid style=\"height: 100%\">\n    <ion-row style=\"height: 100%; margin-top: 40px;\">\n      <div class=\"holder\">\n        \n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\" style=\"width: 80%;margin:auto\">\n\n          <h1 style=\"text-align: center;\">Sign Up</h1>\n          <div class=\"details\">\n\n            <div class=\"detail-item\">\n              <ion-label>Full Name</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!registerForm.get('fullName').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"fullName\" class=\"username\" placeholder=\"Enter Fullname\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Email</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!registerForm.get('email').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"email\" class=\"username\" placeholder=\"Enter Email\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              \n              <ion-label>Phone</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!registerForm.get('phone').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input type=\"phone\" formControlName=\"phone\" class=\"username\" placeholder=\"Enter Phone Number\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n\n              <ion-grid>\n                <ion-row>\n                  <ion-col size=\"6\">\n                    <ion-label>User Status</ion-label>\n                    <ion-item>\n                      <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!registerForm.get('userType').invalid\">\n                        <ion-icon name=\"checkmark-circle\"></ion-icon>\n                      </span>\n                      <ion-input formControlName=\"userType\" class=\"username\" placeholder=\"Select User Status\" [(ngModel)]=\"userState\" readonly> </ion-input>\n                    </ion-item>                    \n                  </ion-col>\n                  <ion-col size=\"6\">\n                    <ion-fab horizontal=\"center\">\n                      <ion-fab-button>\n                        <ion-icon name=\"construct\"></ion-icon>\n                      </ion-fab-button>\n                      <ion-fab-list side=\"end\">\n                        <ion-fab-button title=\"Customer\" (click)=\"selectLevel('client')\"><ion-icon name=\"person-add\"></ion-icon></ion-fab-button>\n                      </ion-fab-list>\n                      <ion-fab-list side=\"start\">\n                        <ion-fab-button title=\"Admin\" (click)=\"selectLevel('admin')\"><ion-icon name=\"people\"></ion-icon></ion-fab-button>\n                      </ion-fab-list>\n                    </ion-fab>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            \n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Username(Email)</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!registerForm.get('userName').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"userName\" class=\"username\" placeholder=\"Enter Username\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Password</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!registerForm.get('password').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input type=\"password\" class=\"password\" placeholder=\"Enter Password\" formControlName=\"password\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Confirm Password</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!registerForm.get('confirmPassword').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input type=\"password\" class=\"password\" placeholder=\"Confirm Password\" formControlName=\"confirmPassword\"> </ion-input>\n              </ion-item>\n            </div>\n          </div>\n          \n          <div class=\"btn-holder\">\n            <ion-button expand=\"block\" type=\"submit\" routerDirection=\"root\" [disabled]=\"registerForm.invalid\">\n              Register\n            </ion-button>\n          </div>\n\n          <div class=\"signup-holder\">\n            <p class=\"forgot-password-title\"><span (click)=\"goSignIn()\"> Sign In</span></p>\n          </div>\n\n        </form>\n        \n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/sign-up/sign-up-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: SignUpPageRoutingModule */

  /***/
  function srcAppSignUpSignUpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageRoutingModule", function () {
      return SignUpPageRoutingModule;
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


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/sign-up/sign-up.page.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_3__["SignUpPage"]
    }];

    var SignUpPageRoutingModule = function SignUpPageRoutingModule() {
      _classCallCheck(this, SignUpPageRoutingModule);
    };

    SignUpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignUpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/sign-up/sign-up.module.ts ***!
    \*******************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
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


    var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up-routing.module */
    "./src/app/sign-up/sign-up-routing.module.ts");
    /* harmony import */


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/sign-up/sign-up.page.ts");

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignUpPageRoutingModule"]],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/sign-up/sign-up.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  font-family: monospace !important;\n}\nion-content .holder {\n  width: 100%;\n  margin-top: -50px;\n}\nion-content .holder .btns-holder {\n  margin-top: 15px;\n}\nion-content .holder .btns-holder ion-button {\n  height: 3rem !important;\n}\nion-content .holder img {\n  max-width: 150px !important;\n}\nion-content .the-title {\n  max-width: 50%;\n  margin: auto;\n  text-align: center;\n}\nion-button {\n  height: 3rem !important;\n  margin-top: 20px;\n}\n.sign-up-btn {\n  background-color: #3c63ff;\n}\n.sign-in-btn {\n  background-color: #ffffff;\n}\n.header-title {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi11cC9FOlxcSFNIXFxKT0JTXFxSZWhtYW5cXFNhZmVQYXJrXFxTYWZlUGFya1xcQXBwXFxBcHAvc3JjXFxhcHBcXHNpZ24tdXBcXHNpZ24tdXAucGFnZS5zY3NzIiwic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksaUNBQUE7QUNBSjtBREVJO0VBRUksV0FBQTtFQUNBLGlCQUFBO0FDRFI7QURFUTtFQUVJLGdCQUFBO0FDRFo7QURHWTtFQUVJLHVCQUFBO0FDRmhCO0FETVE7RUFDSSwyQkFBQTtBQ0paO0FEUUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTlI7QURXQTtFQUVJLHVCQUFBO0VBQ0EsZ0JBQUE7QUNUSjtBRFlBO0VBQ0kseUJBQUE7QUNUSjtBRFlBO0VBQ0kseUJBQUE7QUNUSjtBRFlBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDVEoiLCJmaWxlIjoic3JjL2FwcC9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLmhvbGRlclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIC5idG5zLWhvbGRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1idXR0b24gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aGUtdGl0bGUge1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmlvbi1idXR0b24gXHJcbntcclxuICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnNpZ24tdXAtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzYzZmY7XHJcbn1cclxuXHJcbi5zaWduLWluLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgLmJ0bnMtaG9sZGVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgLmJ0bnMtaG9sZGVyIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnRoZS10aXRsZSB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2lnbi11cC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M2M2ZmO1xufVxuXG4uc2lnbi1pbi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/sign-up/sign-up.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/sign-up/sign-up.page.ts ***!
    \*****************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';


    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(formBuilder, navCtrl, authService, router, alertCtrl, loadingCtrl, toastCtrl) {
        _classCallCheck(this, SignUpPage);

        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.error_messages = {
          'userName': [{
            type: 'required',
            message: 'Username is required'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required'
          }],
          'confirmPassword': [{
            type: 'required',
            message: 'Confirm password is required'
          }],
          'fullName': [{
            type: 'required',
            message: 'Full Name is required'
          }],
          'phone': [{
            type: 'required',
            message: 'Phone Number is required'
          }]
        };
        this.registerForm = this.formBuilder.group({
          userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          userType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
      }

      _createClass(SignUpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goSignIn",
        value: function goSignIn() {
          this.router.navigate(['/login'], {
            replaceUrl: true,
            skipLocationChange: true,
            preserveFragment: true
          });
        }
      }, {
        key: "register",
        value: function register() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var prompt;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (this.registerForm.value.password != this.registerForm.value.confirmPassword) {
                      this.handleError('Plz enter password correctly');
                    }

                    _context.next = 3;
                    return this.alertCtrl.create({
                      header: 'Register',
                      message: "Enter your email to confirm",
                      inputs: [{
                        name: 'email',
                        placeholder: 'Email'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        handler: function handler(data) {
                          _this.handleError('Email is not Confirmed, Pls try');
                        }
                      }, {
                        text: 'Confirm',
                        handler: function handler(data) {
                          if (data['email'] == _this.registerForm.value.email) {
                            _this.authService.register(_this.registerForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {})).subscribe(function (_) {
                              if (JSON.parse(_)['success']) {
                                _this.authService.setCurrentUserId(JSON.parse(_)['userId']);

                                _this.handleError('Register successfully');

                                _this.navCtrl.navigateRoot(['/login'], {
                                  replaceUrl: true
                                });
                              } else _this.handleError('Invalid Credentials');
                            }, function (err) {
                              console.log(err);

                              _this.handleError(err);
                            });
                          }
                        }
                      }]
                    });

                  case 3:
                    prompt = _context.sent;
                    _context.next = 6;
                    return prompt.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "selectLevel",
        value: function selectLevel(type) {
          this.userState = type;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    message = "" + error;
                    _context2.next = 3;
                    return this.toastCtrl.create({
                      message: message,
                      duration: 5000,
                      position: 'bottom'
                    });

                  case 3:
                    toast = _context2.sent;
                    toast.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "showInterstitialAds",
        value: function showInterstitialAds() {}
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    SignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sign-up/sign-up.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/sign-up/sign-up.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])], SignUpPage);
    /***/
  }
}]);
//# sourceMappingURL=sign-up-sign-up-module-es5.js.map