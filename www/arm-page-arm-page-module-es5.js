function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["arm-page-arm-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/arm-page/arm-page.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/arm-page/arm-page.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppArmPageArmPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <!-- fab placed to the bottom end -->  \n  <ion-fab vertical=\"top\" horizontal=\"start\" slot=\"fixed\">  \n    <ion-fab-button (click)=\"goDashboardPage()\">  \n      <ion-icon name=\"arrow-undo-circle-sharp\"></ion-icon>  \n    </ion-fab-button>  \n  </ion-fab>  \n      \n  <ion-list style=\"margin-top: 20px;\">\n    <ion-list-header>\n      <ion-label>\n        <h1 style=\"text-align: center;\">Arm / Disarm setting</h1>\n      </ion-label>\n    </ion-list-header>\n\n  </ion-list>\n\n  <ion-list *ngFor=\"let item of allDevices\">\n\n    <ion-item *ngIf=\"item.isArm == 1\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-toggle color=\"secondary\" checked (ionChange)=\"checkState(item.id, $event.target.checked)\"></ion-toggle>\n    </ion-item>\n\n    <ion-item *ngIf=\"item.isArm == 0\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-toggle color=\"secondary\"  (ionChange)=\"checkState(item.id, $event.target.checked)\"></ion-toggle>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/arm-page/arm-page-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/arm-page/arm-page-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: ArmPagePageRoutingModule */

  /***/
  function srcAppArmPageArmPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArmPagePageRoutingModule", function () {
      return ArmPagePageRoutingModule;
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


    var _arm_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./arm-page.page */
    "./src/app/arm-page/arm-page.page.ts");

    var routes = [{
      path: '',
      component: _arm_page_page__WEBPACK_IMPORTED_MODULE_3__["ArmPagePage"]
    }];

    var ArmPagePageRoutingModule = function ArmPagePageRoutingModule() {
      _classCallCheck(this, ArmPagePageRoutingModule);
    };

    ArmPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ArmPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/arm-page/arm-page.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/arm-page/arm-page.module.ts ***!
    \*********************************************/

  /*! exports provided: ArmPagePageModule */

  /***/
  function srcAppArmPageArmPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArmPagePageModule", function () {
      return ArmPagePageModule;
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


    var _arm_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./arm-page-routing.module */
    "./src/app/arm-page/arm-page-routing.module.ts");
    /* harmony import */


    var _arm_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./arm-page.page */
    "./src/app/arm-page/arm-page.page.ts");

    var ArmPagePageModule = function ArmPagePageModule() {
      _classCallCheck(this, ArmPagePageModule);
    };

    ArmPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _arm_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArmPagePageRoutingModule"]],
      declarations: [_arm_page_page__WEBPACK_IMPORTED_MODULE_6__["ArmPagePage"]]
    })], ArmPagePageModule);
    /***/
  },

  /***/
  "./src/app/arm-page/arm-page.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/arm-page/arm-page.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppArmPageArmPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Set the width to the full container and center the content */\nion-select {\n  width: 100%;\n  justify-content: center;\n}\n/* Set the flex in order to size the text width to its content */\nion-select::part(placeholder),\nion-select::part(text) {\n  flex: 0 0 auto;\n}\n/* Set the placeholder color and opacity */\nion-select::part(placeholder) {\n  color: #20a08a;\n  opacity: 1;\n}\n/*\n * Set the font of the first letter of the placeholder\n * Shadow parts work with pseudo-elements, too!\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements\n */\nion-select::part(placeholder)::first-letter {\n  font-size: 24px;\n  font-weight: 500;\n}\n/* Set the text color */\nion-select::part(text) {\n  color: #545ca7;\n}\n/* Set the icon color and opacity */\nion-select::part(icon) {\n  color: #971e49;\n  opacity: 1;\n}\nion-toggle {\n  --background: #444444;\n  --background-checked: rgb(0, 219, 248);\n  --handle-background: #ffffff;\n  --handle-background-checked: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJtLXBhZ2UvRTpcXHdvcmtfZGF0YVxcSFNIXFxKT0JTXFxBeWF6dXJyZWhtYW5cXFNhZmVQYXJrXFxBcHAvc3JjXFxhcHBcXGFybS1wYWdlXFxhcm0tcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FybS1wYWdlL2FybS1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrREFBQTtBQUNBO0VBQ0ksV0FBQTtFQUVBLHVCQUFBO0FDQUo7QURHRSxnRUFBQTtBQUNBOztFQUVFLGNBQUE7QUNBSjtBREdFLDBDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsVUFBQTtBQ0FKO0FER0U7Ozs7RUFBQTtBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRSx1QkFBQTtBQUNBO0VBQ0UsY0FBQTtBQ0FKO0FER0UsbUNBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FDQUo7QURHRTtFQUNFLHFCQUFBO0VBQ0Esc0NBQUE7RUFFQSw0QkFBQTtFQUNBLG9DQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hcm0tcGFnZS9hcm0tcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZXQgdGhlIHdpZHRoIHRvIHRoZSBmdWxsIGNvbnRhaW5lciBhbmQgY2VudGVyIHRoZSBjb250ZW50ICovXHJcbmlvbi1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cclxuICBpb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSxcclxuICBpb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAvKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChwbGFjZWhvbGRlcikge1xyXG4gICAgY29sb3I6ICMyMGEwOGE7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICBcclxuICAvKlxyXG4gICAqIFNldCB0aGUgZm9udCBvZiB0aGUgZmlyc3QgbGV0dGVyIG9mIHRoZSBwbGFjZWhvbGRlclxyXG4gICAqIFNoYWRvdyBwYXJ0cyB3b3JrIHdpdGggcHNldWRvLWVsZW1lbnRzLCB0b28hXHJcbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xyXG4gICAqL1xyXG4gIGlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpOjpmaXJzdC1sZXR0ZXIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSB0ZXh0IGNvbG9yICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XHJcbiAgICBjb2xvcjogIzU0NWNhNztcclxuICB9XHJcbiAgXHJcbiAgLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXHJcbiAgaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XHJcbiAgICBjb2xvcjogIzk3MWU0OTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBpb24tdG9nZ2xlIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzQ0NDQ0NDtcclxuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2IoMCwgMjE5LCAyNDgpO1xyXG4gIFxyXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogIzQ0NDQ0NDtcclxuICB9IiwiLyogU2V0IHRoZSB3aWR0aCB0byB0aGUgZnVsbCBjb250YWluZXIgYW5kIGNlbnRlciB0aGUgY29udGVudCAqL1xuaW9uLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogU2V0IHRoZSBmbGV4IGluIG9yZGVyIHRvIHNpemUgdGhlIHRleHQgd2lkdGggdG8gaXRzIGNvbnRlbnQgKi9cbmlvbi1zZWxlY3Q6OnBhcnQocGxhY2Vob2xkZXIpLFxuaW9uLXNlbGVjdDo6cGFydCh0ZXh0KSB7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4vKiBTZXQgdGhlIHBsYWNlaG9sZGVyIGNvbG9yIGFuZCBvcGFjaXR5ICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKSB7XG4gIGNvbG9yOiAjMjBhMDhhO1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKlxuICogU2V0IHRoZSBmb250IG9mIHRoZSBmaXJzdCBsZXR0ZXIgb2YgdGhlIHBsYWNlaG9sZGVyXG4gKiBTaGFkb3cgcGFydHMgd29yayB3aXRoIHBzZXVkby1lbGVtZW50cywgdG9vIVxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL1BzZXVkby1lbGVtZW50c1xuICovXG5pb24tc2VsZWN0OjpwYXJ0KHBsYWNlaG9sZGVyKTo6Zmlyc3QtbGV0dGVyIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiBTZXQgdGhlIHRleHQgY29sb3IgKi9cbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBjb2xvcjogIzU0NWNhNztcbn1cblxuLyogU2V0IHRoZSBpY29uIGNvbG9yIGFuZCBvcGFjaXR5ICovXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgY29sb3I6ICM5NzFlNDk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbmlvbi10b2dnbGUge1xuICAtLWJhY2tncm91bmQ6ICM0NDQ0NDQ7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2IoMCwgMjE5LCAyNDgpO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM0NDQ0NDQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/arm-page/arm-page.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/arm-page/arm-page.page.ts ***!
    \*******************************************/

  /*! exports provided: ArmPagePage */

  /***/
  function srcAppArmPageArmPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArmPagePage", function () {
      return ArmPagePage;
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
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _api_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../api/user.service */
    "./src/app/api/user.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts"); //Api


    var ArmPagePage = /*#__PURE__*/function () {
      function ArmPagePage(alertCtrl, modalCtrl, authService, router, navCtrl, userService, translate, loadingCtrl) {
        _classCallCheck(this, ArmPagePage);

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

      _createClass(ArmPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getAllDevices",
        value: function getAllDevices() {
          var _this = this;

          this.userService.getAllDevices(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            _this.allDevices = res;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "getUserData",
        value: function getUserData() {
          var _this2 = this;

          this.userService.getUserData(this.currentUserId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            if (res['status']) {
              _this2.user = res['user'];
            }
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "goDashboardPage",
        value: function goDashboardPage() {
          this.navCtrl.navigateRoot(['dashboard'], {
            replaceUrl: true
          });
        }
      }, {
        key: "checkState",
        value: function checkState(id, checked) {
          if (checked == true) {
            this.state = 1;
          } else {
            this.state = 0;
          }

          this.reqData['vehicleId'] = id;
          this.reqData['isArm'] = this.state;
          this.userService.updateArm(this.reqData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {})).subscribe(function (res) {
            if (res['status']) {}
          }, function (err) {
            console.log(err);
          });
        }
      }]);

      return ArmPagePage;
    }();

    ArmPagePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    ArmPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-arm-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./arm-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/arm-page/arm-page.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./arm-page.page.scss */
      "./src/app/arm-page/arm-page.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _api_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])], ArmPagePage);
    /***/
  }
}]);
//# sourceMappingURL=arm-page-arm-page-module-es5.js.map