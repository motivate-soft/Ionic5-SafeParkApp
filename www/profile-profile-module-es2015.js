(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\" (click)=\"goBack()\">\n      <ion-button>\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title slot=\"end\">Profile Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"background-holder\"></div>\n  <div class=\"top-card ion-text-center ion-padding-vertical\">\n    <div class=\"img-holder\">\n      <ion-avatar>\n        <img [src]=\"avatarPath\" alt=\"Avatar\">\n      </ion-avatar>\n    </div>\n    <div class=\"details\">\n      <h5>{{fullName}}</h5>\n    </div>\n  </div>\n\n  <div class=\"bottom-section\">\n    <div class=\"general\">\n      <ion-grid style=\"height: 100%\">\n        <ion-row class=\"ion-justify-content-center ion-align-items-center\" style=\"height: 100%\">\n          <div class=\"the-holder\" >\n            <div>\n\n              <h5>Personal Information</h5>\n\n              <div class=\"details\">\n                <div class=\"detail-item\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size-md=\"6\" size-sm = \"6\" size-xs = \"6\">\n                        <ion-label>Username</ion-label>\n                        <ion-item lines=\"none\">\n                          <ion-input readonly value=\"{{userName}}\"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size-md=\"6\" size-sm = \"6\" size-xs = \"6\">\n                        <ion-label>User Type</ion-label>\n                        <ion-item lines=\"none\">\n                          <ion-input readonly value=\"{{userType}}\"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size-md=\"12\" size-sm = \"12\" size-xs = \"12\">\n                        <ion-label>Phone</ion-label>\n                        <ion-item lines=\"none\">\n                          <ion-input readonly value=\"{{phone}}\"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n          \n              <h5>Account Information</h5>\n          \n              <div class=\"details\">\n                <div class=\"detail-item\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col size-md=\"12\" size-sm = \"12\" size-xs = \"12\">\n                        <ion-label>Email</ion-label>\n                        <ion-item lines=\"none\">\n                          <ion-input type=\"email\" [(ngModel)]=\"email\" value=\"{{email}}\" (ionChange)=\"validate()\"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size-md=\"4\" size-sm = \"12\" size-xs = \"12\">\n                        <ion-label>New Password</ion-label>\n                        <ion-item lines=\"none\">\n                          <ion-input type=\"password\" [(ngModel)]=\"newPassword\" (ionChange)=\"validate()\"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                      <ion-col size-md=\"4\" size-sm = \"12\" size-xs = \"12\">\n                        <ion-label>Confirm Password</ion-label>\n                        <ion-item lines=\"none\">\n                          <ion-input type=\"password\" [(ngModel)]=\"confirmPassword\" (ionChange)=\"validate()\"></ion-input>\n                        </ion-item>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"updateProfile()\">\n    <ion-fab-button [disabled]=\"isDisabled == false\">\n      <ion-icon name=\"send\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/profile/profile.page.ts");







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/profile/profile.page.scss":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --border-width: 0;\n  --background: #0047CC !important;\n  --color: white !important;\n}\n\nion-content {\n  --background: #fff !important;\n}\n\n.background-holder {\n  background: #0047CC;\n  height: 25%;\n  border-bottom-right-radius: 40px;\n}\n\n.top-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);\n  width: 85%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.top-card .img-holder ion-avatar {\n  margin-left: auto;\n  margin-right: auto;\n  --border-radius:50%;\n}\n\n.top-card .details h5 {\n  color: #042C5C !important;\n  font-family: \"PoppinsH\" !important;\n}\n\n.top-card .details p {\n  color: #77869E !important;\n  font-family: \"PoppinsM\" !important;\n  margin-top: 0 !important;\n}\n\n.top-card .badge-holder {\n  margin: 0 10px;\n  background: #F8F9F9;\n  border-radius: 12px;\n  padding: 10px 0;\n}\n\n.top-card .badge-holder .badge {\n  display: inline-block;\n  margin: 0 5px;\n}\n\n.bottom-section {\n  margin-top: 20px;\n}\n\n.bottom-section h5 {\n  color: #77869E !important;\n}\n\n.bottom-section .general {\n  margin-top: 20px;\n}\n\n.bottom-section .general .gen-list ion-item {\n  margin-top: 10px !important;\n  --background: white !important;\n}\n\n.bottom-section .general .gen-list ion-item ion-label h2 {\n  color: #042C5C !important;\n}\n\n.bottom-section .general .gen-list ion-item ion-label p {\n  color: #77869E !important;\n  font-family: \"PoppinsR\" !important;\n}\n\n.details {\n  padding: 0 20px 20px 20px !important;\n}\n\n.details ion-item {\n  --border-radius: 5px !important;\n}\n\n.section {\n  margin-top: 25px;\n}\n\nion-label {\n  font-weight: 200 !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  height: 30px !important;\n  font-family: \"PoppinsB\" !important;\n  margin-top: -10px !important;\n}\n\nion-textarea {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: 1px solid gray !important;\n  border-radius: 20px;\n  padding: 0 15px !important;\n  font-family: \"PoppinsB\" !important;\n}\n\nion-input::shadow input {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9FOlxcd29ya19kYXRhXFxIU0hcXEpPQlNcXEF5YXp1cnJlaG1hblxcU2FmZVBhcmtcXEFwcC9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURHQTtFQUNJLDZCQUFBO0FDQUo7O0FER0E7RUFFSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0RKOztBRElBO0VBRUksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBRE1RO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSlo7O0FEVVE7RUFFSSx5QkFBQTtFQUNBLGtDQUFBO0FDVFo7O0FEWVE7RUFFSSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7QUNYWjs7QURlSTtFQUVHLGNBQUE7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2RSOztBRGVRO0VBRUkscUJBQUE7RUFDQSxhQUFBO0FDZFo7O0FEbUJBO0VBRUksZ0JBQUE7QUNqQko7O0FEa0JJO0VBRUkseUJBQUE7QUNqQlI7O0FEb0JJO0VBRUksZ0JBQUE7QUNuQlI7O0FEc0JZO0VBRUksMkJBQUE7RUFDQSw4QkFBQTtBQ3JCaEI7O0FEeUJvQjtFQUVJLHlCQUFBO0FDeEJ4Qjs7QUQyQm9CO0VBRUkseUJBQUE7RUFDQSxrQ0FBQTtBQzFCeEI7O0FEa0NBO0VBQ0ksb0NBQUE7QUMvQko7O0FEZ0NJO0VBQ0ksK0JBQUE7QUM5QlI7O0FEa0NBO0VBQ0ksZ0JBQUE7QUMvQko7O0FEa0NBO0VBQ0ksMkJBQUE7RUFBNkIsa0NBQUE7QUM5QmpDOztBRGlDQTtFQUNJLGdCQUFBO0VBQWlCLGFBQUE7RUFBZSx3QkFBQTtFQUEwQiwyQkFBQTtFQUE2QixpQ0FBQTtFQUN2RixtQkFBQTtFQUFxQiwwQkFBQTtFQUE0Qix1QkFBQTtFQUF5QixrQ0FBQTtFQUFvQyw0QkFBQTtBQ3RCbEg7O0FEeUJBO0VBQ0ksZ0JBQUE7RUFBaUIsYUFBQTtFQUFlLHdCQUFBO0VBQTBCLDJCQUFBO0VBQTZCLGlDQUFBO0VBQ3ZGLG1CQUFBO0VBQXFCLDBCQUFBO0VBQTRCLGtDQUFBO0FDaEJyRDs7QURtQkE7RUFDSSxVQUFBO0FDaEJKIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDA0N0NDICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhY2tncm91bmQtaG9sZGVyXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICMwMDQ3Q0M7XHJcbiAgICBoZWlnaHQ6IDI1JTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MHB4O1xyXG59XHJcblxyXG4udG9wLWNhcmRcclxue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgICAuaW1nLWhvbGRlclxyXG4gICAge1xyXG4gICAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzXHJcbiAgICB7XHJcbiAgICAgICAgaDVcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDQyQzVDICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGluc0gnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3ODY5RSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnNNJyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYWRnZS1ob2xkZXJcclxuICAgIHtcclxuICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY5Rjk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgLmJhZGdlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG59XHJcblxyXG4uYm90dG9tLXNlY3Rpb25cclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGg1XHJcbiAgICB7XHJcbiAgICAgICAgY29sb3I6ICM3Nzg2OUUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZ2VuZXJhbFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgLmdlbi1saXN0XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpb24taXRlbVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaDJcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgIzA0MkM1QyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zUichaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogMjAwICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7IG91dGxpbmU6IG5vbmU7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDsgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7IGZvbnQtZmFtaWx5OiAnUG9wcGluc0InICFpbXBvcnRhbnQ7IG1hcmdpbi10b3A6IC0xMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7IG91dGxpbmU6IG5vbmU7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDsgZm9udC1mYW1pbHk6ICdQb3BwaW5zQicgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0OjpzaGFkb3cgaW5wdXQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSIsImlvbi10b29sYmFyIHtcbiAgLS1ib3JkZXItd2lkdGg6IDA7XG4gIC0tYmFja2dyb3VuZDogIzAwNDdDQyAhaW1wb3J0YW50O1xuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG4uYmFja2dyb3VuZC1ob2xkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA0N0NDO1xuICBoZWlnaHQ6IDI1JTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDQwcHg7XG59XG5cbi50b3AtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgd2lkdGg6IDg1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnRvcC1jYXJkIC5pbWctaG9sZGVyIGlvbi1hdmF0YXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAtLWJvcmRlci1yYWRpdXM6NTAlO1xufVxuLnRvcC1jYXJkIC5kZXRhaWxzIGg1IHtcbiAgY29sb3I6ICMwNDJDNUMgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0hcIiAhaW1wb3J0YW50O1xufVxuLnRvcC1jYXJkIC5kZXRhaWxzIHAge1xuICBjb2xvcjogIzc3ODY5RSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zTVwiICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cbi50b3AtY2FyZCAuYmFkZ2UtaG9sZGVyIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGJhY2tncm91bmQ6ICNGOEY5Rjk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi50b3AtY2FyZCAuYmFkZ2UtaG9sZGVyIC5iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIDVweDtcbn1cblxuLmJvdHRvbS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ib3R0b20tc2VjdGlvbiBoNSB7XG4gIGNvbG9yOiAjNzc4NjlFICFpbXBvcnRhbnQ7XG59XG4uYm90dG9tLXNlY3Rpb24gLmdlbmVyYWwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvdHRvbS1zZWN0aW9uIC5nZW5lcmFsIC5nZW4tbGlzdCBpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmJvdHRvbS1zZWN0aW9uIC5nZW5lcmFsIC5nZW4tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgaDIge1xuICBjb2xvcjogIzA0MkM1QyAhaW1wb3J0YW50O1xufVxuLmJvdHRvbS1zZWN0aW9uIC5nZW5lcmFsIC5nZW4tbGlzdCBpb24taXRlbSBpb24tbGFiZWwgcCB7XG4gIGNvbG9yOiAjNzc4NjlFICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNSXCIgIWltcG9ydGFudDtcbn1cblxuLmRldGFpbHMge1xuICBwYWRkaW5nOiAwIDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGV0YWlscyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDIwMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zQlwiICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAgMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMTBweCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAwIDE1cHggIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc0JcIiAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQ6OnNoYWRvdyBpbnB1dCB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/profile/profile.page.ts":
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/user.service */ "./src/app/api/user.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






//Api


// Environment

let ProfilePage = class ProfilePage {
    constructor(alertController, modalCtrl, authService, router, navCtrl, userService, alertCtrl, translate, loadingCtrl, toastCtrl) {
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
        this.router = router;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.email = "";
        this.password = "";
        this.currentPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
        this.isDisabled = false;
        this.initEmail = "";
        this.isDisabled = false;
        this.publicPath = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].publicURL;
        this.avatarPath = this.publicPath + '/images/avatar.png';
        this.currentUserId = this.authService.getCurrentUserId();
        this.getUserData();
    }
    ngOnInit() {
    }
    getUserData() {
        this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { })).subscribe(res => {
            if (res['status']) {
                this.user = res['user'];
                this.userType = this.user.userType;
                this.userName = this.user.username;
                this.fullName = this.user.fullName;
                this.email = this.user.email;
                this.initEmail = this.email;
                this.password = this.user.password;
                this.phone = this.user.phone;
            }
        }, err => {
            console.log(err);
        });
    }
    goBack() {
        this.navCtrl.navigateRoot(['dashboard'], { replaceUrl: true });
    }
    validate() {
        if (this.email == "") {
            this.isDisabled = false;
            return true;
        }
        if (this.email == this.initEmail && this.newPassword == "") {
            this.isDisabled = false;
            return true;
        }
        if (this.newPassword != "" && this.confirmPassword == "") {
            this.isDisabled = false;
            return true;
        }
        if (this.newPassword == "" && this.confirmPassword != "") {
            this.isDisabled = false;
            return true;
        }
        this.isDisabled = true;
        return true;
    }
    updateProfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.newPassword != this.confirmPassword) {
                this.handleError("Please confirm password correctly");
                return true;
            }
            let obj = {
                userId: this.currentUserId,
                email: this.email,
                newPassword: this.newPassword,
            };
            const prompt = yield this.alertCtrl.create({
                header: 'Update Profile!',
                message: "Do you agree that updated email?",
                inputs: [
                    {
                        name: 'email',
                        placeholder: 'Email',
                        value: this.email
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Confirm',
                        handler: data => {
                            if (data['email'] == this.email) {
                                this.userService
                                    .updateProfile(obj)
                                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => { }))
                                    .subscribe(_ => {
                                    if (JSON.parse(_)['success']) {
                                        this.navCtrl.navigateRoot(['login'], { replaceUrl: true });
                                    }
                                    else
                                        this.handleError('Invalid Credentials');
                                }, err => {
                                    console.log(err);
                                    this.handleError(err);
                                });
                            }
                            else {
                                return true;
                            }
                        }
                    }
                ]
            });
            yield prompt.present();
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
ProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map