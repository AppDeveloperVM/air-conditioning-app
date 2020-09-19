(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Air conditioner \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" >\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Air conditioner</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-grid class=\"fondo\">\n    <ion-row>\n    <ion-col col-xl=\"10\" col-md=\"12\" >\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"warning\" expand=\"block\">POWER</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <div id=\"screen\">\n          <div *ngIf=\"isLoading\"><ion-spinner></ion-spinner></div>\n          <div *ngIf=\"!isLoading\" color=\"primary\">\n            <ion-row > \n              <ion-col >\n                CLOCK\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col class=\"time\">\n                {{ data.time }}\n              </ion-col>\n            </ion-row>\n            <ion-row >\n              <ion-col class=\"bordered\">\n                MODE\n              </ion-col>\n              <ion-col class=\"bordered\">\n                <ion-row class=\"bordered\">\n                  <ion-col>\n                    -\n                  </ion-col>\n                </ion-row>\n                <ion-row class=\"bordered\" >\n                  <ion-col>\n                    -\n                  </ion-col>\n                  <ion-col>\n                    -\n                  </ion-col>\n                </ion-row>\n              </ion-col>\n              <ion-col class=\"bordered\">\n                FAN\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>   \n        <ion-button expand=\"block\">MODE</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\">+</ion-button>  \n      </ion-col>\n      <ion-col>\n        <ion-button expand=\"block\">FAN</ion-button>\n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      <ion-col>\n      </ion-col>\n      <ion-col>\n          <ion-button expand=\"block\">-</ion-button>\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider></ion-item-divider>\n\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col><ion-button expand=\"block\">SWING<br>LOUVER</ion-button></ion-col>\n      <ion-col><ion-button expand=\"block\">AIR FLOW<br>DIRECTION</ion-button></ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-col>\n  </ion-row>\n  </ion-grid>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/home/home-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: HomePageRoutingModule */

    /***/
    function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
        return HomePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
      }];

      var HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/home/home.module.ts":
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /*! exports provided: HomePageModule */

    /***/
    function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
        return HomePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home.page */
      "./src/app/home/home.page.ts");
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./home-routing.module */
      "./src/app/home/home-routing.module.ts");

      var HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
      })], HomePageModule);
      /***/
    },

    /***/
    "./src/app/home/home.page.scss":
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fondo {\n  background-color: black;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#screen {\n  min-height: 200px;\n  border: 2px solid blue;\n  border-radius: 4px;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\n.time {\n  text-align: center;\n  font-size: 25px;\n}\n\n.bordered {\n  border: 1px solid blue;\n}\n\n.oya {\n  display: grid;\n  height: 100%;\n  grid-template-columns: auto auto;\n  grid-template-rows: -webkit-max-content auto auto;\n  grid-template-rows: max-content auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFGRjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxzQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0VBQUEseUNBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbiNzY3JlZW4ge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOjJweCBzb2xpZCBibHVlO1xuICBib3JkZXItcmFkaXVzOjRweDtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4udGltZSB7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5ib3JkZXJlZCB7XG4gIGJvcmRlcjoxcHggc29saWQgYmx1ZTtcbn1cblxuLm95YSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgYXV0byBhdXRvO1xuXG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/home/home.page.ts":
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /*! exports provided: HomePage */

    /***/
    function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomePage", function () {
        return HomePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var HomePage = /*#__PURE__*/function () {
        function HomePage(httpClient, navCtrl) {
          var _this = this;

          _classCallCheck(this, HomePage);

          this.httpClient = httpClient;
          this.navCtrl = navCtrl;
          this.isLoading = false;
          this.isLoading = true;
          this.airData = this.httpClient.get('https://run.mocky.io/v3/967ef4af-4739-480e-96ca-239888d65b9f');
          this.airData.subscribe(function (response) {
            console.log('my data: ', response);
            _this.data = response.data;
            _this.isLoading = false;
          });
        }

        _createClass(HomePage, [{
          key: "dataExample",
          value: function dataExample() {//this.airData
          }
        }, {
          key: "getState",
          value: function getState() {
            return this.httpClient.get('');
          }
        }]);

        return HomePage;
      }();

      HomePage.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./home.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./home.page.scss */
        "./src/app/home/home.page.scss"))["default"]]
      })], HomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=home-home-module-es5.js.map