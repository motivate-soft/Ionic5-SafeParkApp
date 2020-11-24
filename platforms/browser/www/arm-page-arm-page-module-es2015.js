(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arm-page-arm-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/arm-page/arm-page.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/arm-page/arm-page.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <!-- fab placed to the bottom end -->  \n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n    <ion-fab-button (click)=\"goDashboardPage()\">  \n      <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n    </ion-fab-button>  \n  </ion-fab>  \n      \n  <ion-list style=\"margin-top: 20px;\">\n    <ion-list-header>\n      <ion-label>\n        <h1 style=\"text-align: center;\">Arm / Disarm setting</h1>\n      </ion-label>\n    </ion-list-header>\n\n  </ion-list>\n\n  <ion-list *ngFor=\"let item of allDevices\">\n\n    <ion-item *ngIf=\"item.isArm == 1\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-toggle color=\"secondary\" checked (ionChange)=\"checkState(item.id, $event.target.checked)\"></ion-toggle>\n    </ion-item>\n\n    <ion-item *ngIf=\"item.isArm == 0\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-toggle color=\"secondary\"  (ionChange)=\"checkState(item.id, $event.target.checked)\"></ion-toggle>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/arm-page/arm-page-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/arm-page/arm-page-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ArmPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmPagePageRoutingModule", function() { return ArmPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _arm_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arm-page.page */ "./src/app/arm-page/arm-page.page.ts");




const routes = [
    {
        path: '',
        component: _arm_page_page__WEBPACK_IMPORTED_MODULE_3__["ArmPagePage"]
    }
];
let ArmPagePageRoutingModule = class ArmPagePageRoutingModule {
};
ArmPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ArmPagePageRoutingModule);



/***/ }),

/***/ "./src/app/arm-page/arm-page.module.ts":
/*!*********************************************!*\
  !*** ./src/app/arm-page/arm-page.module.ts ***!
  \*********************************************/
/*! exports provided: ArmPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmPagePageModule", function() { return ArmPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _arm_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./arm-page-routing.module */ "./src/app/arm-page/arm-page-routing.module.ts");
/* harmony import */ var _arm_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./arm-page.page */ "./src/app/arm-page/arm-page.page.ts");







let ArmPagePageModule = class ArmPagePageModule {
};
ArmPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _arm_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArmPagePageRoutingModule"]
        ],
        declarations: [_arm_page_page__WEBPACK_IMPORTED_MODULE_6__["ArmPagePage"]]
    })
], ArmPagePageModule);



/***/ }),

/***/ "./src/app/arm-page/arm-page.page.scss":
/*!*********************************************!*\
  !*** ./src/app/arm-page/arm-page.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\nion-toggle {\n  --background: #444444;\n  --background-checked: rgb(0, 219, 248);\n  --handle-background: #ffffff;\n  --handle-background-checked: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJtLXBhZ2UvRTpcXEhTSFxcSk9CU1xcUmVobWFuXFxTYWZlUGFya1xcU2FmZVBhcmtcXEFwcFxcQXBwL3NyY1xcYXBwXFxhcm0tcGFnZVxcYXJtLXBhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9hcm0tcGFnZS9hcm0tcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0RBQUE7QUFDQTtFQUNJLFdBQUE7RUFFQSx1QkFBQTtBQ0FKO0FER0UsZ0VBQUE7QUFDQTs7RUFFRSxjQUFBO0FDQUo7QURHRSwwQ0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUNBSjtBREdFOzs7O0VBQUE7QUFLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0UsdUJBQUE7QUFDQTtFQUNFLGNBQUE7QUNBSjtBREdFLG1DQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7RUFDRSxxQkFBQTtFQUNBLHNDQUFBO0VBRUEsNEJBQUE7RUFDQSxvQ0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYXJtLXBhZ2UvYXJtLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xyXG5pb24tc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlciksXHJcbiAgaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XHJcbiAgICBmbGV4OiAwIDAgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpIHtcclxuICAgIGNvbG9yOiAjMjBhMDhhO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgXHJcbiAgLypcclxuICAgKiBTZXQgdGhlIGZvbnQgb2YgdGhlIGZpcnN0IGxldHRlciBvZiB0aGUgcGxhY2Vob2xkZXJcclxuICAgKiBTaGFkb3cgcGFydHMgd29yayB3aXRoIHBzZXVkby1lbGVtZW50cywgdG9vIVxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcclxuICAgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKTo6Zmlyc3QtbGV0dGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgdGV4dCBjb2xvciAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xyXG4gICAgY29sb3I6ICM1NDVjYTc7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gICAgY29sb3I6ICM5NzFlNDk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRvZ2dsZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICM0NDQ0NDQ7XHJcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiKDAsIDIxOSwgMjQ4KTtcclxuICBcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM0NDQ0NDQ7XHJcbiAgfSIsIi8qIFNldCB0aGUgd2lkdGggdG8gdGhlIGZ1bGwgY29udGFpbmVyIGFuZCBjZW50ZXIgdGhlIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFNldCB0aGUgZmxleCBpbiBvcmRlciB0byBzaXplIHRoZSB0ZXh0IHdpZHRoIHRvIGl0cyBjb250ZW50ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLyogU2V0IHRoZSBwbGFjZWhvbGRlciBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xuICBjb2xvcjogIzIwYTA4YTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLypcbiAqIFNldCB0aGUgZm9udCBvZiB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwbGFjZWhvbGRlclxuICogU2hhZG93IHBhcnRzIHdvcmsgd2l0aCBwc2V1ZG8tZWxlbWVudHMsIHRvbyFcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9Qc2V1ZG8tZWxlbWVudHNcbiAqL1xuaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcik6OmZpcnN0LWxldHRlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgY29sb3I6ICM1NDVjYTc7XG59XG5cbi8qIFNldCB0aGUgaWNvbiBjb2xvciBhbmQgb3BhY2l0eSAqL1xuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGNvbG9yOiAjOTcxZTQ5O1xuICBvcGFjaXR5OiAxO1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDQ0NDQ0O1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiKDAsIDIxOSwgMjQ4KTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjNDQ0NDQ0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/arm-page/arm-page.page.ts":
/*!*******************************************!*\
  !*** ./src/app/arm-page/arm-page.page.ts ***!
  \*******************************************/
/*! exports provided: ArmPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmPagePage", function() { return ArmPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");






//Api


let ArmPagePage = class ArmPagePage {
    constructor(alertCtrl, modalCtrl, authService, router, navCtrl, userService, translate, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.reqData = {};
        this.state = 0;
        this.currentUserId = this.authService.getCurrentUserId();
        this.getUserData();
        this.getAllDevices();
    }
    ngOnInit() {
    }
    getAllDevices() {
        this.userService.getAllDevices(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            this.allDevices = res;
        }, err => {
            console.log(err);
        });
    }
    getUserData() {
        this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            if (res['status']) {
                this.user = res['user'];
            }
        }, err => {
            console.log(err);
        });
    }
    goDashboardPage() {
        this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
    }
    checkState(id, checked) {
        if (checked == true) {
            this.state = 1;
        }
        else {
            this.state = 0;
        }
        this.reqData['vehicleId'] = id;
        this.reqData['isArm'] = this.state;
        this.userService.updateArm(this.reqData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            if (res['status']) {
            }
        }, err => {
            console.log(err);
        });
    }
};
ArmPagePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
];
ArmPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-arm-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./arm-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/arm-page/arm-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./arm-page.page.scss */ "./src/app/arm-page/arm-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], ArmPagePage);



/***/ })

}]);
//# sourceMappingURL=arm-page-arm-page-module-es2015.js.map