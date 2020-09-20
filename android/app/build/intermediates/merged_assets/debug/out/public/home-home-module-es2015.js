(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/device-controller/device-controller.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/device-controller/device-controller.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid id=\"container\" class=\"fondo\">\n  <ion-row>\n  <ion-col col-xl=\"10\" col-md=\"12\" >\n  <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <ion-button color=\"warning\" expand=\"block\"><ion-icon name=\"power\"></ion-icon > </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <div id=\"screen\">\n        <div *ngIf=\"isLoading\"><ion-spinner></ion-spinner></div>\n        <div *ngIf=\"!isLoading\" color=\"primary\">\n\n          <app-screen [data]=\"data\"></app-screen>\n          \n          </div>\n        </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>   \n      <ion-button expand=\"block\">MODE</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"tempUp()\">+</ion-button>  \n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"block\">FAN</ion-button>\n    </ion-col>\n    \n  </ion-row>\n  <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n        <ion-button expand=\"block\" color=\"secondary\" (click)=\"tempDown()\">-</ion-button>\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col><ion-button expand=\"block\">SWING<br>LOUVER</ion-button></ion-col>\n    <ion-col><ion-button expand=\"block\">AIR FLOW<br>DIRECTION</ion-button></ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n</ion-col>\n</ion-row>\n</ion-grid>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/screen/screen.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/screen/screen.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <ion-row class=\"full_height\"> \r\n      <ion-col >\r\n        CLOCK\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row >\r\n      <ion-col class=\"time\">\r\n        <span *ngIf=\"time\">{{ time }}</span>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row >\r\n      <ion-col class=\"bordered\">\r\n        MODE\r\n      </ion-col>\r\n      <ion-col class=\"bordered no_padding\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <div *ngIf=\"temp\"><span #temperature>{{ temp }}</span> ºC</div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"top-border\" >\r\n          <ion-col class=\"middle-border\"> \r\n            -\r\n          </ion-col>\r\n          <ion-col>\r\n            -\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n      <ion-col class=\"bordered\">\r\n        FAN\r\n      </ion-col>\r\n    </ion-row>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Air conditioner \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" >\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Air conditioner</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-grid id=\"container\" class=\"fondo\">\r\n    <ion-row>\r\n    <ion-col col-xl=\"10\" col-md=\"12\" >\r\n    <ion-row>\r\n      <ion-col>\r\n      </ion-col>\r\n      <ion-col>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"warning\" expand=\"block\"><ion-icon name=\"power\"></ion-icon > </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div id=\"screen\">\r\n          <div *ngIf=\"isLoading\"><ion-spinner></ion-spinner></div>\r\n          <div *ngIf=\"!isLoading\" color=\"primary\">\r\n  \r\n            <ion-row class=\"full_height\"> \r\n              <ion-col >\r\n                CLOCK\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row >\r\n              <ion-col class=\"time\">\r\n                <span *ngIf=\"time\">{{ time }}</span>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"bottom_row\">\r\n              <ion-col class=\"bordered mode_list\">\r\n                <div [hidden]=standard_mode class=\"standard_mode\">    \r\n                  STANDARD             \r\n                </div>\r\n                <div [hidden]=heat_mode class=\"heat_mode\">\r\n                  HEAT\r\n                </div>\r\n                <div [hidden]=cold_mode class=\"cold_mode\">\r\n                  COLD\r\n                </div>\r\n              </ion-col>\r\n              <ion-col class=\"bordered no_padding\">\r\n                <ion-row class=\"general_row\">\r\n                  <ion-col>\r\n                    <div *ngIf=\"temp\"><span #temperature>{{ temp }}</span> ºC</div>\r\n                    <div class=\"swing_air\">\r\n                      <div [hidden]=swing class=\"swing\"><ion-icon name=\"swap-vertical-outline\"></ion-icon></div>\r\n                      <div [hidden]=air_flow class=\"air_flow\"><ion-icon name=\"help-buoy-outline\"></ion-icon></div>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"setters_row top-border\" >\r\n                  <ion-col class=\"middle-border\" >  \r\n                    <div >-</div>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <div >-</div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col class=\"bordered\">\r\n                FAN\r\n              </ion-col>\r\n            </ion-row>\r\n            \r\n            </div>\r\n          </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>   \r\n        <ion-button expand=\"block\" (click)=\"setMode()\">MODE</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"tempUp()\">+</ion-button>  \r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\">FAN</ion-button>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-button expand=\"block\" color=\"secondary\" (click)=\"tempDown()\">-</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-item-divider></ion-item-divider>\r\n  \r\n    <ion-row>\r\n      <ion-col></ion-col>\r\n      <ion-col><ion-button expand=\"block\" (click)=\"setSwing()\">SWING<br>LOUVER</ion-button></ion-col>\r\n      <ion-col><ion-button expand=\"block\" (click)=\"setAirFlow()\">AIR FLOW<br>DIRECTION</ion-button></ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/components/device-controller/device-controller.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/device-controller/device-controller.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV2aWNlLWNvbnRyb2xsZXIvZGV2aWNlLWNvbnRyb2xsZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/device-controller/device-controller.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/device-controller/device-controller.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DeviceControllerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceControllerComponent", function() { return DeviceControllerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DeviceControllerComponent = class DeviceControllerComponent {
    constructor(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.temp = 0;
        this.isLoading = false;
        this.isLoading = true;
        // parseInt(this.data.temp);
        this.temp = 20;
        this.isLoading = false;
    }
    tempUp() {
        let newTemp;
        newTemp = this.temp++;
        this.data.temp = newTemp;
        console.log('temp:' + this.temp);
        return newTemp;
    }
    tempDown() {
        let newTemp = 0;
        newTemp = this.temp--;
        console.log('temp:' + this.temp);
        return newTemp;
    }
};
DeviceControllerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DeviceControllerComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
DeviceControllerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-controller',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./device-controller.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/device-controller/device-controller.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./device-controller.component.scss */ "./src/app/components/device-controller/device-controller.component.scss")).default]
    })
], DeviceControllerComponent);



/***/ }),

/***/ "./src/app/components/screen/screen.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/screen/screen.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#screen {\n  border: 2px solid blue;\n  border-radius: 4px;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\n.time {\n  text-align: center;\n  font-size: 25px;\n}\n\n.full_height {\n  height: 100%;\n}\n\n.no_padding {\n  padding: 0;\n}\n\n.bordered {\n  border: 1px solid blue;\n}\n\n.top-border {\n  border-top: 1px solid blue;\n}\n\n.middle-border {\n  border-right: 1px solid blue;\n}\n\n.heat {\n  background-color: darkred;\n}\n\n.cold {\n  background-color: darkblue;\n}\n\n.oya {\n  display: grid;\n  height: 100%;\n  grid-template-columns: auto auto;\n  grid-template-rows: -webkit-max-content auto auto;\n  grid-template-rows: max-content auto auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY3JlZW4vc2NyZWVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksc0JBQUE7RUFDQSxrQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7QUFBSjs7QUFHRTtFQUNFLHNCQUFBO0FBQUo7O0FBR0U7RUFDRSwwQkFBQTtBQUFKOztBQUVFO0VBQ0UsNEJBQUE7QUFDSjs7QUFHRTtFQUNFLHlCQUFBO0FBQUo7O0FBR0U7RUFDRSwwQkFBQTtBQUFKOztBQUdFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0VBQUEseUNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2NyZWVuL3NjcmVlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzY3JlZW4ge1xyXG4gICAgLy9taW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmx1ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xyXG4gIH1cclxuICBcclxuICAuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAudGltZSB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmZ1bGxfaGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm5vX3BhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLmJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgLnRvcC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgYmx1ZTtcclxuICB9XHJcbiAgLm1pZGRsZS1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCBibHVlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuaGVhdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG4gIH1cclxuICBcclxuICAuY29sZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcclxuICB9XHJcbiAgXHJcbiAgLm95YSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IGF1dG8gYXV0bztcclxuICBcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "./src/app/components/screen/screen.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/screen/screen.component.ts ***!
  \*******************************************************/
/*! exports provided: ScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenComponent", function() { return ScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ScreenComponent = class ScreenComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.data = [];
        // this.data.temp
        // parseInt(20,10)
        this.temp = this.data.temp;
        this.time = this.data.time;
    }
    ngAfterViewInit() {
        const TempEl = this.temperature.nativeElement;
    }
};
ScreenComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
ScreenComponent.propDecorators = {
    temperature: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['temperature', { static: false },] }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ScreenComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-screen',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/screen/screen.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./screen.component.scss */ "./src/app/components/screen/screen.component.scss")).default]
    })
], ScreenComponent);



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared/shared.module */ "./src/app/shared/shared/shared.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  background-color: black;\n}\n\n#container {\n  height: 100%;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#screen {\n  border: 2px solid blue;\n  border-radius: 4px;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\n.time {\n  text-align: center;\n  font-size: 25px;\n}\n\n.full_height {\n  height: 100%;\n}\n\n.no_padding {\n  padding: 0;\n}\n\n.bordered {\n  border: 1px solid blue;\n}\n\n.top-border {\n  border-top: 1px solid blue;\n}\n\n.middle-border {\n  border-right: 1px solid blue;\n}\n\n.bottom_row {\n  height: 100px;\n}\n\n.heat {\n  background-color: darkred;\n}\n\n.cold {\n  background-color: darkblue;\n}\n\n.mode_list {\n  height: 100%;\n  padding: 3px;\n}\n\n.standard_mode {\n  display: block;\n  height: 20px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.heat_mode {\n  display: block;\n  height: 20px;\n  margin: 0;\n  margin-top: 18px;\n}\n\n.cold_mode {\n  display: block;\n  height: 20px;\n  margin: 0px;\n  margin-top: 40px;\n}\n\n.general_row {\n  height: auto;\n}\n\n.swing_air div {\n  display: inline-block;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.swing_air .swing {\n  position: absolute;\n  margin-left: 1px;\n}\n\n.swing_air .air_flow {\n  position: absolute;\n  margin-left: 20px;\n}\n\n.setters_row {\n  height: 20px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 30vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGOztBQU1BO0VBRUUsc0JBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSwwQkFBQTtBQUpGOztBQU1BO0VBQ0UsNEJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSwwQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9uZG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI2NvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuXG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI3NjcmVlbiB7XG4gIC8vbWluLWhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjoycHggc29saWQgYmx1ZTtcbiAgYm9yZGVyLXJhZGl1czo0cHg7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnRpbWUge1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZnVsbF9oZWlnaHQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ub19wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJvcmRlcmVkIHtcbiAgYm9yZGVyOjFweCBzb2xpZCBibHVlO1xufVxuXG4udG9wLWJvcmRlciB7XG4gIGJvcmRlci10b3A6MXB4IHNvbGlkIGJsdWU7XG59XG4ubWlkZGxlLWJvcmRlciB7XG4gIGJvcmRlci1yaWdodDoxcHggc29saWQgYmx1ZTtcbn1cblxuLmJvdHRvbV9yb3d7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5oZWF0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcbn1cblxuLmNvbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcbn1cblxuLm1vZGVfbGlzdHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOjNweDtcbn1cblxuLnN0YW5kYXJkX21vZGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuLmhlYXRfbW9kZXtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOjA7XG4gIG1hcmdpbi10b3A6MThweDtcbn1cbi5jb2xkX21vZGV7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjowcHg7XG4gIG1hcmdpbi10b3A6NDBweDtcbn1cblxuLmdlbmVyYWxfcm93e1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5zd2luZ19haXIgZGl2e1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OjFweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcHg7XG59XG5cbi5zd2luZ19haXIgLnN3aW5nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMXB4O1xufVxuXG4uc3dpbmdfYWlyIC5haXJfZmxvd3tcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLnNldHRlcnNfcm93e1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMzB2aDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_air_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/air-data.service */ "./src/app/services/air-data.service.ts");





let HomePage = class HomePage {
    constructor(airdataService, httpClient, navCtrl, alertCtrl) {
        this.airdataService = airdataService;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.isLoading = false;
        this.data = [];
        this.updatedData = [];
        this.time = '00:00';
        this.temp = 0;
        this.Mode = ['Heat', 'Cold', 'Standard']; //modes
        this.fan = [];
        //hide div = boolean
        this.standard_mode = true;
        this.heat_mode = true;
        this.cold_mode = true;
        this.swing = true;
        this.air_flow = true;
        this.isLoading = true;
        this.airData = this.httpClient.get('https://run.mocky.io/v3/967ef4af-4739-480e-96ca-239888d65b9f');
        this.airData
            .subscribe(response => {
            console.log('my data: ', response);
            this.data = response.data;
            this.isLoading = false;
            this.updatedData = this.data;
            this.setTime();
            this.setTemp();
            this.setMode();
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.airSubscription = this.airdataService
            .getAirConditioner(this.brand, this.model)
            .subscribe(device => {
            this.device = device;
            this.isLoading = false;
        }, error => {
            this.alertCtrl
                .create({
                header: 'An error ocurred!',
                message: 'Could not load data. Try again later.',
                buttons: [{
                        text: 'Okay',
                    }]
            }).then(alertEl => {
                alertEl.present();
            });
        });
    }
    setTime() {
        this.time = this.updatedData.time;
        console.log('time:' + this.time);
    }
    setTemp() {
        this.temp = this.updatedData.temp;
        console.log('temp:' + this.temp);
    }
    tempUp() {
        let newTemp;
        newTemp = this.temp++;
        this.updatedData.temp = newTemp;
        console.log('temp:' + newTemp);
        return newTemp;
    }
    tempDown() {
        let newTemp;
        newTemp = this.temp--;
        this.updatedData.temp = newTemp;
        console.log('temp:' + this.temp);
        return newTemp;
    }
    setMode() {
        let mode_i;
        mode_i = this.mode_index;
        console.log("mode value:" + mode_i);
        if (isNaN(mode_i)) {
            mode_i = 0;
        }
        if (mode_i > 2) {
            mode_i = 0;
        }
        console.log("mode value:" + mode_i);
        switch (mode_i) {
            case 0:
                this.standard_mode = false;
                this.heat_mode = true;
                this.cold_mode = true;
                break;
            case 1:
                this.standard_mode = true;
                this.heat_mode = false;
                this.cold_mode = true;
                break;
            case 2:
                this.standard_mode = true;
                this.heat_mode = true;
                this.cold_mode = false;
                break;
        }
        mode_i++;
        this.mode_index = mode_i;
    }
    setFan() {
        let mode_i;
        mode_i = this.mode_index;
        console.log("mode value:" + mode_i);
        if (isNaN(mode_i)) {
            mode_i = 0;
        }
        if (mode_i > 2) {
            mode_i = 0;
        }
        console.log("mode value:" + mode_i);
        switch (mode_i) {
            case 0:
                this.standard_mode = false;
                this.heat_mode = true;
                this.cold_mode = true;
                break;
            case 1:
                this.standard_mode = true;
                this.heat_mode = false;
                this.cold_mode = true;
                break;
            case 2:
                this.standard_mode = true;
                this.heat_mode = true;
                this.cold_mode = false;
                break;
        }
        mode_i++;
        this.mode_index = mode_i;
    }
    setSwing() {
        if (this.swing) {
            this.swing = false;
        }
        else {
            this.swing = true;
        }
        console.log('swing: ' + this.swing);
    }
    setAirFlow() {
        if (this.air_flow) {
            this.air_flow = false;
        }
        else {
            this.air_flow = true;
        }
        console.log('air flow: ' + this.air_flow);
    }
    getState() {
        return this.httpClient.get('');
    }
    ngOnDestroy() {
        if (this.airSubscription) {
            this.airSubscription.unsubscribe();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_air_data_service__WEBPACK_IMPORTED_MODULE_4__["AirDataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ }),

/***/ "./src/app/services/air-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/air-data.service.ts ***!
  \**********************************************/
/*! exports provided: AirDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirDataService", function() { return AirDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AirDataService = class AirDataService {
    constructor() {
        this._airConditioners = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    get airconditioners() {
        return this._airConditioners.asObservable();
    }
    getAirConditioner(brand, model) {
        return this._airConditioners.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(airconditioners => {
            return Object.assign({}, airconditioners.find(a => a.brand === brand, a => a.model === model));
        }));
    }
    fetchAirConditioners() {
        /*return this.http
            .get<{ [key: string]: CosplayGroupData}>(
                `https://cosplay-planning-app.firebaseio.com/cosplay-groups.json?orderBy="userId"&equalTo="${
                this.authService.userId
                }"`
            )
            .pipe(
                map(CosplayGroupData => {
                    const cosplayGroups = [];
                    for (const key in CosplayGroupData) {
                        if (CosplayGroupData.hasOwnProperty(key)) {
                            cosplayGroups.push(new CosplayGroup(
                                key,
                                CosplayGroupData[key].title,
                                CosplayGroupData[key].series,
                                CosplayGroupData[key].imageUrl,
                                CosplayGroupData[key].place,
                                new Date(CosplayGroupData[key].availableFrom),
                                new Date(CosplayGroupData[key].availableTo),
                                CosplayGroupData[key].userId,
                                CosplayGroupData[key].location
                                )
                            );
                        }
                    }
                    return cosplayGroups;
                }), tap(cosplaygroups => {
                    this._cosplaygroups.next(cosplaygroups);
                })
            );*/
    }
};
AirDataService.ctorParameters = () => [];
AirDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AirDataService);



/***/ }),

/***/ "./src/app/shared/shared/shared.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/shared/shared.module.ts ***!
  \************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_screen_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/screen/screen.component */ "./src/app/components/screen/screen.component.ts");
/* harmony import */ var src_app_components_device_controller_device_controller_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/device-controller/device-controller.component */ "./src/app/components/device-controller/device-controller.component.ts");






let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_components_device_controller_device_controller_component__WEBPACK_IMPORTED_MODULE_5__["DeviceControllerComponent"], src_app_components_screen_screen_component__WEBPACK_IMPORTED_MODULE_4__["ScreenComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
        ],
        exports: [src_app_components_device_controller_device_controller_component__WEBPACK_IMPORTED_MODULE_5__["DeviceControllerComponent"], src_app_components_screen_screen_component__WEBPACK_IMPORTED_MODULE_4__["ScreenComponent"]],
        entryComponents: [src_app_components_device_controller_device_controller_component__WEBPACK_IMPORTED_MODULE_5__["DeviceControllerComponent"], src_app_components_screen_screen_component__WEBPACK_IMPORTED_MODULE_4__["ScreenComponent"]]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map