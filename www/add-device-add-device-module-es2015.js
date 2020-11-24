(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-device-add-device-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-device/add-device.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-device/add-device.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <!-- fab placed to the bottom end -->  \n    <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n      <ion-fab-button (click)=\"goDashboardPage()\">  \n        <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n      </ion-fab-button>  \n    </ion-fab>  \n  \n  <ion-grid style=\"height: 100%\">\n    <ion-row style=\"height: 100%; margin-top: 100px;\">\n      <div class=\"holder\">\n        \n        <h1 style=\"text-align: center;\">Add Vehicle</h1>\n\n        <ion-select class=\"selectKita\" [(ngModel)]=\"selectedUser\" (ionChange)=\"onUserChanged()\" *ngIf=\"userType == 'admin'\" style=\"width: 80%;margin:auto\">\n          <ion-select-option *ngFor=\"let item of allUsers\" value=\"{{item.id}}\">\n            <ion-label>{{item.fullName}}</ion-label>\n          </ion-select-option>\n        </ion-select>\n\n        <form [formGroup]=\"deviceForm\" (ngSubmit)=\"add()\" style=\"width: 80%;margin:auto\">\n        \n          <div class=\"details\">\n            \n            <div class=\"detail-item\">\n              <ion-label>Name</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('name').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"name\" class=\"username\" placeholder=\"Enter Name\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Phone Number</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('phoneNumber').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"phoneNumber\" class=\"username\" placeholder=\"Enter Phone Number\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Device Imei</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('imei').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"imei\" class=\"username\" placeholder=\"Enter Device Imei\" [(ngModel)]=\"deviceImei\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Email</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('email').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"email\" class=\"username\" placeholder=\"Enter Email\"> </ion-input>\n              </ion-item>\n            </div>\n\n            <div class=\"detail-item\">\n              <ion-label>Vehicle Plate No</ion-label>\n              <ion-item>\n                <span class=\"icn-holder\" slot=\"end\" *ngIf=\"!deviceForm.get('plateNo').invalid\">\n                  <ion-icon name=\"checkmark-circle\"></ion-icon>\n                </span>\n                <ion-input formControlName=\"plateNo\" class=\"username\" placeholder=\"Enter Plate No\"> </ion-input>\n              </ion-item>\n            </div>\n          </div>\n          \n          <div class=\"btn-holder\">\n            <ion-button expand=\"block\" type=\"submit\" routerDirection=\"root\" [disabled]=\"deviceForm.invalid\">\n              Add\n            </ion-button>\n          </div>\n\n        </form>\n        \n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/add-device/add-device-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/add-device/add-device-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AddDevicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevicePageRoutingModule", function() { return AddDevicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-device.page */ "./src/app/add-device/add-device.page.ts");




const routes = [
    {
        path: '',
        component: _add_device_page__WEBPACK_IMPORTED_MODULE_3__["AddDevicePage"]
    }
];
let AddDevicePageRoutingModule = class AddDevicePageRoutingModule {
};
AddDevicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddDevicePageRoutingModule);



/***/ }),

/***/ "./src/app/add-device/add-device.module.ts":
/*!*************************************************!*\
  !*** ./src/app/add-device/add-device.module.ts ***!
  \*************************************************/
/*! exports provided: AddDevicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevicePageModule", function() { return AddDevicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-device-routing.module */ "./src/app/add-device/add-device-routing.module.ts");
/* harmony import */ var _add_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-device.page */ "./src/app/add-device/add-device.page.ts");







let AddDevicePageModule = class AddDevicePageModule {
};
AddDevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _add_device_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddDevicePageRoutingModule"]
        ],
        declarations: [_add_device_page__WEBPACK_IMPORTED_MODULE_6__["AddDevicePage"]]
    })
], AddDevicePageModule);



/***/ }),

/***/ "./src/app/add-device/add-device.page.scss":
/*!*************************************************!*\
  !*** ./src/app/add-device/add-device.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  font-family: monospace !important;\n}\nion-content .holder {\n  width: 100%;\n  margin-top: -50px;\n}\nion-content .holder .btns-holder {\n  margin-top: 15px;\n}\nion-content .holder .btns-holder ion-button {\n  height: 3rem !important;\n}\nion-content .holder img {\n  max-width: 150px !important;\n}\nion-content .the-title {\n  max-width: 50%;\n  margin: auto;\n  text-align: center;\n}\nion-button {\n  height: 3rem !important;\n  margin-top: 20px;\n}\n.sign-up-btn {\n  background-color: #3c63ff;\n}\n.sign-in-btn {\n  background-color: #ffffff;\n}\n.header-title {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWRldmljZS9FOlxcd29ya19kYXRhXFxIU0hcXEpPQlNcXEF5YXp1cnJlaG1hblxcU2FmZVBhcmtcXEFwcC9zcmNcXGFwcFxcYWRkLWRldmljZVxcYWRkLWRldmljZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1kZXZpY2UvYWRkLWRldmljZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQ0FBQTtBQ0FKO0FERUk7RUFFSSxXQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREVRO0VBRUksZ0JBQUE7QUNEWjtBREdZO0VBRUksdUJBQUE7QUNGaEI7QURNUTtFQUNJLDJCQUFBO0FDSlo7QURRSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNOUjtBRFdBO0VBRUksdUJBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEWUE7RUFDSSx5QkFBQTtBQ1RKO0FEWUE7RUFDSSx5QkFBQTtBQ1RKO0FEWUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNUSiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kZXZpY2UvYWRkLWRldmljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBcclxue1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuaG9sZGVyXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgICAgLmJ0bnMtaG9sZGVyXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW9uLWJ1dHRvbiBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRoZS10aXRsZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbiBcclxue1xyXG4gICAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uc2lnbi11cC1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjNjNmZjtcclxufVxyXG5cclxuLnNpZ24taW4tYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5oZWFkZXItdGl0bGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciAuYnRucy1ob2xkZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciAuYnRucy1ob2xkZXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudGhlLXRpdGxlIHtcbiAgbWF4LXdpZHRoOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaWduLXVwLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYzYzZmY7XG59XG5cbi5zaWduLWluLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-device/add-device.page.ts":
/*!***********************************************!*\
  !*** ./src/app/add-device/add-device.page.ts ***!
  \***********************************************/
/*! exports provided: AddDevicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDevicePage", function() { return AddDevicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





// import { AdMobFreeInterstitialConfig, AdMobFree } from '@ionic-native/admob-free/ngx';



let AddDevicePage = class AddDevicePage {
    constructor(formBuilder, navCtrl, authService, router, loadingCtrl, toastCtrl, userService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.userService = userService;
        this.deviceForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            plateNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            imei: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
        this.currentUserId = this.authService.getCurrentUserId();
        this.getUserData();
        this.getAllUsers();
    }
    ngOnInit() {
    }
    getUserData() {
        this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { })).subscribe(res => {
            if (res['status']) {
                this.user = res['user'];
                this.userType = this.user.userType;
            }
        }, err => {
            console.log(err);
        });
    }
    getAllUsers() {
        this.userService.getAllClients().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => { })).subscribe(res => {
            if (res['status']) {
                this.allUsers = res['users'];
            }
        }, err => {
            console.log(err);
        });
    }
    onUserChanged() {
    }
    goDashboardPage() {
        this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
    }
    add() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let selectUserId = 0;
            if (this.selectedUser != undefined && this.selectedUser != '' && this.selectedUser != null) {
                selectUserId = this.selectedUser;
            }
            else {
                selectUserId = this.currentUserId;
            }
            console.log(selectUserId);
            if (this.deviceImei.length != 15) {
                this.handleError("Device Imei must be 15 digits");
                return true;
            }
            const loading = yield this.loadingCtrl.create({
                spinner: 'bubbles',
                message: 'Adding New Device ...'
            });
            loading.present();
            this.userService
                .addDevice(this.deviceForm.value, selectUserId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(() => loading.dismiss()))
                .subscribe(_ => {
                console.log(_);
                if (JSON.parse(_)['success']) {
                    this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
                    this.handleError("Add New Device Successfully");
                }
                else
                    this.handleError("Didn't Add");
            }, err => {
                this.handleError(err);
            });
        });
    }
    handleError(error) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
AddDevicePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
AddDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-device',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-device.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-device/add-device.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-device.page.scss */ "./src/app/add-device/add-device.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _api_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], AddDevicePage);



/***/ })

}]);
//# sourceMappingURL=add-device-add-device-module-es2015.js.map