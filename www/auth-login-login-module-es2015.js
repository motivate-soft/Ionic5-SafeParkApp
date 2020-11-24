(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\" style=\"height: 100%;margin-top: 300px;\">\r\n      <div class=\"holder\">\r\n\r\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n          <div class=\"details\">\r\n            <div class=\"detail-item\">\r\n              <ion-label>Username</ion-label>\r\n              <ion-item>\r\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!loginForm.get('username').invalid\">\r\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                </span>\r\n                <ion-input formControlName=\"username\" class=\"username\" placeholder=\"Enter Username\"> </ion-input>\r\n              </ion-item>\r\n\r\n              <div class=\"error-messages\">\r\n                <ng-container *ngFor=\"let error of error_messages.username\">\r\n                  <div class=\"error-message\"\r\n                    *ngIf=\"loginForm.get('username').hasError(error.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\">\r\n                    {{error.message}}\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <div class=\"detail-item\">\r\n              <ion-label>Password</ion-label>\r\n              <ion-item>\r\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!loginForm.get('password').invalid\">\r\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\r\n                </span>\r\n                <ion-input type=\"password\" class=\"password\" placeholder=\"Enter Password\" formControlName=\"password\"> </ion-input>\r\n              </ion-item>\r\n            </div>\r\n\r\n\r\n            <div class=\"error-messages\">\r\n              <ng-container *ngFor=\"let error of error_messages.password\">\r\n                <div class=\"error-message\"\r\n                  *ngIf=\"loginForm.get('password').hasError(error.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\r\n                  {{error.message}}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"btn-holder\">\r\n            <ion-button expand=\"block\" type=\"submit\" routerDirection=\"root\" [disabled]=\"loginForm.invalid\">\r\n              Sign In\r\n            </ion-button>\r\n          </div>\r\n\r\n          <div class=\"signup-holder ion-text-center\">\r\n            <p class=\"forgot-password-title\">Forgot password? <span (click)=\"forgotPassword()\"> right?</span></p>\r\n          </div>\r\n        </form>\r\n        <!-- <div class=\"signup-holder ion-text-center\">\r\n          <p>Don't have an account?&nbsp;<span (click)=\"goSignup()\">Sign Up</span></p>\r\n        </div> -->\r\n        <div class=\"btns-holder\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-button fill=\"none\" style=\"height: 50px; width: 50px\">\r\n                <img src=\"assets/imgs/facebook.svg\" alt=\"\">\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button fill=\"none\" style=\"height: 50px; width: 50px\">\r\n                <img src=\"assets/imgs/google.svg\" alt=\"\">\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-button fill=\"none\" style=\"height: 50px; width: 50px\">\r\n                <img src=\"assets/imgs/twitter_icon.png\" alt=\"\">\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n      </div>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  \r\n</ion-content>");

/***/ }),

/***/ "./src/app/auth/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/auth/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/auth/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/auth/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/auth/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/auth/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/auth/login/login.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-image: url('login.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  font-family: monospace !important;\n}\nion-content .holder {\n  width: 100%;\n  margin-top: -50px;\n}\nion-content .holder .btns-holder {\n  margin-top: 40px;\n}\nion-content .holder .btns-holder ion-button {\n  --border-color: rgba(119, 134, 158, 0.39);\n  --border-style: solid;\n  --border-width: 1px;\n  height: 3rem !important;\n  margin: 0 20px;\n}\nion-content .holder form {\n  margin: 0px 50px;\n}\nion-content .holder img {\n  max-width: 150px !important;\n}\nion-content .the-title {\n  max-width: 50%;\n  margin: auto;\n  text-align: center;\n}\nion-button {\n  --border-color: rgba(151, 170, 201, 0.39);\n  --border-style: solid;\n  --border-width: 1px;\n  height: 3rem !important;\n  margin: 0 50px;\n  margin-top: 30px;\n}\n.forgot-password-title {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9FOlxcd29ya19kYXRhXFxIU0hcXEpPQlNcXEF5YXp1cnJlaG1hblxcU2FmZVBhcmtcXEFwcC9zcmNcXGFwcFxcYXV0aFxcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUNBSjtBREVJO0VBRUksV0FBQTtFQUNBLGlCQUFBO0FDRFI7QURFUTtFQUVJLGdCQUFBO0FDRFo7QURHWTtFQUVJLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtBQ0hoQjtBRE9RO0VBRUksZ0JBQUE7QUNOWjtBRFNRO0VBQ0ksMkJBQUE7QUNQWjtBRFVJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1JSO0FEWUE7RUFFSSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtBQ1hKO0FEZUE7RUFDSSxnQkFBQTtBQ1pKIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9iZy9sb2dpbi5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuaG9sZGVyXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgLmJ0bnMtaG9sZGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMTE5LCAxMzQsIDE1OCwgMC4zOSk7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRoZS10aXRsZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uIFxyXG57XHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgxNTEsIDE3MCwgMjAxLCAwLjM5KTtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIC8vIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9iZy9sb2dpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciAuYnRucy1ob2xkZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciAuYnRucy1ob2xkZXIgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDExOSwgMTM0LCAxNTgsIDAuMzkpO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMjBweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgZm9ybSB7XG4gIG1hcmdpbjogMHB4IDUwcHg7XG59XG5pb24tY29udGVudCAuaG9sZGVyIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC50aGUtdGl0bGUge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSgxNTEsIDE3MCwgMjAxLCAwLjM5KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDUwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/auth/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';


let LoginPage = class LoginPage {
    constructor(formBuilder, navCtrl, 
    // public admobFree: AdMobFree, 
    authService, router, loadingCtrl, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.error_messages = {
            'username': [
                { type: 'required', message: 'Username is required' }
                // { type:'minlength', message: 'Username lenght must be longer than or equal to 6 characters '},
                // { type:'maxlength', message: 'Username lenght Cannot exceed 20 characters '},
                // { type:'pattern', message: 'Please enter valid Username format '}
            ],
            'password': [
                { type: 'required', message: 'Password is required' }
                // { type:'minlength', message: 'Password lenght must be longer than or equal to 6 characters '},
                // { type:'maxlength', message: 'Password lenght Cannot exceed 10 characters '},
                // { type:'pattern', message: 'Password must contain numbers,uppercase and lowercase letters '}
            ]
        };
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                // Validators.minLength(6),
                // Validators.maxLength(20)
                // Validators.pattern('^[a-zA-Z0-9_.+-]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                // Validators.minLength(6),
                // Validators.maxLength(20)
                // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ]))
        });
    }
    ngOnInit() {
    }
    // goSignup()
    // {
    //   this.navCtrl.navigateForward('signup');
    // }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles',
                message: 'Logging in ...'
            });
            loading.present();
            this.authService
                .login(this.loginForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => loading.dismiss()))
                .subscribe(_ => {
                if (JSON.parse(_)['success']) {
                    this.authService.setCurrentUserId(JSON.parse(_)['userId']);
                    this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
                }
                else
                    this.handleError('Invalid Credentials');
            }, err => {
                console.log(err);
                this.handleError(err);
            });
        });
    }
    forgotPassword() {
        this.router.navigate(['/forgot-password'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
    }
    handleError(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(error);
            let message;
            // if (error.status && error.status === 401) {
            //   message = 'Login failed';
            // } else {
            //   message = `Unexpected error: ${error.statusText}`;
            // }
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
        // let interstitialConfig: AdMobFreeInterstitialConfig = {
        //     isTesting: false, // Remove in production
        //     autoShow: true,//,
        //     id: "ca-app-pub-2582975357316139/1582620736"
        // };
        // this.admobFree.interstitial.config(interstitialConfig);
        // this.admobFree.interstitial.prepare().then(() => {
        // }).catch(e => alert(e));
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/auth/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=auth-login-login-module-es2015.js.map