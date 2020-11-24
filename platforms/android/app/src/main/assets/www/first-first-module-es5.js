function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["first-first-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/first/first.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/first/first.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFirstFirstPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\n  <ion-grid style=\"height: 100%\">\n    <ion-row class=\"ion-justify-content-center ion-align-items-center \" style=\"height: 100%\">\n      <div class=\"holder\">\n        \n        <div class=\"the-title\">\n          <img src=\"assets/imgs/bg/logo.png\" alt=\"Logo\">\n        </div>\n\n        <div class=\"form\">\n\n          <h1 class=\"header-title\">SAFE PARK</h1>\n          \n          <div class=\"btn-holder\">\n            <ion-button expand=\"block\" class=\"light\" color=\"light\" (click)=\"goSignIn()\">\n              Sign In\n            </ion-button>\n          </div>\n\n          <div class=\"btn-holder\">\n            <ion-button expand=\"block\" class=\"btnViolet\" color=\"royal\" (click)=\"goSignUp()\">\n              Sign Up\n            </ion-button>\n          </div>\n\n        </div>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/first/first-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/first/first-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: FirstPageRoutingModule */

  /***/
  function srcAppFirstFirstRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstPageRoutingModule", function () {
      return FirstPageRoutingModule;
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


    var _first_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./first.page */
    "./src/app/first/first.page.ts");

    var routes = [{
      path: '',
      component: _first_page__WEBPACK_IMPORTED_MODULE_3__["FirstPage"]
    }];

    var FirstPageRoutingModule = function FirstPageRoutingModule() {
      _classCallCheck(this, FirstPageRoutingModule);
    };

    FirstPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FirstPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/first/first.module.ts":
  /*!***************************************!*\
    !*** ./src/app/first/first.module.ts ***!
    \***************************************/

  /*! exports provided: FirstPageModule */

  /***/
  function srcAppFirstFirstModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstPageModule", function () {
      return FirstPageModule;
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


    var _first_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./first-routing.module */
    "./src/app/first/first-routing.module.ts");
    /* harmony import */


    var _first_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./first.page */
    "./src/app/first/first.page.ts");

    var FirstPageModule = function FirstPageModule() {
      _classCallCheck(this, FirstPageModule);
    };

    FirstPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _first_routing_module__WEBPACK_IMPORTED_MODULE_5__["FirstPageRoutingModule"]],
      declarations: [_first_page__WEBPACK_IMPORTED_MODULE_6__["FirstPage"]]
    })], FirstPageModule);
    /***/
  },

  /***/
  "./src/app/first/first.page.scss":
  /*!***************************************!*\
    !*** ./src/app/first/first.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppFirstFirstPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: none;\n  background-image: url('first.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  font-family: monospace !important;\n}\nion-content .holder {\n  width: 100%;\n  margin-top: -50px;\n}\nion-content .holder .btns-holder {\n  margin-top: 40px;\n}\nion-content .holder .btns-holder ion-button {\n  height: 3rem !important;\n  margin: 0 20px;\n}\nion-content .holder img {\n  max-width: 150px !important;\n}\nion-content .the-title {\n  max-width: 50%;\n  margin: auto;\n  text-align: center;\n}\n.form {\n  margin: 0px 50px;\n}\nion-button {\n  height: 3rem !important;\n  margin: 0 50px;\n  margin-top: 30px;\n}\n.sign-up-btn {\n  background-color: #3c63ff;\n}\n.sign-in-btn {\n  background-color: #ffffff;\n}\n.header-title {\n  color: white;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlyc3QvRTpcXHdvcmtfZGF0YVxcSFNIXFxKT0JTXFxBeWF6dXJyZWhtYW5cXFNhZmVQYXJrXFxBcHAvc3JjXFxhcHBcXGZpcnN0XFxmaXJzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZpcnN0L2ZpcnN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtBQ0FKO0FERUk7RUFFSSxXQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREVRO0VBRUksZ0JBQUE7QUNEWjtBREdZO0VBRUksdUJBQUE7RUFDQSxjQUFBO0FDRmhCO0FETVE7RUFDSSwyQkFBQTtBQ0paO0FEUUk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTlI7QURVQTtFQUNJLGdCQUFBO0FDUEo7QURVQTtFQUVJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUko7QURXQTtFQUNJLHlCQUFBO0FDUko7QURXQTtFQUNJLHlCQUFBO0FDUko7QURXQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ1JKIiwiZmlsZSI6InNyYy9hcHAvZmlyc3QvZmlyc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQgXHJcbntcclxuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvYmcvZmlyc3QucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyBcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLmhvbGRlclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgICAgIC5idG5zLWhvbGRlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1idXR0b24gXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRoZS10aXRsZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBtYXJnaW46IDBweCA1MHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIFxyXG57XHJcbiAgICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCA1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnNpZ24tdXAtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYzYzZmY7XHJcbn1cclxuXHJcbi5zaWduLWluLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9iZy9maXJzdC5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuaG9sZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IC01MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciAuYnRucy1ob2xkZXIge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuaW9uLWNvbnRlbnQgLmhvbGRlciAuYnRucy1ob2xkZXIgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogM3JlbSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgMjBweDtcbn1cbmlvbi1jb250ZW50IC5ob2xkZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnRoZS10aXRsZSB7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW46IDBweCA1MHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAzcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCA1MHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uc2lnbi11cC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M2M2ZmO1xufVxuXG4uc2lnbi1pbi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/first/first.page.ts":
  /*!*************************************!*\
    !*** ./src/app/first/first.page.ts ***!
    \*************************************/

  /*! exports provided: FirstPage */

  /***/
  function srcAppFirstFirstPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstPage", function () {
      return FirstPage;
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

    var FirstPage = /*#__PURE__*/function () {
      function FirstPage(navCtrl, router, loadingCtrl, toastCtrl) {
        _classCallCheck(this, FirstPage);

        this.navCtrl = navCtrl;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
      }

      _createClass(FirstPage, [{
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
        key: "goSignUp",
        value: function goSignUp() {
          this.router.navigate(['/sign-up'], {
            replaceUrl: true,
            skipLocationChange: true,
            preserveFragment: true
          });
        }
      }]);

      return FirstPage;
    }();

    FirstPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    FirstPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-first',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./first.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/first/first.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./first.page.scss */
      "./src/app/first/first.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])], FirstPage);
    /***/
  }
}]);
//# sourceMappingURL=first-first-module-es5.js.map