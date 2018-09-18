webpackJsonp([4],{

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTodoPageModule", function() { return EditTodoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_todo__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditTodoPageModule = /** @class */ (function () {
    function EditTodoPageModule() {
    }
    EditTodoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_todo__["a" /* EditTodoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_todo__["a" /* EditTodoPage */]),
            ],
        })
    ], EditTodoPageModule);
    return EditTodoPageModule;
}());

//# sourceMappingURL=edit-todo.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTodoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_todolist_todolist_service__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__(288);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EditTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditTodoPage = /** @class */ (function () {
    function EditTodoPage(navCtrl, navParams, todolist, toast, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todolist = todolist;
        this.toast = toast;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.dateAndTime = new Date().toISOString();
    }
    EditTodoPage.prototype.presentAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Login info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    EditTodoPage.prototype.alertWithAuth = function () {
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
    EditTodoPage.prototype.ionViewWillLoad = function () {
        this.todo = (this.navParams.get('todo'));
        var newDate = new Date(this.todo.time);
        newDate.setHours(newDate.getHours() - (newDate.getTimezoneOffset() / 60));
        this.timezoneDate = newDate.toISOString();
    };
    EditTodoPage.prototype.EditTodo = function (todo) {
        var _this = this;
        if (this.authService.authenticated) {
            todo.time = this.dateAndTime;
            todo.added = this.authService.currentUser.email;
            this.todolist.editTodo(todo).then(function () {
                _this.toast.show(todo.description + " changed");
                _this.navCtrl.setRoot('HomePage');
            });
        }
        else {
            this.alertWithAuth();
        }
    };
    EditTodoPage.prototype.FinishTodo = function (todo) {
        var _this = this;
        if (this.authService.authenticated) {
            this.todolist.finishTodo(todo).then(function () {
                _this.toast.show(todo.description + " finished");
                _this.navCtrl.setRoot('HomePage');
            });
        }
        else {
            this.alertWithAuth();
        }
    };
    EditTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-todo',template:/*ion-inline-start:"C:\Users\Сергей\code\challenge.v1.0.1\src\pages\edit-todo\edit-todo.html"*/'<!--\n\n  Generated template for the EditTodoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color = "primary">\n\n    <ion-title>{{todo?.description}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-item>\n\n        <ion-label>Title</ion-label>\n\n        <ion-input [(ngModel)] = "todo.title" placeholder = "something new to do"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Description</ion-label>\n\n        <ion-input [(ngModel)] = "todo.description" placeholder = ""></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Crated By</ion-label>\n\n        <ion-input [(ngModel)] = "todo.added" disabled="true"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Time</ion-label>\n\n        <ion-datetime [(ngModel)] = "timezoneDate" disabled="true" displayFormat="MMM DD, YYYY hh:mm A"></ion-datetime>\n\n      </ion-item>\n\n\n\n      <button (click) = "EditTodo(todo)" ion-button block clear>Edit</button>\n\n      <button (click) = "FinishTodo(todo)" ion-button block clear>Finish</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Сергей\code\challenge.v1.0.1\src\pages\edit-todo\edit-todo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_todolist_todolist_service__["a" /* TodoListService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditTodoPage);
    return EditTodoPage;
}());

//# sourceMappingURL=edit-todo.js.map

/***/ })

});
//# sourceMappingURL=4.js.map