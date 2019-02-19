(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.host = '';
    }
    ApiService.prototype.login = function (email, password) {
        return this.http.post(this.host + "/auth/login", {
            email: email,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.signin = function (email, password) {
        return this.http.post(this.host + "/auth/signup", {
            email: email,
            password: password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.sendTokens = function (reciever, privateKey, amount) {
        return this.http.post(this.host + "/transact/send", {
            reciever: reciever,
            private_key: privateKey,
            amount: amount
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.sendIHubTokens = function (reciever, privateKey, amount, issuer) {
        return this.http.post(this.host + "/transact/send_ihubtokens", {
            reciever: reciever,
            private_key: privateKey,
            amount: amount,
            asset_issuer: issuer
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.viewAccountBalance = function (accountId) {
        return this.http.get(this.host + "/balance/" + accountId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.viewTransactionHistory = function (accountId) {
        return this.http.get(this.host + "/transactions/" + accountId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    // Updated from /transact/send to /accounts/create_new_issuer
    ApiService.prototype.issueIhubTokens = function (key, balance, assetBalance, email, password) {
        return this.http.post(this.host + "/accounts/create_new_issuer", {
            private_key: key,
            balance: balance,
            email: email,
            password: password,
            assetBalance: assetBalance
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    // create a trustline
    ApiService.prototype.createTrustLine = function (key, asset_code, asset_issuer) {
        return this.http.post(this.host + "/accounts/create_trustline", {
            private_key: key,
            asset_code: asset_code,
            asset_issuer: asset_issuer
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.getAccountDetails = function (key) {
        return this.http.post(this.host + "/accounts/get_details", {
            private_key: key
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.getAssets = function () {
        return this.http.get(this.host + "/assets/assets").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService.prototype.authorizeAccount = function (key, account) {
        return this.http.post(this.host + "/accounts/allow_trust", {
            private_key: key,
            recipient: account
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");






var routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "signin", component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.example-icon {\r\n    padding: 0 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0NBQ2xCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uZXhhbXBsZS1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>Raise Demo</span>\n  <span class=\"spacer\"></span>\n  <span>\n    <div>\n      <mat-icon (click)=\"logout()\" class=\"example-icon\">verified_user</mat-icon>\n    </div>\n  </span>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.localStorage.getItem('token') === null) {
            this.router.navigate(['/login']).then(function (done) {
                console.log(done);
            }).catch(function (err) {
                console.log(err);
            });
        }
        else {
            // user is logged in
            console.log(true);
        }
    };
    AppComponent.prototype.logout = function () {
        this.router.navigate(['/login']).then(function (done) {
            window.localStorage.clear();
        }).catch(function (err) {
            console.log(err);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_10__["SigninComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["SendTokenComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["IssueIhubTokenComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["TransferIhubTokenComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
            ],
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [_home_home_component__WEBPACK_IMPORTED_MODULE_11__["SendTokenComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["IssueIhubTokenComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["TransferIhubTokenComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br>\r\n\r\n    <div class=\"btn-group\" role=\"group\">\r\n        <button class=\"btn btn-warning btn-sm\" (click)=\"issueTokensDialog()\">Create Issuing Account</button>\r\n        <button class=\"btn btn-secondary btn-sm\" (click)=\"transactTokensDialog()\"> Send iHub Common Shares</button>\r\n        <button class=\"btn btn-primary btn-sm\" (click)=\"sendTokensDialog()\"> Send Shares </button>\r\n        <button class=\"btn btn-primary btn-sm\" (click)=\"authAccount()\"> Authorize Account </button>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <br>\r\n            <h3>Balances</h3>\r\n            <div class=\"d-flex flex-wrap\">\r\n                <div class=\"card m-1\"  *ngFor=\"let balance of balances\" style=\"width: 500px;\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-title\">{{balance.asset_code}}</div>\r\n                        <div class=\"card-subtitle mb-2 text-muted\">{{balance.balance}}</div>\r\n                        <div class=\"card-text\">Issuer: {{balance.asset_issuer}}</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <br>\r\n            <h3>Asset Market</h3>\r\n            <div class=\"d-flex flex-wrap\">\r\n                <div class=\"card m-1\" *ngFor=\"let asset of assets\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-title\">{{asset.asset_code}}</div>\r\n                        <div class=\"card-subtitle mb-2 text-muted\">{{asset.asset_issuer}}</div>\r\n                        <div class=\"card-text\">\r\n                            <button (click)=\"acceptAsset(asset)\" class=\"btn btn-sm btn-success\">Accept Asset</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent, SendTokenComponent, IssueIhubTokenComponent, TransferIhubTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendTokenComponent", function() { return SendTokenComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueIhubTokenComponent", function() { return IssueIhubTokenComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferIhubTokenComponent", function() { return TransferIhubTokenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(api, dialog, snack) {
        this.api = api;
        this.dialog = dialog;
        this.snack = snack;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getBalances();
        this.getAssets();
    };
    HomeComponent.prototype.getBalances = function () {
        var _this = this;
        this.api.viewAccountBalance(window.localStorage.getItem('account')).subscribe(function (data) {
            if (data.ok === true) {
                _this.balances = data.balances;
                console.log(data);
            }
            else {
                alert(data.message);
            }
        });
    };
    HomeComponent.prototype.getAssets = function () {
        var _this = this;
        this.api.getAssets().subscribe(function (data) {
            _this.assets = data.data;
            console.log(data);
        });
    };
    HomeComponent.prototype.authAccount = function () {
        var _this = this;
        var account = prompt('Account ID: ', '');
        var key = prompt('Private Key: ', '');
        this.api.authorizeAccount(key, account).subscribe(function (data) {
            if (data.ok === true) {
                _this.snack.open('Successfully authorized, you can now make a transfer', 'OK', {
                    duration: 3000
                });
            }
        });
    };
    HomeComponent.prototype.acceptAsset = function (asset) {
        var _this = this;
        var key = prompt('Enter your Private Key: ', '');
        this.api.createTrustLine(key, asset.asset_code, asset.asset_issuer).subscribe(function (data) {
            if (data.ok === true) {
                _this.snack.open('Success, you can now recieve these assets', 'ok', {
                    duration: 3000
                });
                _this.getBalances();
            }
        });
    };
    HomeComponent.prototype.sendTokensDialog = function () {
        var dialogref = this.dialog.open(SendTokenComponent, {
            width: '300px'
        });
        dialogref.afterClosed().subscribe(function (info) {
            console.log(info);
        });
    };
    HomeComponent.prototype.issueTokensDialog = function () {
        var dialogref = this.dialog.open(IssueIhubTokenComponent, {
            width: '300px'
        });
        dialogref.afterClosed().subscribe(function (info) {
            console.log(info);
        });
    };
    HomeComponent.prototype.transactTokensDialog = function () {
        var dialogref = this.dialog.open(TransferIhubTokenComponent, {
            width: '300px'
        });
        dialogref.afterClosed().subscribe(function (info) {
            console.log(info);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());

// send tokens component
var SendTokenComponent = /** @class */ (function () {
    function SendTokenComponent(dialogRef, data, api, snack) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.api = api;
        this.snack = snack;
    }
    SendTokenComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SendTokenComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        var key = prompt('Enter your private key: ', '');
        this.api.sendTokens(this.reciever, key, this.amount).subscribe(function (data) {
            console.log(data);
            if (data.ok === true) {
                _this.dialogRef.close();
            }
            else {
                _this.snack.open(data.message, 'OK', {
                    duration: 3000
                });
                _this.dialogRef.close();
            }
        });
    };
    SendTokenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-send-tokens',
            template: __webpack_require__(/*! ./send-tokens.html */ "./src/app/home/send-tokens.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SendTokenComponent);
    return SendTokenComponent;
}());

// issue new iHub tokens
var IssueIhubTokenComponent = /** @class */ (function () {
    function IssueIhubTokenComponent(dialogRef, data, api, snack) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.api = api;
        this.snack = snack;
    }
    IssueIhubTokenComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    IssueIhubTokenComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        this.api.issueIhubTokens(this.private_key, this.balance, this.assetBalance, this.email, this.password).subscribe(function (data) {
            if (data.ok === true) {
                _this.dialogRef.close();
                _this.snack.open("Your Issuing account private key: " + data.data.key + ".", 'Copied!', {
                    duration: 15000
                });
            }
            else {
                _this.dialogRef.close();
            }
        });
    };
    IssueIhubTokenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-tokens',
            template: __webpack_require__(/*! ./issue-ihub-tokens.html */ "./src/app/home/issue-ihub-tokens.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], IssueIhubTokenComponent);
    return IssueIhubTokenComponent;
}());

// transfer iHub tokens
var TransferIhubTokenComponent = /** @class */ (function () {
    function TransferIhubTokenComponent(dialogRef, data, api, snack) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.api = api;
        this.snack = snack;
    }
    TransferIhubTokenComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TransferIhubTokenComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        var key = prompt('Enter your private key: ', '');
        this.api.sendIHubTokens(this.reciever, key, this.amount, this.issuer)
            .subscribe(function (data) {
            if (data.ok === true) {
                _this.dialogRef.close();
            }
            else {
                _this.snack.open(data.message, 'OK', {
                    duration: 5000
                });
                _this.dialogRef.close();
            }
        });
    };
    TransferIhubTokenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-transfer-tokens',
            template: __webpack_require__(/*! ./send-ihub-tokens.html */ "./src/app/home/send-ihub-tokens.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], TransferIhubTokenComponent);
    return TransferIhubTokenComponent;
}());



/***/ }),

/***/ "./src/app/home/issue-ihub-tokens.html":
/*!*********************************************!*\
  !*** ./src/app/home/issue-ihub-tokens.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Create an account and issue new tokens.</h3>\r\n\r\n<div class=\"container\">\r\n    <form (submit)=\"onSubmit($event)\">\r\n        <input class=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" type=\"text\" placeholder=\"Send Lumens(optional)\" [(ngModel)]=\"balance\" />\r\n        <br>\r\n        <input type=\"text\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\"  placeholder=\"Amount of Assets\" [(ngModel)]=\"assetBalance\">\r\n        <br>\r\n        <input type=\"email\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"email\" [(ngModel)]=\"email\">\r\n        <br>\r\n        <input type=\"password\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"password\" [(ngModel)]=\"password\">\r\n        <br>\r\n        <input type=\"password\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control\" placeholder=\"private key\" [(ngModel)]=\"private_key\">\r\n        <br>\r\n        <button type=\"submit\" class=\"btn btn-success\">Create an Issuing account.</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/home/send-ihub-tokens.html":
/*!********************************************!*\
  !*** ./src/app/home/send-ihub-tokens.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Send iHub Tokens</h3>\r\n\r\n<div class=\"container\">\r\n    <form (submit)=\"onSubmit($event)\">\r\n        <input class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" placeholder=\"Reciever Public Key\" [(ngModel)]=\"reciever\" />\r\n        <br>\r\n        <input class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" placeholder=\"Asset Issuer\" [(ngModel)]=\"issuer\" />\r\n        <br>\r\n        <input class=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" type=\"number\" placeholder=\"Amount (IHUBTOKEN)\" [(ngModel)]=\"amount\" />\r\n        <br>\r\n        <button type=\"submit\" class=\"btn btn-success\">Send</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/home/send-tokens.html":
/*!***************************************!*\
  !*** ./src/app/home/send-tokens.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Send Account Native Tokens</h3>\r\n\r\n<div class=\"container\">\r\n    <form (submit)=\"onSubmit($event)\">\r\n        <input class=\"form-control\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" placeholder=\"Reciever Public Key\" [(ngModel)]=\"reciever\" />\r\n        <br>\r\n        <input class=\"form-control\"  [ngModelOptions]=\"{standalone: true}\" type=\"number\" placeholder=\"Amount (Lumens)\" [(ngModel)]=\"amount\" />\r\n        <br>\r\n        <button type=\"submit\" class=\"btn btn-success\">Send</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"6\" rowHeight=\"400px\">\n  <mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n  <mat-grid-tile [colspan]=\"4\">\n    <mat-card style=\"width: 400px\">\n      <mat-card-content>\n          <h4>Login to your account</h4>\n          <a routerLink=\"/signin\">Create a new account</a>\n          <br>\n      \n          <form (submit)=\"onSubmit($event)\">\n            <mat-form-field style=\"width: 380px\">\n              <input matInput placeholder=\"email\" name=\"email\" [(ngModel)]=\"email\" type=\"text\" required />\n            </mat-form-field>\n            <br>\n            <mat-form-field style=\"width: 380px\">\n              <input matInput placeholder=\"password\" name=\"password\" [(ngModel)]=\"password\" type=\"password\" required />\n            </mat-form-field>\n            <br>\n            <button style=\"width: 380px\" full mat-raised-button type=\"submit\">Login</button>\n          </form>\n      </mat-card-content>\n    </mat-card>\n  </mat-grid-tile>\n  <mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n</mat-grid-list>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, router) {
        this.api = api;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        this.api.login(this.email, this.password).subscribe(function (data) {
            if (data.ok === true) {
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('account', data.account);
                _this.router.navigate(['/']).then(function (done) {
                    // skip since nothing happens
                }).catch(function (err) { console.log(err); });
            }
            else {
                alert(data.message);
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"6\" rowHeight=\"400px\">\n    <mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n    <mat-grid-tile [colspan]=\"4\">\n      <mat-card style=\"width: 400px\">\n        <mat-card-content>\n            <h4>Create a new account with us.</h4>\n            <br>\n        \n            <form (submit)=\"onSubmit($event)\">\n              <mat-form-field style=\"width: 380px\">\n                <input matInput placeholder=\"email\" name=\"email\" type=\"text\" [(ngModel)]=\"email\" required />\n              </mat-form-field>\n              <br>\n              <mat-form-field style=\"width: 380px\">\n                <input matInput placeholder=\"password\" name=\"password\" [(ngModel)]=\"password\" type=\"password\" required />\n              </mat-form-field>\n              <br>\n              <button style=\"width: 380px\" mat-raised-button type=\"submit\">Sign In</button>\n            </form>\n        </mat-card-content>\n      </mat-card>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\"></mat-grid-tile>\n  </mat-grid-list>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var SigninComponent = /** @class */ (function () {
    function SigninComponent(api, router, snack) {
        this.api = api;
        this.router = router;
        this.snack = snack;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSubmit = function (e) {
        var _this = this;
        e.preventDefault();
        this.api.signin(this.email, this.password).subscribe(function (data) {
            if (data.ok === true) {
                window.localStorage.setItem('token', data.token);
                window.localStorage.setItem('account', data.account);
                _this.router.navigate(['/']).then(function (done) {
                    // skip since nothing happens
                    _this.snack.open("Your private key is " + data.key + " , this will disappear in 10 seconds, copy somewhere safe", 'Copied!', {
                        duration: 15000
                    });
                }).catch(function (err) { console.log(err); });
            }
            else {
                alert(data.message);
            }
        });
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            providers: [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]],
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\stellar\intro-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map