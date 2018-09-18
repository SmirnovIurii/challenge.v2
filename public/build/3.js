webpackJsonp([3],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todolist_todolist_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__ = __webpack_require__(288);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(alertCtrl, navCtrl, todolist, AngAuth, toast, authService) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.todolist = todolist;
        this.AngAuth = AngAuth;
        this.toast = toast;
        this.authService = authService;
        this.todos = "Active";
        this.AngAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.show("Hello, " + data.email, 5000);
            }
            else {
                _this.toast.show('You must login');
            }
        });
        this.Listoftodo$ = this.todolist.
            getTodoList().
            snapshotChanges().
            pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
        this.Listoftodo$.subscribe(function (result) { _this.count = result.length; _this.Active = true; });
        this.ListoftodoFinish$ = this.todolist.
            getTodoListFinish().
            snapshotChanges().
            pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        }));
    }
    HomePage.prototype.countFinished = function () {
        var _this = this;
        this.ListoftodoFinish$.subscribe(function (result) { _this.count = result.length; _this.Active = false; });
    };
    HomePage.prototype.countInProgres = function () {
        var _this = this;
        this.Listoftodo$.subscribe(function (result) { _this.count = result.length; _this.Active = true; });
    };
    HomePage.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Login info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    HomePage.prototype.alertWithAuth = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login',
            message: 'You must login to make changes',
            buttons: [
                {
                    text: 'Login',
                    handler: function () {
                        _this.navCtrl.push('LoginPage');
                    }
                },
                {
                    text: 'Register',
                    handler: function () {
                        _this.navCtrl.push('RegisterPage');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.addTodo = function () {
        var myDate = new Date().toISOString();
        if (this.authService.authenticated) {
            this.navCtrl.push('AddTodoPage');
        }
        else {
            this.alertWithAuth();
        }
    };
    HomePage.prototype.logout = function () {
        this.AngAuth.auth.signOut();
        this.presentAlert('Good Bye!');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Сергей\code\challenge.v1.0.1\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Todo List</ion-title>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button ion-button full (click)=\'addTodo()\'>Add New</button> \n\n  <!--hide buttons on auth -->\n\n  <button navPush="LoginPage" ion-button full *ngIf = "authService.authenticated === false">Login</button>\n\n  <button  ion-button full *ngIf = "authService.authenticated === true" (click)=\'logout()\'>Logout</button>\n\n  <ion-list>\n\n    <ion-list-header>\n\n      Todos\n\n    </ion-list-header>\n\n    <div padding>\n\n      <ion-segment [(ngModel)]="todos">\n\n        <ion-segment-button  (click) = \'countInProgres()\'  value="Active">\n\n          Active\n\n        </ion-segment-button>\n\n        <ion-segment-button (click)=\'countFinished()\' value="Finished">\n\n          Finished\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n    <div [ngSwitch]="todos">\n\n     <ion-list *ngSwitchCase="\'Active\'">\n\n      <ion-item detail-push *ngFor="let todo of Listoftodo$ | async" navPush="EditTodoPage" [navParams]="{todo: todo}">\n\n              <h2>{{ todo.title }}</h2>\n\n              <button ion-button clear item-end> <!--I dont know why i cant see arrows on buttons -->\n\n                  <ion-icon name="arrow-forward"></ion-icon> <!--have to use this for arrows -->\n\n              </button>\n\n      </ion-item>\n\n    </ion-list>\n\n    \n\n    <ion-list *ngSwitchCase="\'Finished\'">\n\n        <ion-item detail-push *ngFor="let todo of ListoftodoFinish$ | async" navPush="EditTodoPage" [navParams]="{todo: todo}">\n\n                <h2>{{ todo.title }}</h2>\n\n                <button ion-button clear item-end>\n\n                    <ion-icon name="arrow-forward"></ion-icon>\n\n                </button>\n\n        </ion-item>\n\n      </ion-list>\n\n    </div>\n\n    \n\n    </ion-list> \n\n    <!--hide footer if inactive segment on auth -->\n\n    <ion-footer *ngIf = "Active === true">\n\n        <ion-toolbar>\n\n          <ion-title> In progress: {{this.count}} </ion-title>\n\n        </ion-toolbar>\n\n      </ion-footer>  \n\n      <ion-footer *ngIf = "Active === false">\n\n          <ion-toolbar>\n\n            <ion-title> Compleated: {{this.count}} </ion-title>\n\n          </ion-toolbar>\n\n      </ion-footer>  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Сергей\code\challenge.v1.0.1\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_todolist_todolist_service__["a" /* TodoListService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=3.js.map