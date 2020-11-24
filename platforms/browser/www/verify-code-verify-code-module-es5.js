function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-code-verify-code-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-code/verify-code.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/verify-code/verify-code.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVerifyCodeVerifyCodePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <ion-grid style=\"height: 100%\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center \" style=\"height: 100%\">\n      <div class=\"holder\">\n        <div class=\"the-title\">\n          <img src=\"assets/imgs/bg/logo.png\" alt=\"Logo\">\n        </div>\n\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"verifyCode()\">\n          <div class=\"details\">\n            <div class=\"detail-item\">\n              <ion-label>Verify</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!loginForm.get('verifyCode').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"verifyCode\" class=\"username\" placeholder=\"Enter Verify Code\"> </ion-input>\n              </ion-item>\n\n              <div class=\"error-messages\">\n                <ng-container *ngFor=\"let error of error_messages.verifyCode\">\n                  <div class=\"error-message\"\n                    *ngIf=\"loginForm.get('verifyCode').hasError(error.type) && (loginForm.get('verifyCode').dirty || loginForm.get('verifyCode').touched)\">\n                    {{error.message}}\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"btn-holder\">\n            <ion-button expand=\"block\" type=\"submit\" routerDirection=\"root\" [disabled]=\"loginForm.invalid\">\n              Check\n            </ion-button>\n          </div>\n          <div class=\"signup-holder\">\n            <p (click)=\"goLogin()\">Login ?</p>\n          </div>\n        </form>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n\n  \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/verify-code/verify-code-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/verify-code/verify-code-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: VerifyCodePageRoutingModule */

  /***/
  function srcAppVerifyCodeVerifyCodeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyCodePageRoutingModule", function () {
      return VerifyCodePageRoutingModule;
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


    var _verify_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./verify-code.page */
    "./src/app/verify-code/verify-code.page.ts");

    var routes = [{
      path: '',
      component: _verify_code_page__WEBPACK_IMPORTED_MODULE_3__["VerifyCodePage"]
    }];

    var VerifyCodePageRoutingModule = function VerifyCodePageRoutingModule() {
      _classCallCheck(this, VerifyCodePageRoutingModule);
    };

    VerifyCodePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VerifyCodePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/verify-code/verify-code.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/verify-code/verify-code.module.ts ***!
    \***************************************************/

  /*! exports provided: VerifyCodePageModule */

  /***/
  function srcAppVerifyCodeVerifyCodeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyCodePageModule", function () {
      return VerifyCodePageModule;
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


    var _verify_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./verify-code-routing.module */
    "./src/app/verify-code/verify-code-routing.module.ts");
    /* harmony import */


    var _verify_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./verify-code.page */
    "./src/app/verify-code/verify-code.page.ts");

    var VerifyCodePageModule = function VerifyCodePageModule() {
      _classCallCheck(this, VerifyCodePageModule);
    };

    VerifyCodePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _verify_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyCodePageRoutingModule"]],
      declarations: [_verify_code_page__WEBPACK_IMPORTED_MODULE_6__["VerifyCodePage"]]
    })], VerifyCodePageModule);
    /***/
  },

  /***/
  "./src/app/verify-code/verify-code.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/verify-code/verify-code.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVerifyCodeVerifyCodePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-image: url('login.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  font-family: monospace !important;\n}\nion-content .holder {\n  width: 100%;\n  margin-top: -50px;\n}\nion-content .holder .btns-holder {\n  margin-top: 40px;\n}\nion-content .holder .btns-holder ion-button {\n  --border-color: rgba(119, 134, 158, 0.39);\n  --border-style: solid;\n  --border-width: 1px;\n  height: 3rem !important;\n  margin: 0 20px;\n}\nion-content .holder form {\n  margin: 0px 50px;\n}\nion-content .holder img {\n  max-width: 150px !important;\n}\nion-content .the-title {\n  max-width: 50%;\n  margin: auto;\n  text-align: center;\n}\nion-button {\n  --border-color: rgba(151, 170, 201, 0.39);\n  --border-style: solid;\n  --border-width: 1px;\n  height: 3rem !important;\n  margin: 0 50px;\n  margin-top: 30px;\n}\n.forgot-password-title {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmVyaWZ5LWNvZGUvRTpcXEhTSFxcSk9CU1xcUmVobWFuXFxTYWZlUGFya1xcU2FmZVBhcmtcXEFwcFxcQXBwL3NyY1xcYXBwXFx2ZXJpZnktY29kZVxcdmVyaWZ5LWNvZGUucGFnZS5zY3NzIiwic3JjL2FwcC92ZXJpZnktY29kZS92ZXJpZnktY29kZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUNBSjtBREVJO0VBRUksV0FBQTtFQUNBLGlCQUFBO0FDRFI7QURFUTtFQUVJLGdCQUFBO0FDRFo7QURHWTtFQUVJLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtBQ0hoQjtBRE9RO0VBRUksZ0JBQUE7QUNOWjtBRFNRO0VBQ0ksMkJBQUE7QUNQWjtBRFVJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1JSO0FEWUE7RUFFSSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ1hKO0FEZUE7RUFDSSxnQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvdmVyaWZ5LWNvZGUvdmVyaWZ5LWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvYmcvbG9naW4ucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLmhvbGRlclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIC5idG5zLWhvbGRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1idXR0b24gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDExOSwgMTM0LCAxNTgsIDAuMzkpO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aGUtdGl0bGUge1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjphdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWJ1dHRvbiBcclxue1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMTUxLCAxNzAsIDIwMSwgMC4zOSk7XHJcbiAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcblxyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvYmcvbG9naW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgLmJ0bnMtaG9sZGVyIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgLmJ0bnMtaG9sZGVyIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSgxMTksIDEzNCwgMTU4LCAwLjM5KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5pb24tY29udGVudCAuaG9sZGVyIGZvcm0ge1xuICBtYXJnaW46IDBweCA1MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudGhlLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMTUxLCAxNzAsIDIwMSwgMC4zOSk7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCA1MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZm9yZ290LXBhc3N3b3JkLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/verify-code/verify-code.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/verify-code/verify-code.page.ts ***!
    \*************************************************/

  /*! exports provided: VerifyCodePage */

  /***/
  function srcAppVerifyCodeVerifyCodePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyCodePage", function () {
      return VerifyCodePage;
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
    "./node_modules/rxjs/_esm2015/operators/index.js"); //import Service module
    //Component


    var VerifyCodePage = /*#__PURE__*/function () {
      //Contructor
      function VerifyCodePage(formBuilder, navCtrl, authService, router, loadingCtrl, toastCtrl, route) {
        _classCallCheck(this, VerifyCodePage);

        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route; //message arrays

        this.error_messages = {
          'verifyCode': [{
            type: 'required',
            message: 'Verify Code is required'
          }]
        };
        this._id = this.route.snapshot.paramMap.get('id');
        this.loginForm = this.formBuilder.group({
          verifyCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
      }

      _createClass(VerifyCodePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} //redirect to login page

      }, {
        key: "goLogin",
        value: function goLogin() {
          this.router.navigate(['/login'], {
            replaceUrl: true,
            skipLocationChange: true,
            preserveFragment: true
          });
        } //check verifyCode

      }, {
        key: "verifyCode",
        value: function verifyCode() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var loading, obj;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      spinner: 'bubbles',
                      message: 'Logging in ...'
                    });

                  case 2:
                    loading = _context.sent;
                    loading.present(); //request object including verifyCode and user's id

                    obj = {
                      verifyCode: this.loginForm.value.verifyCode,
                      userId: this._id
                    }; //check backend

                    this.authService.verifyCode(obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                      return loading.dismiss();
                    })).subscribe(function (_) {
                      if (JSON.parse(_)['success'] == 'true') {
                        _this.navCtrl.navigateRoot(["reset-password/".concat(_this._id)], {
                          replaceUrl: true
                        });
                      } else {}
                    }, function (err) {
                      return _this.handleError(err);
                    });

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //check function that it appears error

      }, {
        key: "handleError",
        value: function handleError(error) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var message, toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    //error's message that array to string
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
      }]);

      return VerifyCodePage;
    }();

    VerifyCodePage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    VerifyCodePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify-code',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-code.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/verify-code/verify-code.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-code.page.scss */
      "./src/app/verify-code/verify-code.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], VerifyCodePage);
    /***/
  }
}]);
//# sourceMappingURL=verify-code-verify-code-module-es5.js.map