(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/device-controller/device-controller.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/device-controller/device-controller.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid id=\"container\" class=\"fondo\">\r\n  <ion-row>\r\n  <ion-col col-xl=\"10\" col-md=\"12\" >\r\n  <ion-row>\r\n    <ion-col>\r\n    </ion-col>\r\n    <ion-col>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"warning\" expand=\"block\"><ion-icon name=\"power\"></ion-icon > </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <div id=\"screen\">\r\n        <div *ngIf=\"isLoading\"><ion-spinner></ion-spinner></div>\r\n        <div *ngIf=\"!isLoading\" color=\"primary\">\r\n\r\n          <app-screen [data]=\"data\"></app-screen>\r\n          \r\n          </div>\r\n        </div>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>   \r\n      <ion-button expand=\"block\">MODE</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" color=\"danger\" (click)=\"tempUp()\">+</ion-button>  \r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button expand=\"block\">FAN</ion-button>\r\n    </ion-col>\r\n    \r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n    </ion-col>\r\n    <ion-col>\r\n        <ion-button expand=\"block\" color=\"secondary\" (click)=\"tempDown()\">-</ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-item-divider></ion-item-divider>\r\n\r\n  <ion-row>\r\n    <ion-col></ion-col>\r\n    <ion-col><ion-button expand=\"block\">SWING<br>LOUVER</ion-button></ion-col>\r\n    <ion-col><ion-button expand=\"block\">AIR FLOW<br>DIRECTION</ion-button></ion-col>\r\n    <ion-col></ion-col>\r\n  </ion-row>\r\n</ion-col>\r\n</ion-row>\r\n</ion-grid>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>\r\n      Air conditioner \r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\" >\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Air conditioner</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-grid id=\"container\" class=\"fondo\">\r\n    <ion-row>\r\n    <ion-col col-xl=\"10\" col-md=\"12\" >\r\n    <ion-row>\r\n      <ion-col>\r\n      </ion-col>\r\n      <ion-col>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"warning\" expand=\"block\"><ion-icon name=\"power\"></ion-icon > </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div id=\"screen\">\r\n          <div *ngIf=\"isLoading\"><ion-spinner></ion-spinner></div>\r\n          <div *ngIf=\"!isLoading\" color=\"primary\">\r\n  \r\n            <ion-row class=\"full_height\"> \r\n              <ion-col >\r\n                CLOCK\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row >\r\n              <ion-col class=\"time\">\r\n                <span *ngIf=\"time\">{{ time }}</span>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-row class=\"bottom_row\">\r\n              <ion-col class=\"bordered mode_list\">\r\n                <div [hidden]=standardMode class=\"standard_mode\">    \r\n                  STANDARD             \r\n                </div>\r\n                <div [hidden]=heatMode class=\"heat_mode\">\r\n                  HEAT\r\n                </div>\r\n                <div [hidden]=coldMode class=\"cold_mode\">\r\n                  COLD\r\n                </div>\r\n              </ion-col>\r\n              <ion-col class=\"bordered no_padding\">\r\n                <ion-row class=\"general_row\">\r\n                  <ion-col>\r\n                    <div *ngIf=\"temp\"><span #temperature>{{ temp }}</span> ºC</div>\r\n                    <div class=\"swing_air\">\r\n                      <div [hidden]=swing class=\"swing\"><ion-icon name=\"swap-vertical-outline\"></ion-icon></div>\r\n                      <div [hidden]=airFlow class=\"air_flow\"><ion-icon name=\"help-buoy-outline\"></ion-icon></div>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row class=\"setters_row top-border\" >\r\n                  <ion-col class=\"middle-border\" >  \r\n                    <div >-</div>\r\n                  </ion-col>\r\n                  <ion-col>\r\n                    <div >-</div>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-col>\r\n              <ion-col class=\"bordered\">\r\n                <div> </div>\r\n                <div class=\"fanSpin\">\r\n                  <div><fa-icon [icon]=\"['fas', 'fan']\" transform=\"shrink-6 right-4\"></fa-icon></div>\r\n                  <div><fa-icon [icon]=\"['fas', 'fan']\" transform=\"shrink-4 right-4\"></fa-icon></div>\r\n                  <div><fa-icon [icon]=\"['fas', 'fan']\" transform=\"shrink-2 right-4\"></fa-icon></div>\r\n                  <div><fa-icon [icon]=\"['fas', 'fan']\" transform=\"right-4\"></fa-icon></div>\r\n                </div>\r\n                <div class=\"levels\">\r\n                  <div><fa-icon class=\"fan1\" [icon]=\"['fas', 'ruler-horizontal']\" transform=\"\" [hidden]=fan1></fa-icon></div>\r\n                  <div><fa-icon class=\"fan2\" [icon]=\"['fas', 'ruler-horizontal']\" transform=\"grow-1\" [hidden]=fan2></fa-icon></div>\r\n                  <div><fa-icon class=\"fan3\" [icon]=\"['fas', 'ruler-horizontal']\" transform=\"grow-2\" [hidden]=fan3></fa-icon></div>\r\n                  <div><fa-icon class=\"fan4\" [icon]=\"['fas', 'ruler-horizontal']\" transform=\"grow-3\" [hidden]=fan4></fa-icon></div>\r\n                </div>\r\n              </ion-col>\r\n            </ion-row>\r\n            \r\n            </div>\r\n          </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>   \r\n        <ion-button expand=\"block\" (click)=\"setMode()\">MODE</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" color=\"danger\" (click)=\"tempUp()\">+</ion-button>  \r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button expand=\"block\" (click)=\"setFanSpeed()\">FAN</ion-button>\r\n      </ion-col>\r\n      \r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n      </ion-col>\r\n      <ion-col>\r\n          <ion-button expand=\"block\" color=\"secondary\" (click)=\"tempDown()\">-</ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-item-divider></ion-item-divider>\r\n  \r\n    <ion-row>\r\n      <ion-col></ion-col>\r\n      <ion-col><ion-button expand=\"block\" (click)=\"setSwing()\">SWING<br>LOUVER</ion-button></ion-col>\r\n      <ion-col><ion-button expand=\"block\" (click)=\"setAirFlow()\">AIR FLOW<br>DIRECTION</ion-button></ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n  </ion-col>\r\n  </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

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
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"],
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
/* harmony default export */ __webpack_exports__["default"] = (".fondo {\n  background-color: black;\n}\n\n#container {\n  height: 100%;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#screen {\n  border: 2px solid blue;\n  border-radius: 4px;\n}\n\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\n.time {\n  text-align: center;\n  font-size: 25px;\n}\n\n.full_height {\n  height: 100%;\n}\n\n.no_padding {\n  padding: 0;\n}\n\n.bordered {\n  border: 1px solid blue;\n}\n\n.top-border {\n  border-top: 1px solid blue;\n}\n\n.middle-border {\n  border-right: 1px solid blue;\n}\n\n.bottom_row {\n  height: 100px;\n}\n\n.heat {\n  background-color: darkred;\n}\n\n.cold {\n  background-color: darkblue;\n}\n\n.mode_list {\n  height: 100%;\n  padding: 3px;\n}\n\n.standard_mode {\n  display: block;\n  height: 20px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.heat_mode {\n  display: block;\n  height: 20px;\n  margin: 0;\n  margin-top: 18px;\n}\n\n.cold_mode {\n  display: block;\n  height: 20px;\n  margin: 0px;\n  margin-top: 40px;\n}\n\n.general_row {\n  height: auto;\n}\n\n.swing_air div {\n  display: inline-block;\n  margin-left: 1px;\n  margin-right: 1px;\n}\n\n.swing_air .swing {\n  position: absolute;\n  margin-left: 1px;\n}\n\n.swing_air .air_flow {\n  position: absolute;\n  margin-left: 20px;\n}\n\n.setters_row {\n  height: 20px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 33vh;\n}\n\n.fanSpin {\n  margin-top: 5px;\n}\n\n.fanSpin div {\n  display: inline-block;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\n.levels div {\n  display: inline-block;\n  margin-left: 3px;\n  margin-right: 4px;\n}\n\n.levels div .fan1 {\n  position: absolute;\n  margin-left: 0px;\n}\n\n.levels div .fan2 {\n  position: absolute;\n  margin-left: 20px;\n}\n\n.levels div .fan3 {\n  position: absolute;\n  margin-left: 40px;\n}\n\n.levels div .fan4 {\n  position: absolute;\n  margin-left: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtBQUhGOztBQU1BO0VBRUUsc0JBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7QUFKRjs7QUFPQTtFQUNFLFVBQUE7QUFKRjs7QUFPQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSwwQkFBQTtBQUpGOztBQU1BO0VBQ0UsNEJBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7QUFIRjs7QUFNQTtFQUNFLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSwwQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsWUFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbmRvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuI3NjcmVlbiB7XHJcbiAgLy9taW4taGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6MnB4IHNvbGlkIGJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czo0cHg7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uZnVsbF9oZWlnaHQge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5vX3BhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOjFweCBzb2xpZCBibHVlO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciB7XHJcbiAgYm9yZGVyLXRvcDoxcHggc29saWQgYmx1ZTtcclxufVxyXG4ubWlkZGxlLWJvcmRlciB7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCBibHVlO1xyXG59XHJcblxyXG4uYm90dG9tX3Jvd3tcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4uaGVhdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcclxufVxyXG5cclxuLmNvbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xyXG59XHJcblxyXG4ubW9kZV9saXN0e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOjNweDtcclxufVxyXG5cclxuLnN0YW5kYXJkX21vZGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmhlYXRfbW9kZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOjA7XHJcbiAgbWFyZ2luLXRvcDoxOHB4O1xyXG59XHJcbi5jb2xkX21vZGV7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjowcHg7XHJcbiAgbWFyZ2luLXRvcDo0MHB4O1xyXG59XHJcblxyXG4uZ2VuZXJhbF9yb3d7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc3dpbmdfYWlyIGRpdntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6MXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcblxyXG4uc3dpbmdfYWlyIC5zd2luZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuXHJcbi5zd2luZ19haXIgLmFpcl9mbG93e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLnNldHRlcnNfcm93e1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMzN2aDtcclxufVxyXG5cclxuLmZhblNwaW4ge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZhblNwaW4gZGl2e1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG4ubGV2ZWxzIGRpdntcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuLmxldmVscyBkaXYgLmZhbjF7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuLmxldmVscyBkaXYgLmZhbjJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5sZXZlbHMgZGl2IC5mYW4ze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG4ubGV2ZWxzIGRpdiAuZmFuNHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuIl19 */");

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let HomePage = class HomePage {
    constructor(airdataService, httpClient, navCtrl, alertCtrl) {
        this.airdataService = airdataService;
        this.httpClient = httpClient;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.API = 'https://ddae5242-5a5a-4ba9-b9c6-9e2bcb433d93.mock.pstmn.io';
        this.isLoading = false;
        this.data = [];
        this.updatedData = [];
        this.time = '00:00';
        this.temp = 0;
        this.Mode = ['Heat', 'Cold', 'Standard']; // modes
        this.fan = [];
        // hide div = boolean
        this.standardMode = true;
        this.heatMode = true;
        this.coldMode = true;
        this.swing = true;
        this.airFlow = true;
        this.fan1 = true;
        this.fan2 = true;
        this.fan3 = true;
        this.fan4 = true;
        this.isLoading = true;
        this.getStatus();
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
    getStatus() {
        this.airData = this.httpClient.get(`${this.API}/status`);
        this.airData
            .subscribe(response => {
            console.log('my data: ', response);
            this.data = response.status; // previusly response.data
            this.isLoading = false;
            this.updatedData = this.data;
            this.setTime();
            this.setTemp();
            this.setMode();
            this.setFanSpeed();
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
        newTemp = this.updatedData.temp;
        newTemp = this.temp++;
        this.updatedData.temp = newTemp;
        console.log('temp:' + newTemp);
    }
    tempDown() {
        let newTemp;
        newTemp = this.updatedData.temp;
        newTemp = this.temp--;
        this.updatedData.temp = newTemp;
        console.log('temp:' + newTemp);
    }
    setMode() {
        let modeIndex;
        modeIndex = this.modeIndex;
        console.log('mode value:' + modeIndex);
        if (isNaN(modeIndex)) {
            modeIndex = 0;
        }
        if (modeIndex > 2) {
            modeIndex = 0;
        }
        console.log('mode value:' + modeIndex);
        switch (modeIndex) {
            case 0:
                this.standardMode = false;
                this.heatMode = true;
                this.coldMode = true;
                break;
            case 1:
                this.standardMode = true;
                this.heatMode = false;
                this.coldMode = true;
                break;
            case 2:
                this.standardMode = true;
                this.heatMode = true;
                this.coldMode = false;
                break;
        }
        modeIndex++;
        this.modeIndex = modeIndex;
    }
    setFanSpeed() {
        let fanActualSpeed;
        fanActualSpeed = this.updatedData.fan_speed;
        if (fanActualSpeed === 5) {
            fanActualSpeed = 1;
        }
        console.log('fan speed: ' + fanActualSpeed);
        switch (fanActualSpeed) {
            case 1:
                this.fan1 = false;
                this.fan2 = true;
                this.fan3 = true;
                this.fan4 = true;
                break;
            case 2:
                this.fan1 = false;
                this.fan2 = false;
                this.fan3 = true;
                this.fan4 = true;
                break;
            case 3:
                this.fan1 = false;
                this.fan2 = false;
                this.fan3 = false;
                this.fan4 = true;
                break;
            case 4:
                this.fan1 = false;
                this.fan2 = false;
                this.fan3 = false;
                this.fan4 = false;
                break;
        }
        fanActualSpeed++;
        this.updatedData.fan_speed = fanActualSpeed;
        this.fanSpeed = fanActualSpeed;
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
        if (this.airFlow) {
            this.airFlow = false;
        }
        else {
            this.airFlow = true;
        }
        console.log('air flow: ' + this.airFlow);
    }
    updateStatus() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        // let params = new HttpParams().append('id': "");
        const options = { headers }; // second param, "params"
        return this.httpClient
            .put(`${this.API}/updateStatus`, null, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((response) => {
            /*const status : new DeviceStatus[] = response.json();
            return recipe;*/
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(( /*status: DeviceStatus[]*/) => {
            // this.recipeService.setRecipes(recipes);
        }));
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