(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <ion-grid style=\"height: 100%\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center \" style=\"height: 100%\">\n      <div class=\"holder\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"forgotPassword()\">\n          <div class=\"details\">\n            <div class=\"detail-item\">\n              <ion-label>Username</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!loginForm.get('username').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"username\" class=\"username\" placeholder=\"Enter Username\"> </ion-input>\n              </ion-item>\n\n              <div class=\"error-messages\">\n                <ng-container *ngFor=\"let error of error_messages.username\">\n                  <div class=\"error-message\"\n                    *ngIf=\"loginForm.get('username').hasError(error.type) && (loginForm.get('username').dirty || loginForm.get('username').touched)\">\n                    {{error.message}}\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n            <div class=\"detail-item\">\n              <ion-label>User Email</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!loginForm.get('useremail').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input class=\"password\" placeholder=\"Enter Email\" formControlName=\"useremail\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"error-messages\">\n              <ng-container *ngFor=\"let error of error_messages.useremail\">\n                <div class=\"error-message\"\n                  *ngIf=\"loginForm.get('useremail').hasError(error.type) && (loginForm.get('useremail').dirty || loginForm.get('useremail').touched)\">\n                  {{error.message}}\n                </div>\n              </ng-container>\n            </div>\n          </div>\n          \n          <div class=\"btn-holder\">\n            <ion-button expand=\"block\" type=\"submit\" routerDirection=\"root\" [disabled]=\"loginForm.invalid\">\n              Send\n            </ion-button>\n          </div>\n          <div class=\"signup-holder\">\n            <p (click)=\"goLogin()\">Sign In ?</p>\n          </div>\n        </form>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageRoutingModule", function() { return ForgotPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPasswordPage"]
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-password-routing.module */ "./src/app/forgot-password/forgot-password-routing.module.ts");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/forgot-password/forgot-password.page.ts");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordPageRoutingModule"]
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-image: url('login.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  font-family: monospace !important;\n}\nion-content .holder {\n  width: 100%;\n  margin-top: -50px;\n}\nion-content .holder .btns-holder {\n  margin-top: 40px;\n}\nion-content .holder .btns-holder ion-button {\n  --border-color: rgba(119, 134, 158, 0.39);\n  --border-style: solid;\n  --border-width: 1px;\n  height: 3rem !important;\n  margin: 0 20px;\n}\nion-content .holder form {\n  margin: 0px 50px;\n}\nion-content .holder img {\n  max-width: 150px !important;\n}\nion-content .the-title {\n  max-width: 50%;\n  margin: auto;\n  text-align: center;\n}\nion-button {\n  --border-color: rgba(151, 170, 201, 0.39);\n  --border-style: solid;\n  --border-width: 1px;\n  height: 3rem !important;\n  margin: 0 50px;\n  margin-top: 30px;\n}\n.forgot-password-title {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL0U6XFxIU0hcXEpPQlNcXFJlaG1hblxcU2FmZVBhcmtcXFNhZmVQYXJrXFxBcHBcXEFwcC9zcmNcXGFwcFxcZm9yZ290LXBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQ0FKO0FERUk7RUFFSSxXQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREVRO0VBRUksZ0JBQUE7QUNEWjtBREdZO0VBRUkseUNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0FDSGhCO0FET1E7RUFFSSxnQkFBQTtBQ05aO0FEU1E7RUFDSSwyQkFBQTtBQ1BaO0FEVUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUlI7QURZQTtFQUVJLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0FDWEo7QURlQTtFQUNJLGdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IFxyXG57XHJcbiAgICAtLWJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2JnL2xvZ2luLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgXHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC5ob2xkZXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgICAgICAuYnRucy1ob2xkZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24tYnV0dG9uIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgxMTksIDEzNCwgMTU4LCAwLjM5KTtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC8vIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGhlLXRpdGxlIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1idXR0b24gXHJcbntcclxuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDE1MSwgMTcwLCAyMDEsIDAuMzkpO1xyXG4gICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgLy8gd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwIDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5cclxufVxyXG5cclxuLmZvcmdvdC1wYXNzd29yZC10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2JnL2xvZ2luLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5pb24tY29udGVudCAuaG9sZGVyIC5idG5zLWhvbGRlciB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5pb24tY29udGVudCAuaG9sZGVyIC5idG5zLWhvbGRlciBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMTE5LCAxMzQsIDE1OCwgMC4zOSk7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciBmb3JtIHtcbiAgbWFyZ2luOiAwcHggNTBweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnRoZS10aXRsZSB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDE1MSwgMTcwLCAyMDEsIDAuMzkpO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';


let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(formBuilder, navCtrl, authService, router, loadingCtrl, toastCtrl) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.error_messages = {
            'username': [
                { type: 'required', message: 'Username is required' }
            ],
            'useremail': [
                { type: 'required', message: 'Email is required' }
            ]
        };
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            useremail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    }
    ngOnInit() {
    }
    goLogin() {
        this.router.navigate(['/login'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
    }
    forgotPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles',
                message: 'Logging in ...'
            });
            loading.present();
            this.authService
                .forgotPassword(this.loginForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => loading.dismiss()))
                .subscribe(_ => {
                if (JSON.parse(_)['success']) {
                    this.navCtrl.navigateRoot([`verify-code/${JSON.parse(_)['userId']}`], { replaceUrl: true });
                }
                else
                    this.handleError('No Match');
            }, err => this.handleError(err));
        });
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
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/forgot-password/forgot-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgot-password-forgot-password-module-es2015.js.map