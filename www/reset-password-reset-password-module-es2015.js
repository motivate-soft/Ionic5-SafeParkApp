(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reset-password-reset-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <ion-grid style=\"height: 100%\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center \" style=\"height: 100%\">\n      <div class=\"holder\">\n        <div class=\"the-title\">\n          <img src=\"assets/imgs/bg/logo.png\" alt=\"Logo\">\n        </div>\n\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"resetPassword()\">\n          <div class=\"details\">\n            <div class=\"detail-item\">\n              <ion-label>Password</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!loginForm.get('password').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input type=\"password\" formControlName=\"password\" class=\"username\" placeholder=\"Enter Password\"> </ion-input>\n              </ion-item>\n\n              <div class=\"error-messages\">\n                <ng-container *ngFor=\"let error of error_messages.password\">\n                  <div class=\"error-message\"\n                    *ngIf=\"loginForm.get('password').hasError(error.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                    {{error.message}}\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>ConFirm Password</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!loginForm.get('confirm').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input type=\"password\" formControlName=\"confirm\" class=\"username\" placeholder=\"Enter Confirm Password\"> </ion-input>\n              </ion-item>\n\n              <div class=\"error-messages\">\n                <ng-container *ngFor=\"let error of error_messages.confirm\">\n                  <div class=\"error-message\"\n                    *ngIf=\"loginForm.get('confirm').hasError(error.type) && (loginForm.get('confirm').dirty || loginForm.get('confirm').touched)\">\n                    {{error.message}}\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"btn-holder\">\n            <ion-button expand=\"block\" type=\"submit\" routerDirection=\"root\" [disabled]=\"loginForm.invalid\">\n              Agree\n            </ion-button>\n          </div>\n          <div class=\"signup-holder\">\n            <p (click)=\"goLogin()\">Login ?</p>\n          </div>\n        </form>\n      </div>\n    </ion-row>\n  </ion-grid>\n\n\n  \n</ion-content>");

/***/ }),

/***/ "./src/app/reset-password/reset-password-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/reset-password/reset-password-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ResetPasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageRoutingModule", function() { return ResetPasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");




const routes = [
    {
        path: '',
        component: _reset_password_page__WEBPACK_IMPORTED_MODULE_3__["ResetPasswordPage"]
    }
];
let ResetPasswordPageRoutingModule = class ResetPasswordPageRoutingModule {
};
ResetPasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/reset-password/reset-password.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.module.ts ***!
  \*********************************************************/
/*! exports provided: ResetPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPageModule", function() { return ResetPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-password-routing.module */ "./src/app/reset-password/reset-password-routing.module.ts");
/* harmony import */ var _reset_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset-password.page */ "./src/app/reset-password/reset-password.page.ts");







let ResetPasswordPageModule = class ResetPasswordPageModule {
};
ResetPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPasswordPageRoutingModule"]
        ],
        declarations: [_reset_password_page__WEBPACK_IMPORTED_MODULE_6__["ResetPasswordPage"]]
    })
], ResetPasswordPageModule);



/***/ }),

/***/ "./src/app/reset-password/reset-password.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: none;\n  background-image: url('login.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  font-family: monospace !important;\n}\nion-content .holder {\n  width: 100%;\n  margin-top: -50px;\n}\nion-content .holder .btns-holder {\n  margin-top: 40px;\n}\nion-content .holder .btns-holder ion-button {\n  --border-color: rgba(119, 134, 158, 0.39);\n  --border-style: solid;\n  --border-width: 1px;\n  height: 3rem !important;\n  margin: 0 20px;\n}\nion-content .holder form {\n  margin: 0px 50px;\n}\nion-content .holder img {\n  max-width: 150px !important;\n}\nion-content .the-title {\n  max-width: 50%;\n  margin: auto;\n  text-align: center;\n}\nion-button {\n  --border-color: rgba(151, 170, 201, 0.39);\n  --border-style: solid;\n  --border-width: 1px;\n  height: 3rem !important;\n  margin: 0 50px;\n  margin-top: 30px;\n}\n.forgot-password-title {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXQtcGFzc3dvcmQvRTpcXHdvcmtfZGF0YVxcSFNIXFxKT0JTXFxBeWF6dXJyZWhtYW5cXFNhZmVQYXJrXFxBcHAvc3JjXFxhcHBcXHJlc2V0LXBhc3N3b3JkXFxyZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQ0FKO0FERUk7RUFFSSxXQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREVRO0VBRUksZ0JBQUE7QUNEWjtBREdZO0VBRUkseUNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0FDSGhCO0FET1E7RUFFSSxnQkFBQTtBQ05aO0FEU1E7RUFDSSwyQkFBQTtBQ1BaO0FEVUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUlI7QURZQTtFQUVJLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtFQUNBLGdCQUFBO0FDWEo7QURlQTtFQUNJLGdCQUFBO0FDWkoiLCJmaWxlIjoic3JjL2FwcC9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBcclxue1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9iZy9sb2dpbi5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7IFxyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuaG9sZGVyXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgLmJ0bnMtaG9sZGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHJnYmEoMTE5LCAxMzQsIDE1OCwgMC4zOSk7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRoZS10aXRsZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tYnV0dG9uIFxyXG57XHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgxNTEsIDE3MCwgMjAxLCAwLjM5KTtcclxuICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIC8vIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy9sb2dpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciAuYnRucy1ob2xkZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciAuYnRucy1ob2xkZXIgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDExOSwgMTM0LCAxNTgsIDAuMzkpO1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMjBweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgZm9ybSB7XG4gIG1hcmdpbjogMHB4IDUwcHg7XG59XG5pb24tY29udGVudCAuaG9sZGVyIGltZyB7XG4gIG1heC13aWR0aDogMTUwcHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC50aGUtdGl0bGUge1xuICBtYXgtd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSgxNTEsIDE3MCwgMjAxLCAwLjM5KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIDUwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5mb3Jnb3QtcGFzc3dvcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/reset-password/reset-password.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/reset-password/reset-password.page.ts ***!
  \*******************************************************/
/*! exports provided: ResetPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordPage", function() { return ResetPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';


let ResetPasswordPage = class ResetPasswordPage {
    constructor(formBuilder, navCtrl, authService, router, loadingCtrl, toastCtrl, route) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.route = route;
        this.error_messages = {
            'password': [
                { type: 'required', message: 'Password is required' }
            ],
            'confirm': [
                { type: 'required', message: 'Confirm Password is required' }
            ]
        };
        this._id = this.route.snapshot.paramMap.get('id');
        this.loginForm = this.formBuilder.group({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    }
    ngOnInit() {
    }
    goLogin() {
        this.router.navigate(['/login'], { replaceUrl: true, skipLocationChange: true, preserveFragment: true });
    }
    resetPassword() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles',
                message: 'Logging in ...'
            });
            loading.present();
            if (this.loginForm.value.password != this.loginForm.value.confirm) {
                this.handleError("Input Password Correctly");
                loading.dismiss();
                return true;
            }
            let obj = {
                'password': this.loginForm.value.password,
                'userId': this._id
            };
            this.authService
                .updatePassword(obj)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => loading.dismiss()))
                .subscribe(_ => {
                if (JSON.parse(_)['success'] == true) {
                    this.navCtrl.navigateRoot(['login'], { replaceUrl: true });
                }
                else {
                }
            }, err => this.handleError(err));
            loading.dismiss();
        });
    }
    handleError(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(error);
            let message;
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
ResetPasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ResetPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reset-password/reset-password.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.page.scss */ "./src/app/reset-password/reset-password.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], ResetPasswordPage);



/***/ })

}]);
//# sourceMappingURL=reset-password-reset-password-module-es2015.js.map