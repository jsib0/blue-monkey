webpackJsonp([1,4],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "reserve.72a052efa9830058a480.jpg";

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 106;


/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(125);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(182),
        styles: [__webpack_require__(179)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_navbar_navbar_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agm_core__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_navbar_navbar_component__["a" /* NavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_9__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: "AIzaSyAifWRatmXup7Eli2bx2hnbDSMEaahuAfk"
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_service__["a" /* DashboardService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var APP_ROUTES = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(184),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Cardo|Oswald);", ""]);

// module
exports.push([module.i, "*{\n\tbox-sizing: border-box;\n}\n\n\n\nhtml, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, caption {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    vertical-align: baseline;\n    background: transparent;\n}\n\nbody {\n\tmargin: 0;\n\tpadding: 0;\n\tmax-width: 100%;\t\n}\n\nsection {\n\tdisplay: block;\n}\n\n.wrapper{\n\twidth: 100%;\t\n}\n\n/* /// head /// */\n\n.head {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\tposition: relative;\n\topacity: .8;\n\theight: auto;\n\tbackground-image: url(" + __webpack_require__(214) + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: 100% 100%;\n\tbackground-position: 50% 50%;\n}\n\n.characters span {\n\t/*position: relative;*/\n\tfont-size: 4vw;\n\tfont-weight: 700;\n\tline-height: 1em;\n\tpadding: 0em 0em;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tcolor: #FFFFFF;\n\tposition: absolute;\n\theight: 35vw;\n\tmin-width: 2rem;\n\t-webkit-transform-origin: bottom center;\n\t        transform-origin: bottom center;\n}\n\n.logo {\n\ttop: 45vh;\n\tleft: 15vw;\n\theight: 100%;\n\tposition: relative;\n\twidth: 5vw;\n\tborder-radius: 50%;\n\t-webkit-transform: rotate(-64deg);\n\t        transform: rotate(-64deg);\n}\n\n\n\n.char1 { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n.char2 { -webkit-transform: rotate(8deg); transform: rotate(8deg); }\n.char3 { -webkit-transform: rotate(16deg); transform: rotate(16deg);}\n.char4 { -webkit-transform: rotate(24deg); transform: rotate(24deg); }\n.char5 { -webkit-transform: rotate(32deg); transform: rotate(32deg); }\n.char6 { -webkit-transform: rotate(40deg); transform: rotate(40deg); }\n.char7 { -webkit-transform: rotate(48deg); transform: rotate(48deg); }\n.char8 { -webkit-transform: rotate(56deg); transform: rotate(56deg); }\n.char9 { -webkit-transform: rotate(64deg); transform: rotate(64deg); }\n.char10 { -webkit-transform: rotate(72deg); transform: rotate(72deg); }\n.char11 { -webkit-transform: rotate(80deg); transform: rotate(80deg); }\n.char12 { -webkit-transform: rotate(88deg); transform: rotate(88deg); }\n.char13 { -webkit-transform: rotate(96deg); transform: rotate(96deg); }\n.char14 { -webkit-transform: rotate(104deg); transform: rotate(104deg); }\n.char15 { -webkit-transform: rotate(112deg); transform: rotate(112deg); }\n.char16 { -webkit-transform: rotate(120deg); transform: rotate(120deg); }\n.char17 { -webkit-transform: rotate(128deg); transform: rotate(128deg); }\n\n\n\n\n\t/*/// navbar ///*/\n\n.navbar {\n  background: rgba(47, 55, 59, 0.97);\n  min-width: 100%;\n  height: 100%;\n  position: -webkit-sticky;\n  position: -moz-sticky;\n  position: -ms-sticky;\n  position: -o-sticky;\n  position: sticky;\n  top: 0px;\n  bottom: 0px;\n  z-index: 15;\n}\n\n.navwrapper {\n  margin: 0 auto;\n  max-width: 100%;\n  z-index: 10;\n}\n\n/* navbar hover and underline appear effect */\n\nnav ul li a {\n\tposition: relative;\n\tdisplay: inline-block;\n\tmargin: 10px 25px;\n\toutline: none;\n\tcolor: white;\n\ttext-decoration: none;\n\ttext-transform: uppercase;\n\tfont-family: 'Oswald', sans-serif;\n\tletter-spacing: 1px;\n\tfont-weight: 400;\n\ttext-shadow: 0 0 1px rgba(255,255,255,0.3);\n\tfont-size: 1vw 2vh;\n}\n\nnav ul li a:hover,\nnav ul li a:focus {\n\toutline: none;\n\tcolor: #838688;\n}\n\n.cl-effect-3 nav ul li a {\n\tpadding: 8px 0;\n}\n\n.cl-effect-3 nav ul li a::after {\n\tposition: absolute;\n\ttop: 80%;\n\tleft: 0;\n\twidth: 100%;\n\theight: 2px;\n\tbackground: #838688;\n\tcontent: '';\n\topacity: 0;\n\ttransition: opacity 0.3s, -webkit-transform 0.3s;\n\ttransition: opacity 0.3s, transform 0.3s;\n\ttransition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;\n\t-webkit-transform: translateY(10px);\n\ttransform: translateY(10px);\n}\n\n.cl-effect-3 nav ul li a:hover::after,\n.cl-effect-3 nav ul li a:focus::after {\n\topacity: 1;\n\t-webkit-transform: translateY(0px);\n\ttransform: translateY(0px);\n}\n\n/* navbar collapse to the top right */\n\nnav ul {\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n\t-webkit-box-orient: horizontal;\n\t-webkit-box-direction: normal;\n\t    -ms-flex-flow: row wrap;\n\t        flex-flow: row wrap;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    list-style-type: none;\n    width: 100%;\n} \n\nnav ul a {\n\tcolor: #E84545;\n    text-decoration: none;\n    transition: all .5s ease;\n} \n\nnav li { display: inline-block;} \n\nnav #menu-toggle { display: none; }\n\nnav .label-toggle { display: none; }\n  \nnav .navwrapper {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\ninput {\n  display: none; }\n\n/* navbar media query */\n\n@media screen and (max-width:769px) {\n\n\t.navbar{\n     position: relative;\n     height: 0;\n  \t min-width: 100%;\n  \t top: 0px;\n  \t z-index: 6;\n    }\n\n    nav ul a  {    \n         color: #53354A;\n\t}\n\n    nav ul {\n      position: relative;\n      background-color: black;\n      display: block;\n      height: 0;\n      list-style-type: none;\n      opacity: 0;\n      text-align: center;\n      transition: all 1s ease;\n      width: 100%;\n      padding: 7rem;\n    }\n\t\n\n    nav ul li {\n      position: relative;\n      color: #53354A;\n      display: block;\n      padding: 0em 0;\n \t  margin: 0 auto;\n      width: 150px;\n      left: -1rem;\n    }\n\n    nav .navwrapper {display: block;}\n\t\t\n\t.toggle-label {\n\t  display: none;\n\t  cursor: pointer;\n\t  display: block;\n\t  position: fixed;\n\t  top: 20px;\n\t  left: 85%;\n\t  z-index: 99;\n\t  color: #5196ce;\n\t  width: 30px;\n\t  height: 30px;\n\t  transition: all 400ms ease-in-out;\n\t  -webkit-user-select: none;\n\t     -moz-user-select: none;\n\t      -ms-user-select: none;\n\t          user-select: none;\n\t  -webkit-tap-highlight-color: transparent; \n\t} \n\n\t.toggle-label .toggle-icon, .toggle-label .toggle-icon::before, .toggle-label .toggle-icon::after {\n\t  position: absolute;\n\t  top: 50%;\n\t  left: 0%;\n\t  height: 4px;\n\t  width: 30px;\n\t  cursor: pointer;\n\t  background: #eeeeee;\n\t  display: block;\n\t  content: '';\n\t  transition: all 500ms ease-in-out; \n\t}\n\n\t.toggle-label .toggle-icon::before {\n\t  -webkit-transform: translate3d(0%, -12px, 0);\n\t          transform: translate3d(0%, -12px, 0); \n\t}\n\n\t.toggle-label .toggle-icon::after {\n\t  -webkit-transform: translate3d(0%, 8px, 0);\n\t          transform: translate3d(0%, 8px, 0); \n\t}\n\n\t.toggle:checked ~ .toggle-label .toggle-icon {\n\t  background-color: transparent; \n\t}\n\n\t.toggle:checked ~ .toggle-label .toggle-icon::before {\n\t  -webkit-transform: translateX(0%) rotate(45deg);\n\t          transform: translateX(0%) rotate(45deg); \n\t}\n\n\t.toggle:checked ~ .toggle-label .toggle-icon::after {\n\t  -webkit-transform: translateX(0%) translateY(-8px) rotate(-45deg);\n\t          transform: translateX(0%) translateY(-8px) rotate(-45deg);\n\t  top: 10px; \n\t}\n\n\t .toggle:checked ~ ul {\n\t      opacity: .8;\n\t      height: 100%;\n\t      width: 100%;\n\t      position: fixed;\n\t      top: 0;\n\t      left: 0;\n\t      z-index: 30;\n\t      transition-property: opacity;\n\t      transition-duration: 500ms;\n\t      transition-delay: 200ms;\n\t      transition-timing-function: ease-in-out;\n\t}\n\n\tul:focus ~ body{\n\t\tvisibility: visible;\n\t}\n}\n\n\n\n\n\t/*/// menu ///*/\n\n.menu {\n\theight: 900px;\n\twidth: 100%;\n\toverflow: scroll;\n\tpadding:0;\n\tz-index: 3;\n\tposition: relative;\n\tmargin: 0;\n\toverflow: hidden;\n\n}\n\n.menu::-webkit-scrollbar  { \n    display: none; \n}\n\n\n\n\n/* menu parallax with jquery*/\n\n.parallax-window {\n\theight: 100%;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tz-index: 0;\n\tmargin:0;\n\t\n}\n\n\n\n\n\t/*/// events ///*/\n\n.event {\n\theight: 550px;\n\tbackground: linear-gradient(\n                     rgba(20,20,20, .5), \n                     rgba(20,20,20, .5)),url(" + __webpack_require__(105) + ");\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\toverflow: hidden;\t \n}\n\n\n.event_banner {\n\ttop: 20vh;\n\tleft: 23vw;\n\t/*height: 50%;*/\n\tposition: relative;\n\twidth: 10vw;\n\tborder-radius: 50%;\n\t-webkit-transform: rotate(-41deg);\n\t        transform: rotate(-41deg);\n}\n\n.characters_event span {\n\tposition: absolute;\n\tpadding: 0em 0em;\n\theight: 35vw;\n\tmin-width: 2.5rem;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\tfont-family: 'Open Sans Condensed', sans-serif;\n\tcolor: #FFFFFF;\n\t-webkit-transform-origin: bottom center;\n\t        transform-origin: bottom center;\n\theight: 35vw;\n\tmin-width: 2rem;\n}\n\n\n.char_a { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n.char_b { -webkit-transform: rotate(5deg); transform: rotate(5deg); }\n.char_c { -webkit-transform: rotate(10deg); transform: rotate(10deg);}\n.char_d { -webkit-transform: rotate(16deg); transform: rotate(16deg); }\n.char_e { -webkit-transform: rotate(21deg); transform: rotate(21deg); }\n.char_f { -webkit-transform: rotate(25deg); transform: rotate(25deg); }\n.char_g { -webkit-transform: rotate(29deg); transform: rotate(29deg); }\n.char_h { -webkit-transform: rotate(34deg); transform: rotate(34deg); }\n.char_i { -webkit-transform: rotate(34deg); transform: rotate(34deg); }\n.char_j { -webkit-transform: rotate(45deg); transform: rotate(45deg); }\n.char_k { -webkit-transform: rotate(50deg); transform: rotate(50deg); }\n.char_l { -webkit-transform: rotate(45deg); transform: rotate(45deg); }\n.char_m { -webkit-transform: rotate(60deg); transform: rotate(60deg); }\n.char_n { -webkit-transform: rotate(65deg); transform: rotate(65deg); }\n.char_o { -webkit-transform: rotate(70deg); transform: rotate(70deg); }\n.char_p { -webkit-transform: rotate(75deg); transform: rotate(75deg); }\n.char_q { -webkit-transform: rotate(80deg); transform: rotate(80deg); }\n.char_r { -webkit-transform: rotate(85deg); transform: rotate(85deg); }\n\n.container-2 {\n  position: relative;\n  text-align: center;\n  width: 100%;\n  height: 15%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top: 50%;  \n}\n\n.btn {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  box-sizing: border-box;\n  width: 275px;\n  height: 100px;\n  margin: auto;\n  border: 2px solid hidden;\n  text-align: center;\n  line-height: 100px;\n  color: white;\n  text-decoration: none;\n  border-radius: 3px;\n  letter-spacing: 5px;\n  font-color: white;\n  transition: border .3s ease-out;  \n}\n\n .btn:before {\n    content: '';\n    display: block;\n    position: absolute;\n    box-sizing: border-box;\n    width: 255px;\n    left: 8px;\n    top: 8px;\n    height: 80px;\n    border: 2px solid white;\n    z-index: 0;\n }\n\n .btn:hover {\n    border: 2px solid white;\n }\n\n.statement {\n\tposition: relative;\n\tfont-family: 'cardo', Arial, sans-serif;\n\tfont-size: 1.15rem;\n\tz-index: 0;\n\ttext-align: center;\n\tpadding-top: .5rem;\n\ttop: 65%;\n\tcolor: #fff;\n\theight: 50px;\n\twidth: 100%;\n}\n\n\n\n\n\t/*/// findus ///*/\n\n.findus{\n\tposition: relative;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tdisplay: -ms-flexbox;\n\tdisplay: -webkit-flex;\n\t-webkit-box-pack: center;\n\t    -ms-flex-pack: center;\n\t        justify-content: center;\n\tfont-family:  Arial, sans-serif;\n\ttext-transform: uppercase;\n\tletter-spacing: .05em;\n\tbackground-color: #fff;\n}\n\nagm-map {\n  height: 35rem;\n}\n\n.find-us-child {\n\twidth: 33.33%;\n}\n\n.column-details{\n\t-webkit-box-align: center;\n\t    -ms-flex-align: center;\n\t        align-items: center;\t\n}\n\n.column-details h1 {\n\tcolor: #546268;\n\tfont-size: 2em;\n\tright: .5em;\n\ttop: 2rem;\n\tmargin: 0 auto;\n\ttext-align: center;\t\n}\n\n.column-details h1 span {\n\tcolor: #98A1A4;\n\tfont-size: 1.5rem; \n\theight: 35px;\n\twidth: 32px;\n\ttop: 2px;\n\tmargin-left: 3px;\n\tborder-bottom:2px solid #98A1A4;\n}\n\n.contact-list {\n\tposition: relative;\n\ttop: 2rem;\n\twidth: 85%;\n\ttext-decoration: none;\n\tmargin: auto;\n}\n\n.contact-list li {\n\tfont-size: 1.3em;\n\tfont-weight: 700;\n\twidth: 100%;\n\tlist-style-type: none;\n\tmargin-top: 2em;\n}\n\nsvg {\n\tposition: relative;\n\tbottom: 7px;\n\theight: 40px;\n\tfloat: left;\n\tmargin-right: 10px;\n}\n\n#send_message{\n\tposition: relative;\n\twidth: 100%;\n\ttop: 80px;\t\n}\n\n.book_section {\n\tbackground-image: url(" + __webpack_require__(105) + ");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: none;\n\tdisplay: -webkit-box;\n\tdisplay: -ms-flexbox;\n\tdisplay: flex;\n}\n\n#book_a_table {\n\tmargin:0 auto;\n\ttop: 14.5rem;\n\t-ms-flex-item-align: center;\n\t    -ms-grid-row-align: center;\n\t    align-self: center;\n}\n\nfigure{\n\twidth:200px;\n\theight:60px;\n\tcursor:pointer;\n\tperspective:500px;\n\t-webkit-perspective:500px;\n\tmargin: 0 auto;\t\n}\n\nfigure div{\n\theight:100%;\n\ttransform-style:preserve-3d;\n\t-webkit-transform-style:preserve-3d;\n\ttransition:0.25s;\n\t-webkit-transition:0.25s;\n}\n\nfigure:hover div{\n\t-webkit-transform:rotateX(-90deg);\n\t        transform:rotateX(-90deg);\n}\n\nfigure span{\n\twidth:100%;\n\theight:100%;\n\tposition:absolute;\n\tbox-sizing:border-box;\n\tborder:5px solid #556267;\n\tfont-family:'Source Sans Pro',sans-serif;\n\tline-height:50px;\n\tfont-size:17pt;\n\ttext-align:center;\n\ttext-transform:uppercase;\n}\n\nfigure span:nth-child(1){\n\tcolor:#556267;\n\ttransform: translate3d(0, 0, 30px);\n\t-webkit-transform: translate3d(0, 0, 30px);\n}\n\nfigure span:nth-child(2){\n\tcolor:#556267;\n\tbackground:#fff;\n\ttransform: rotateX(90deg) translate3d(0, 0, 30px);\n\t-webkit-transform: rotateX(90deg) translate3d(0, 0, 30px);\n}\n\n@media screen and (max-width: 1250px){\n\t.findus{\n\t\t-webkit-box-orient: vertical;\n\t\t-webkit-box-direction: normal;\n\t\t    -ms-flex-flow: column wrap;\n\t\t        flex-flow: column wrap;\n\t}\n\n\t.find-us-child {\n\t\twidth: 100%;\n\t\theight: 20rem;\n\t}\n\n\t.find-us-media{\n\t\theight: 20rem;\n\t}\n\t\n\t.column-details{\n\t\tz-index: 5;\n\t}\n\n\t.column-details h1 {\n\t\tfont-size: 1.5em;\n\t\ttop: 15px;\n\t}\n\n\t.column-details h1 span {\n\t\tfont-size: 1rem; \n\t}\n\n\t.contact-list {\n\t\tposition: relative;\n\t\ttop: 2rem;\n\t\twidth: 100%;\n\t\tpadding: 0;\n\t\tpadding-right: 50%;\n\t\tmargin: 0 auto;\t\n\t}\n\n\t.contact-list li {\n\t\tposition: relative;\n\t\tfont-size: 1em;\n\t\tmargin-top: 1em;\n\t\tmargin-left: 50%;\n\t\tpadding-left: 26%;\n\t\tpadding-right: 3rem;\n\t\twhite-space: nowrap;\n\t}\n\n\tfigure span {\n\t\tright: .01vw;\n\t}\n\n\tsvg {\n\t\theight: 30px;\n\t}\n\n\t#send_message{\n\t\ttop: 4em;\n\t\tvisibility: hidden;\n\t}\n\n\t.statement {\n\tfont-size: 1rem;\n\t}\n}\n\n\n\n\n\t/*/// gallery ///*/\n\n.carousel {\n\twidth: 100%;\n\toverflow: hidden;\n}\n\n.gallery {\n\theight: 400px;\n\twidth: 3500px;\n\toverflow: hidden;\n}\n\n/* gallery keyframe animations*/\n\n.first {\n\t-webkit-animation: bannermove 30s linear infinite;\n\t        animation: bannermove 30s linear infinite;\n}\n\n\n.gallery img {\n\ttransition: all 0.5s ease;\n\tmargin: -3px;\n\theight: 102%;\n\toverflow: hidden;\n}\n \n.gallery img:hover {\n\t-webkit-transform: scale(1.1);\n\ttransform: scale(1.1);\n\tcursor: pointer;\n\tbox-shadow: 0px 3px 5px rgba(0,0,0,0.2);\n}\n\n\n@keyframes \"bannermove\" {\n 0% {\n    margin-left: 0px;\n }\n 100% {\n    margin-left: -2125px;\n }\n \n}\n \n@-webkit-keyframes \"bannermove\" {\n 0% {\n   margin-left: 0px;\n }\n 100% {\n   margin-left: -2125px;\n }\n \n}\n\n\n@media only screen and (max-width: 749px){\n\t.head { min-height: 100vh;\n\t\t\tbackground-image: url(" + __webpack_require__(215) + ");\n\t}\n\n\t.characters {\n\t\theight: 30%;\n\t\t\n\t}\n\t.characters span {\n\t\tfont-size: 1.6rem;\n\t\tfont-size: 2rem;\n\t\theight: 45vw;\n\t}\n\t.logo {\n\t\tleft: 8vw;\n\t\twidth: 1vw;\n\t}\n\n\t.event_banner {\n\t\ttop: 20vh;\n\t\tleft: 16vw;\n\t\t-webkit-left: 1vw;\n\t\twidth: 1px;\n\t\t\n\t\n\t}\n\n\t.characters_event {\n\t\theight: 30%;\n\t}\n\n\t.characters_event span {\n\t\theight: 50vw;\n\t\tmin-height: 255px;\n\t\tmin-width: 1.5rem;\n\t\tfont-size: 2rem;\n\t\tline-height: -10px;\n\t}\n\n}\n\n@media only screen and (max-width: 510px) {\n\t.event_banner {\n\t\tleft: 7vw;\n\t\t-webkit-left: 7vw;\n\t}\n}\n\n@media only screen and (max-width: 430px){\n\t\n\t.contact-list li {\n\t\tmargin-left: 0;\n\t}\n\n\th1 {\n\t\tfont-size: 1.5rem;\n\t\t-webkit-font-size: 1.5rem;\n\t}\n\n\t.characters_event {\n\t\theight: 30%;\n\t\n\t}\n\n\t.event_banner {\n\n\t\tleft: 4vw;\n\t\twidth: 1px;\n\t}\n\n\t.characters_event span {\n\t\tline-height: 0vw;\n\t\twidth: 5vw;\n\t\tmin-height: 63vw;\n\t\tfont-size: 6vw;\n\t\theight: 65vw;     \n\t}\n\n\t.characters span {\n\t\tfont-size: 7.5vw;\n\t\theight: 50vw;\n\t}\n\n\t.logo {\n\t\tleft: 2.5vw;\n\t}\n}\n\n@media only screen and (max-width: 769px){\n\t.contact-list li {\n\t\tpadding-left: 15%;\n\t}\n\n\t.statement {\n\tfont-size: .8rem;\n\t\n\t}\n\n}\n\n@media only screen and (min-width:750px) {\n\t.head { min-height: 100vh;}\n}\n\n@media only screen and (min-width:1250px) {\n\t.head { min-height: 97.5vh;\n\t\t\tbackground-position: 100% 100%;}\n}\n\n \n\n\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n\n</head>\n<body >\n\t<div class=\"wrapper\" >\n\t\t<section id=\"home\" class=\"head\">\n\t\t\t\t<div class=\"logo\">\n\t\t\t\t\t<h1 class=\"characters\">\n\t\t\t\t\t\t<span class=\"char1\">B</span>\n\t\t\t\t\t\t<span class=\"char2\">L</span>\n\t\t\t\t\t\t<span class=\"char3\">U</span>\n\t\t\t\t\t\t<span class=\"char4\">E</span>\n\t\t\t\t\t\t<span class=\"char5\"></span>\n\t\t\t\t\t\t<span class=\"char6\">M</span>\n\t\t\t\t\t\t<span class=\"char7\">O</span>\n\t\t\t\t\t\t<span class=\"char8\">N</span>\n\t\t\t\t\t\t<span class=\"char9\">K</span>\n\t\t\t\t\t\t<span class=\"char10\">E</span>\n\t\t\t\t\t\t<span class=\"char11\">Y</span>\n\t\t\t\t\t\t<span class=\"char12\"></span>\n\t\t\t\t\t\t<span class=\"char13\">G</span>\n\t\t\t\t\t\t<span class=\"char14\">R</span>\n\t\t\t\t\t\t<span class=\"char15\">I</span>\n\t\t\t\t\t\t<span class=\"char16\">L</span>\n\t\t\t\t\t\t<span class=\"char17\">L</span>\n\t\t\t\t\t</h1>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t</section>\n\t\t<nav class=\"cl-effect-3 navbar\">\n\t\t\t<nav class=\"navwrapper\">\n      \t\t<input type=\"checkbox\" id=\"drawer1\" class=\"toggle\"/>\n            <label class=\"toggle-label\" for=\"drawer1\"><span     class=\"toggle-icon\"></span></label>\n  \t\t\t<label ID=\"overlay\" for=\"drawer1\"></label>\n\t\t\t\t<ul >\n\t \t\t\t\t<li><span class=\"z-index\"><a href=\"http://localhost:4200/dashboard#home\">Home</a></span></li>\n\t\t\t\t\t<li><a href=\"http://localhost:4200/dashboard#menu\">Menu</a></li>\n\t\t\t\t\t<li><a href=\"http://localhost:4200/dashboard#findus\">Find Us</a></li>\n\t\t\t\t\t<li><a href=\"http://localhost:4200/dashboard#gallery\">Gallery</a></li>\n\t\t\t\t\t<li><a href=\"http://localhost:4200/dashboard#findus\">Reservations</a></li>\n\t\t\t\t</ul>\n\t\t\t</nav>\n\t\t</nav>\n\t\t<section id=\"menu\" class=\"menu\" data-padding=\"0\">\n\t\t \t<div class=\"parallax-window\" data-parallax=\"scroll\"  data-z-index=\"-1\"> \n\t\t\t\t<section class=\"main\"  >\n\t\t\t\t<div id=\"rm-container\" class=\"rm-container rm-open\">\n\t\t\t\t\t<div class=\"rm-wrapper\">\n\t\t\t\t\t\t<div class=\"rm-cover\">\n\t\t\t\t\t\t\t<div class=\"rm-back\">\n\t\t\t\t\t\t\t\t<div class=\"rm-content\">\n\t\t\t\t\t\t\t\t\t<h4>Appetizers</h4>\n\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t<dt>Poke Nachos</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>Lobster, Crab &amp; Artichoke Dip</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>Spinach Cheese Dip</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>Queso Dip</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit &amp; mint pesto</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>Classic Sliders</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t\t<h4>Salads &amp; More</h4>\n\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t<dt>Chicken Tortilla</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>Clam Chowder</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>Chopped Salad</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet</dd>\n\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t</div><!-- /rm-content -->\n\t\t\t\t\t\t\t\t<div class=\"rm-overlay\"></div>\n\t\t\t\t\t\t\t</div><!-- /rm-back -->\n\t\t\t\t\t\t</div><!-- /rm-cover -->\n\t\t\t\t\t\t<div class=\"rm-middle\">\n\t\t\t\t\t\t\t<div class=\"rm-inner\">\n\t\t\t\t\t\t\t\t<div class=\"rm-content\">\n\t\t\t\t\t\t\t\t\t<h4>Main Dishes</h4>\n\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t<dt>BBQ BACON CHEDDAR BURGER</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>ASADA TACO</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>CHIPOTLE CHICKEN TACO</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur.</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>MARGHERITA PIZZA</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>GRILLED CHICKEN &amp; AVOCADO SANDWICH</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur</dd>\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<dt>CUBAN ROAST PORK DIP</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>NEW YORK STEAK SANDWICH</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t\t<dt>KUROBUTA PORK BURGER</dt>\n\t\t\t\t\t\t\t\t\t\t<dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit</dd>\n\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t</div><!-- /rm-content -->\n\t\t\t\t\t\t\t\t<div class=\"rm-overlay\"></div>\n\t\t\t\t\t\t\t</div><!-- /rm-inner -->\n\t\t\t\t\t\t</div><!-- /rm-middle -->\n\t\t\t\t\t\t<div class=\"rm-right\">\n\t\t\t\t\t\t\t<div class=\"rm-back\">\n\t\t\t\t\t\t\t\t<div class=\"rm-content\">\n\t\t\t\t\t\t\t\t\t<h4>BEER</h4>\n\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t<dt>Hefenweizen</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Ipa</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Porter</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Lager</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Ale</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Pilsner</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Stout</dt>\n\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t\t<h4>Cocktails</h4>\n\t\t\t\t\t\t\t\t\t<dl>\n\t\t\t\t\t\t\t\t\t\t<dt>Old Fashioned</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Whiskey Sour</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Manhattan</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Margarita</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Irsh Coffee</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Jack Rose</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Martini</dt>\n\t\t\t\t\t\t\t\t\t\t<dt>Bloody Mary</dt>\n\t\t\t\t\t\t\t\t\t</dl>\n\t\t\t\t\t\t\t\t\t<div class=\"rm-order\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t  </div>\n\t \t</section>\n\t\t<section class=\"event\">\n\t\t\t\t<div class=\"event_banner\">\n\t\t\t\t\t<h1 class=\"characters_event\">\n\t\t\t\t\t\t<span class=\"char_a\">P</span>\n\t\t\t\t\t\t<span class=\"char_b\">L</span>\n\t\t\t\t\t\t<span class=\"char_c\">A</span>\n\t\t\t\t\t\t<span class=\"char_d\">N</span>\n\t\t\t\t\t\t<span class=\"char_e\">N</span>\n\t\t\t\t\t\t<span class=\"char_f\">I</span>\n\t\t\t\t\t\t<span class=\"char_g\">N</span>\n\t\t\t\t\t\t<span class=\"char_h\">G</span>\n\t\t\t\t\t\t<span class=\"char_i\"></span>\n\t\t\t\t\t\t<span class=\"char_j\">A</span>\n\t\t\t\t\t\t<span class=\"char_k\">N</span>\n\t\t\t\t\t\t<span class=\"char_l\"></span>\n\t\t\t\t\t\t<span class=\"char_m\">E</span>\n\t\t\t\t\t\t<span class=\"char_n\">V</span>\n\t\t\t\t\t\t<span class=\"char_o\">E</span>\n\t\t\t\t\t\t<span class=\"char_p\">N</span>\n\t\t\t\t\t\t<span class=\"char_q\">T</span>\n\t\t\t\t\t\t<span class=\"char_r\">?</span>\n\t\t\t\t\t</h1>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"container-2\" >\n      \t\t\t\t\t<a class=\"btn\" href=\"\">GET IN TOUCH</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"statement\">\n\t\t\t\t\t<h3 >Blue monkey is the perfect venue for almost any event, big or small.</h3>\n\t\t\t\t</div>\n\t\t</section>\t\t\n\t\t<section id=\"findus\" class=\"findus\">\n\t\t\t\n\t\t\t\t <div class=\"find-us-child google_maps\"> \n\t\t\t\t \t<agm-map class=\"find-us-media\"[latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zm\" [scrollwheel]=\"scroll\"[backgroundColor]=\"bgcolor\" [zoomControl]=\"zmctrl\" [backgroundColor]=\"backgroundColor\" [styles]=\"style\">\n\t  \t\t\t\t<agm-marker [latitude]=\"lat\" [longitude]=\"lng\" ></agm-marker>\n\t\t\t\t\t</agm-map>\n\t\t\t\t </div>\n\t\t\t\n\t\t\t <div class=\"find-us-child find-us-media column-details\">\n\t\t\t \t<h1>Find<span>\n\t\t\t \tus</span></h1>\n\t\t\t \t<ul class=\"contact-list\">\n\t\t\t \t\t<li>\n\t\t\t \t\t<span>\n\t\t\t \t\t\t<svg viewBox=\"0 0 90 90\">\n\t\t\t \t\t\t\t<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-location\">\n\t\t\t\t\t\t\t\t<g id=\"icon-location\">\n\t\t\t\t\t\t\t\t\t<g id=\"g3\" transform=\"translate(-9.4270041,-8.4090004)\">\n\t\t\t\t\t\t\t\t\t\t<g id=\"g5\">\n\t\t\t\t\t\t\t\t\t\t\t<g id=\"g7\" stroke-miterlimit=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path9\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m34.39,84.566c0.486,0.322,0.981,0.633,1.484,0.933l52.459-44.516c-0.213-0.544-0.438-1.082-0.676-1.613l-53.267,45.196z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path11\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m21.099,68.809c0.232,0.529,0.477,1.052,0.734,1.567l53.854-45.695c-0.468-0.338-0.943-0.665-1.427-0.98l-53.161,45.108z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path13\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m28.967,80.179c0.4,0.393,0.81,0.777,1.228,1.15l54.948-46.625c-0.302-0.474-0.612-0.939-0.935-1.397l-55.241,46.872z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path15\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m18.047,53.422c-0.005,0.259-0.02,0.517-0.02,0.777,0,0.469,0.018,0.934,0.036,1.399l43.678-37.062c-0.709-0.145-1.427-0.263-2.149-0.365l-41.545,35.251z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path17\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m18.822,61.753c0.129,0.613,0.275,1.22,0.436,1.82l50.138-42.542c-0.567-0.257-1.142-0.5-1.724-0.728l-48.85,41.45z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path19\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m48.955,90.187c0.748,0.113,1.508,0.197,2.271,0.264l39.488-33.506c0.057-0.754,0.093-1.513,0.103-2.277l-41.862,35.519z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path21\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m40.886,87.977c0.591,0.237,1.188,0.459,1.794,0.666l47.647-40.428c-0.105-0.633-0.228-1.259-0.365-1.88l-49.076,41.642z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path23\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"M25.498,76.255,80.896,29.25c-0.383-0.406-0.775-0.804-1.176-1.192l-55.208,46.843c0.32,0.459,0.648,0.911,0.986,1.354z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path25\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m60.378,90.104c1.174-0.193,2.328-0.442,3.46-0.746l23.73-20.135c0.489-1.074,0.927-2.176,1.311-3.302l-28.501,24.183z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path27\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m19.857,42.827c-0.312,0.946-0.586,1.908-0.82,2.886l32.776-27.81c-0.998,0.071-1.988,0.173-2.963,0.323l-28.993,24.601z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<polyline id=\"polyline29\" style=\"stroke-linejoin:round;stroke:#c0c0c1;stroke-linecap:round;stroke-miterlimit:10;fill:#c0c0c1;\" points=\"20.359,36.979,44.177,16.768,40.607,17.606,21.234,34.045,20.359,36.979\"></polyline>\n\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle31\" style=\"fill:none;\" d=\"m 92.322002,53.608002 c 0,20.931593 -16.968408,37.900001 -37.900001,37.900001 -20.931593,0 -37.900002,-16.968408 -37.900002,-37.900001 0,-20.931593 16.968409,-37.900002 37.900002,-37.900002 20.931593,0 37.900001,16.968409 37.900001,37.900002 z\" cy=\"53.608\" cx=\"54.422\" r=\"37.9\"></circle>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle33\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m 92.322002,53.608002 c 0,20.931593 -16.968408,37.900001 -37.900001,37.900001 -20.931593,0 -37.900002,-16.968408 -37.900002,-37.900001 0,-20.931593 16.968409,-37.900002 37.900002,-37.900002 20.931593,0 37.900001,16.968409 37.900001,37.900002 z\" cx=\"54.422\" cy=\"53.608\" r=\"37.9\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle35\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m 97.917,53.403999 c 0,24.021625 -19.473375,43.494999 -43.494999,43.494999 -24.021625,0 -43.494999,-19.473374 -43.494999,-43.494999 0,-24.021624 19.473374,-43.4949986 43.494999,-43.4949986 24.021624,0 43.494999,19.4733746 43.494999,43.4949986 z\" cx=\"54.422\" cy=\"53.404\" r=\"43.495\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t<g id=\"g37\" stroke-miterlimit=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t<path id=\"path39\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:#ffffff;\" d=\"m67.93,56.508h-0.008c1.639-2.521,2.6-5.525,2.6-8.756,0-8.892-7.208-16.101-16.1-16.101s-16.1,7.209-16.1,16.101c0,3.23,0.962,6.234,2.601,8.756h-0.008l0.051,0.07c0.236,0.359,0.491,0.703,0.754,1.042l12.703,17.538,12.702-17.538c0.263-0.339,0.518-0.683,0.754-1.042l0.051-0.07z\">\n\t\t\t\t\t\t\t\t\t\t\t</path>\n\t\t\t\t\t\t\t\t\t\t\t<path id=\"path41\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m59.871,45.943c0,3.01-2.438,5.451-5.451,5.451-3.009,0-5.446-2.441-5.446-5.451,0-3.012,2.438-5.449,5.446-5.449,3.013,0,5.451,2.438,5.451,5.449z\"></path>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</use>\n\t\t\t\t\t\t</svg>\n\t\t\t\t\t</span>5555 Silliman Ave\n\t\t\t\t</li>\n\t\t\t \t\t<li>\n\t\t\t \t\t\t<span> \n\t\t\t\t\t\t<svg viewBox=\"0 0 90 90\">\n\t\t\t\t\t\t\t<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-phone\">\n\t\t\t\t\t\t\t\t<g id=\"icon-phone\">\n\t\t\t\t\t\t\t\t\t<g id=\"g3\" transform=\"translate(-9.4270041,-8.3989983)\">\n\t\t\t\t\t\t\t\t\t\t<g id=\"g5\">\n\t\t\t\t\t\t\t\t\t\t\t<g id=\"g7\" stroke-miterlimit=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path9\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m34.39,84.566c0.486,0.322,0.982,0.633,1.484,0.933l52.459-44.516c-0.213-0.544-0.438-1.082-0.676-1.613l-53.267,45.196z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path11\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m21.099,68.809c0.232,0.529,0.477,1.052,0.734,1.567l53.855-45.695c-0.469-0.338-0.943-0.665-1.428-0.98l-53.161,45.108z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path13\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m28.968,80.179c0.4,0.393,0.809,0.777,1.227,1.15l54.949-46.625c-0.303-0.474-0.613-0.939-0.936-1.397l-55.24,46.872z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path15\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m18.048,53.422c-0.006,0.259-0.02,0.517-0.02,0.777,0,0.469,0.018,0.934,0.035,1.399l43.678-37.062c-0.709-0.145-1.426-0.263-2.148-0.365l-41.545,35.251z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path17\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m18.821,61.753c0.129,0.613,0.275,1.22,0.436,1.82l50.139-42.542c-0.568-0.257-1.143-0.5-1.725-0.728l-48.85,41.45z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path19\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m48.954,90.187c0.748,0.113,1.508,0.197,2.271,0.264l39.488-33.506c0.057-0.754,0.092-1.513,0.102-2.277l-41.861,35.519z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path21\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m40.886,87.977c0.592,0.237,1.189,0.459,1.795,0.666l47.646-40.428c-0.105-0.633-0.227-1.259-0.365-1.88l-49.076,41.642z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path23\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"M25.497,76.255,80.896,29.25c-0.383-0.406-0.775-0.804-1.176-1.192l-55.207,46.843c0.318,0.459,0.646,0.911,0.984,1.354z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path25\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m60.378,90.104c1.174-0.193,2.328-0.442,3.461-0.746l23.73-20.135c0.488-1.074,0.926-2.176,1.311-3.302l-28.502,24.183z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path27\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m19.856,42.827c-0.312,0.946-0.586,1.908-0.82,2.886l32.777-27.81c-0.998,0.071-1.988,0.173-2.963,0.323l-28.994,24.601z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<polyline id=\"polyline29\" style=\"stroke-linejoin:round;stroke:#c0c0c1;stroke-linecap:round;stroke-miterlimit:10;fill:#c0c0c1;\" points=\"20.358,36.979,44.177,16.768,40.606,17.606,21.233,34.045,20.358,36.979\"></polyline>\n\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle31\" style=\"fill:none;\" d=\"m 92.320999,53.608002 c 0,20.931038 -16.967959,37.898998 -37.898998,37.898998 -20.931039,0 -37.898998,-16.96796 -37.898998,-37.898998 0,-20.931039 16.967959,-37.898999 37.898998,-37.898999 20.931039,0 37.898998,16.96796 37.898998,37.898999 z\" cy=\"53.608\" cx=\"54.422\" r=\"37.899\"></circle>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle33\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m 92.320999,53.608002 c 0,20.931038 -16.967959,37.898998 -37.898998,37.898998 -20.931039,0 -37.898998,-16.96796 -37.898998,-37.898998 0,-20.931039 16.967959,-37.898999 37.898998,-37.898999 20.931039,0 37.898998,16.96796 37.898998,37.898999 z\" cx=\"54.422\" cy=\"53.608\" r=\"37.899\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle35\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m 97.917,53.403999 c 0,24.021625 -19.473375,43.494999 -43.494999,43.494999 -24.021625,0 -43.494999,-19.473374 -43.494999,-43.494999 0,-24.021624 19.473374,-43.4949986 43.494999,-43.4949986 24.021624,0 43.494999,19.4733746 43.494999,43.4949986 z\" cx=\"54.422\" cy=\"53.404\" r=\"43.495\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t<g id=\"g37\" stroke-miterlimit=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<rect id=\"rect39\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:#ffffff;\" height=\"47.052\" width=\"27.24\" y=\"29.879\" x=\"40.802\"></rect>\n\t\t\t\t\t\t\t\t\t\t\t\t<rect id=\"rect41\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:#ffffff;\" height=\"26.882\" width=\"19.02\" y=\"34.885\" x=\"44.911\"></rect>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle43\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:#5a646a;\" d=\"m 56.255001,69.341003 c 0,1.012891 -0.821109,1.834 -1.834,1.834 -1.01289,0 -1.834,-0.821109 -1.834,-1.834 0,-1.01289 0.82111,-1.834 1.834,-1.834 1.012891,0 1.834,0.82111 1.834,1.834 z\" cx=\"54.421\" cy=\"69.341\" r=\"1.834\"></circle>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t</use>\n\t\t\t\t\t\t</svg>\n\t\t\t \t\t    </span>123 456 7890</li>\n\t\t\t \t\t<li></li>\n\n\t\t\t \t\t<li>\n\t\t\t \t\t\t<span>\n\t\t\t\t\t\t\t<svg viewBox=\"0 0 90 90\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-mail\">\n\t\t\t\t\t\t\t\t<g id=\"icon-mail\">\n\t\t\t\t\t\t\t\t\t\t<g id=\"g3\" transform=\"translate(-9.4270041,-8.3989983)\">\n\t\t\t\t\t\t\t\t\t\t\t<g id=\"g5\" stroke-miterlimit=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path7\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m34.39,84.566c0.486,0.322,0.981,0.633,1.484,0.933l52.459-44.516c-0.213-0.544-0.438-1.083-0.676-1.614l-53.267,45.197z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path9\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m21.099,68.809c0.232,0.529,0.477,1.052,0.734,1.567l53.855-45.696c-0.468-0.338-0.943-0.665-1.427-0.98l-53.162,45.109z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path11\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m28.967,80.179c0.4,0.393,0.81,0.777,1.228,1.15l54.948-46.625c-0.302-0.473-0.612-0.939-0.935-1.397l-55.241,46.872z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path13\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m18.047,53.421c-0.005,0.259-0.02,0.517-0.02,0.777,0,0.469,0.018,0.934,0.036,1.4l43.678-37.062c-0.709-0.145-1.427-0.263-2.149-0.366l-41.545,35.251z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path15\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m18.822,61.753c0.129,0.613,0.275,1.22,0.436,1.82l50.138-42.542c-0.567-0.257-1.142-0.5-1.724-0.728l-48.85,41.45z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path17\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m48.955,90.187c0.748,0.113,1.508,0.197,2.271,0.264l39.488-33.506c0.057-0.754,0.093-1.513,0.103-2.278l-41.862,35.52z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path19\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m40.886,87.977c0.591,0.237,1.188,0.459,1.794,0.666l47.647-40.428c-0.105-0.632-0.228-1.259-0.365-1.879l-49.076,41.641z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path21\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"M25.498,76.255,80.896,29.25c-0.383-0.406-0.775-0.804-1.176-1.192l-55.208,46.843c0.32,0.459,0.648,0.911,0.986,1.354z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path23\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m60.378,90.104c1.174-0.193,2.328-0.442,3.46-0.746l23.73-20.135c0.489-1.074,0.927-2.176,1.311-3.302l-28.501,24.183z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path25\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m19.857,42.827c-0.312,0.946-0.586,1.908-0.82,2.886l32.776-27.81c-0.998,0.071-1.988,0.173-2.963,0.323l-28.993,24.601z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<polyline id=\"polyline27\" style=\"stroke-linejoin:round;stroke:#c0c0c1;stroke-linecap:round;stroke-miterlimit:10;fill:#c0c0c1;\" points=\"20.359,36.979,44.177,16.768,40.607,17.606,21.234,34.044,20.359,36.979\"></polyline>\n\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle29\" style=\"fill:none;\" d=\"m 92.322002,53.608002 c 0,20.931593 -16.968408,37.900001 -37.900001,37.900001 -20.931593,0 -37.900002,-16.968408 -37.900002,-37.900001 0,-20.931593 16.968409,-37.900002 37.900002,-37.900002 20.931593,0 37.900001,16.968409 37.900001,37.900002 z\" cy=\"53.608\" cx=\"54.422\" r=\"37.9\"></circle>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle31\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m 92.322002,53.608002 c 0,20.931593 -16.968408,37.900001 -37.900001,37.900001 -20.931593,0 -37.900002,-16.968408 -37.900002,-37.900001 0,-20.931593 16.968409,-37.900002 37.900002,-37.900002 20.931593,0 37.900001,16.968409 37.900001,37.900002 z\" cx=\"54.422\" cy=\"53.608\" r=\"37.9\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle33\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m 97.917,53.403999 c 0,24.021625 -19.473375,43.494999 -43.494999,43.494999 -24.021625,0 -43.494999,-19.473374 -43.494999,-43.494999 0,-24.021624 19.473374,-43.4949986 43.494999,-43.4949986 24.021624,0 43.494999,19.4733746 43.494999,43.4949986 z\" cx=\"54.422\" cy=\"53.404\" r=\"43.495\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t<g id=\"g35\" stroke-miterlimit=\"10\" transform=\"translate(-9.4270041,-8.3989983)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<rect id=\"rect37\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:#ffffff;\" height=\"27.849\" width=\"40.254\" y=\"39.48\" x=\"34.295\"></rect>\n\t\t\t\t\t\t\t\t\t\t\t\t<polygon id=\"polygon39\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" points=\"34.295,67.329,54.422,51.307,74.549,67.329\"></polygon>\n\t\t\t\t\t\t\t\t\t\t\t\t<polygon id=\"polygon41\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:#ffffff;\" points=\"34.295,39.48,54.422,56.456,74.549,39.48\"></polygon>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</use>\n\t\t\t\t\t\t\t</svg>\n\t\t\t \t\t\t</span>\n\t\t\t \t\t\t<a href=\"\">bluemonkey@gmail.com</a>\n\t\t\t \t\t</li>\n\t\t\t \t\t<li>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<svg viewBox=\"0 0 90 90\">\n\t\t\t\t\t\t\t\t<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-facebook2\">\n\t\t\t\t\t\t\t\t\t<g id=\"icon-facebook2\">\n\t\t\t\t\t\t\t\t\t\t<g id=\"g3\" transform=\"translate(-12.148005,-10.103001)\">\n\t\t\t\t\t\t\t\t\t\t\t<g id=\"g5\" stroke-miterlimit=\"10\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path7\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m37.111,86.271c0.486,0.322,0.981,0.633,1.484,0.933l52.459-44.516c-0.213-0.544-0.438-1.083-0.676-1.614l-53.267,45.197z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path9\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m23.82,70.513c0.232,0.529,0.477,1.052,0.734,1.567l53.854-45.696c-0.468-0.338-0.943-0.665-1.427-0.98l-53.161,45.109z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path11\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m31.688,81.883c0.4,0.393,0.81,0.777,1.228,1.15l54.948-46.625c-0.302-0.473-0.612-0.939-0.935-1.397l-55.241,46.872z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path13\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m20.769,55.125c-0.005,0.259-0.02,0.517-0.02,0.777,0,0.469,0.018,0.934,0.036,1.4l43.678-37.062c-0.709-0.145-1.427-0.263-2.149-0.366l-41.545,35.251z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path15\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m21.543,63.457c0.129,0.613,0.275,1.22,0.436,1.82l50.138-42.542c-0.567-0.257-1.142-0.5-1.724-0.728l-48.85,41.45z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path17\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m51.676,91.891c0.748,0.113,1.508,0.197,2.271,0.264l39.488-33.506c0.057-0.754,0.093-1.513,0.103-2.278l-41.862,35.52z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path19\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m43.607,89.681c0.591,0.237,1.188,0.459,1.794,0.666l47.647-40.428c-0.105-0.632-0.228-1.259-0.365-1.879l-49.076,41.641z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path21\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"M28.219,77.959,83.617,30.954c-0.383-0.406-0.775-0.804-1.176-1.192l-55.208,46.843c0.32,0.459,0.648,0.911,0.986,1.354z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path23\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m63.1,91.809c1.174-0.193,2.328-0.442,3.46-0.746l23.73-20.135c0.489-1.074,0.927-2.176,1.311-3.302l-28.501,24.183z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path25\" style=\"stroke:#c0c0c1;stroke-miterlimit:10;fill:#c0c0c1;\" d=\"m22.578,44.531c-0.312,0.946-0.586,1.908-0.82,2.886l32.776-27.81c-0.998,0.071-1.988,0.173-2.963,0.323l-28.993,24.601z\"></path>\n\t\t\t\t\t\t\t\t\t\t\t\t<polyline id=\"polyline27\" style=\"stroke-linejoin:round;stroke:#c0c0c1;stroke-linecap:round;stroke-miterlimit:10;fill:#c0c0c1;\" points=\"23.08,38.683,46.898,18.472,43.328,19.311,23.955,35.749,23.08,38.683\"></polyline>\n\t\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle29\" style=\"fill:none;\" d=\"m 95.043003,55.312 c 0,20.931593 -16.968409,37.900002 -37.900001,37.900002 C 36.211409,93.212002 19.243,76.243593 19.243,55.312 c 0,-20.931593 16.968409,-37.900001 37.900002,-37.900001 20.931592,0 37.900001,16.968408 37.900001,37.900001 z\" cy=\"55.312\" cx=\"57.143\" r=\"37.9\"></circle>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle31\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m 95.043003,55.312 c 0,20.931593 -16.968409,37.900002 -37.900001,37.900002 C 36.211409,93.212002 19.243,76.243593 19.243,55.312 c 0,-20.931593 16.968409,-37.900001 37.900002,-37.900001 20.931592,0 37.900001,16.968408 37.900001,37.900001 z\" cx=\"57.143\" cy=\"55.312\" r=\"37.9\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t\t\t\t\t\t\t\t<circle id=\"circle33\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:none;\" d=\"m 100.638,55.108002 c 0,24.021624 -19.473374,43.494999 -43.494998,43.494999 -24.021625,0 -43.494999,-19.473375 -43.494999,-43.494999 0,-24.021625 19.473374,-43.494999 43.494999,-43.494999 24.021624,0 43.494998,19.473374 43.494998,43.494999 z\" cx=\"57.143\" cy=\"55.108\" r=\"43.495\" stroke-miterlimit=\"10\"></circle>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t\t<g id=\"facebook_2_\" transform=\"translate(-12.148005,-10.103001)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<path id=\"path36\" style=\"stroke-linejoin:round;stroke:#5a646a;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3;fill:#ffffff;\" stroke-miterlimit=\"10\" d=\"M60.935,46.091v-5.311c0-1.997,1.321-2.461,2.252-2.461h5.716v-8.768l-7.871-0.031c-8.739,0-10.727,6.539-10.727,10.725v5.846h-5.052v9.035h5.052v25.571h10.63v-25.571h7.172l0.927-9.035h-8.099z\"></path>\n\t\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t\t</g>\n\t\t\t\t\t\t\t\t</use>\n\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<a href=\"\">Follow us on Facebook</a>\n\t\t\t \t\t</li>\n\t\t\t \t</ul>\n\t\t\t \t<div id=\"send_message\">\n\t\t\t \t\t<figure>\n\t\t\t \t\t\t<div>\n\t\t\t \t\t\t\t<span>SEND MESSAGE</span>\n\t\t\t \t\t\t\t<span>SEND MESSAGE</span>\n\t\t\t \t\t\t</div>\n\t\t\t \t\t</figure>\t\n\t\t\t \t</div>\n\t\t\t </div>\n\t\t\t <div class=\"find-us-child find-us-media book_section\">\n\t\t\t \t<figure id=\"book_a_table\">\n\t\t\t \t\t\t<div>\n\t\t\t \t\t\t\t<span>BOOK A TABLE</span>\n\t\t\t \t\t\t\t<span>BOOK A TABLE</span>\n\t\t\t \t\t\t</div>\n\t\t\t \t</figure>\t\n\t\t\t </div>\n\n\t\t</section>\n\t\t<div class=\"carousel\">\n\t\t\t<div id=\"gallery\" class=\"gallery\">\n\t\t\t\t\t<img src=\"../../assets/images/bar_full.jpg\" class=\"first\">\n\t\t\t\t\t<img src=\"../../assets/images/beer_tap.jpg\">\n\t\t\t\t\t<img src=\"../../assets/images/cocktails.jpg\">\n\t\t\t\t\t<img src=\"../../assets/images/dj.jpg\">\n\t\t\t\t\t<img src=\"../../assets/images/pizza.jpg\">\n\t\t\t\t\t<img src=\"../../assets/images/pong.jpg\">\n\t\t\t\t\t<img src=\"../../assets/images/bar_full.jpg\">\n\t\t\t\t\t<img src=\"../../assets/images/beer_tap.jpg\">\n\t\t\t\t\t<img src=\"../../assets/images/cocktails.jpg\">\n\t\t\t\t\t<img src=\"../../assets/images/pizza.jpg\">\n\t\t\t</div>\n\t\t</div>\t\t\n\t</div>\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\t\n\n\t\n\n\t\n</body>\n</html>"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body >\n\n \n\n</body>\n</html>"

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "blue_monkey.c74d0602969afbb5e3c6.jpg";

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "rsz_1blue_monkey.9ce0f72e584ad4397a1b.jpg";

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(107);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(elRef, window) {
        this.elRef = elRef;
        this.window = window;
        this.lat = 9.3104;
        this.lng = 123.3090;
        this.zm = 18;
        this.scroll = false;
        this.style = [{ "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    { "saturation": 1 },
                    { "gamma": 1 },
                    { "visibility": "on" },
                    { "hue": "#e6ff00" }
                ]
            },
            { "elementType": "geometry", "stylers": [
                    { "saturation": -100 }
                ]
            }
        ];
        this.backgroundColor = "#eeeeee";
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // burgers 
        jQuery('.parallax-window').parallax({ imageSrc: '../../assets/burgers.jpg' });
        jQuery('.parallax-window').parallax({
            positionX: 2,
            positionY: -350,
            left: -5,
            bleed: 100
        });
        //fundUs
        // jQuery('.event').parallax({ imageSrc:'../../assets/images/inside.jpg'});
        // jQuery('.event').parallax({
        //  positionX: 2,
        //   positionY: -430,
        //   bleed: 100
        // });
        jQuery("ul").click(function () {
            jQuery('#drawer1').prop('checked', false); // Unchecks it
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(183),
        styles: [__webpack_require__(180)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]) === "function" && _b || Object])
], DashboardComponent);

var _a, _b;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

function _window() {
    return window;
}
var DashboardService = (function () {
    function DashboardService() {
    }
    Object.defineProperty(DashboardService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DashboardService);

//# sourceMappingURL=dashboard.service.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.bundle.js.map