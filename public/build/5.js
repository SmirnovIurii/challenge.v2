webpackJsonp([5],{

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoPageModule", function() { return AddTodoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_todo__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddTodoPageModule = /** @class */ (function () {
    function AddTodoPageModule() {
    }
    AddTodoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_todo__["a" /* AddTodoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_todo__["a" /* AddTodoPage */]),
            ],
        })
    ], AddTodoPageModule);
    return AddTodoPageModule;
}());

//# sourceMappingURL=add-todo.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTodoPage; });
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
 * Generated class for the AddTodoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTodoPage = /** @class */ (function () {
    function AddTodoPage(navCtrl, navParams, todolist, toast, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.todolist = todolist;
        this.toast = toast;
        this.authService = authService;
        this.aDate = new Date();
        this.todo = {
            title: '',
            description: '',
            added: this.authService.currentUser.email,
            time: ''
        };
    }
    AddTodoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddTodoPage');
    };
    AddTodoPage.prototype.addTodo = function (todo) {
        var _this = this;
        todo.time = this.aDate.toUTCString();
        todo.added = this.authService.currentUser.email;
        this.todolist.addTodo(todo).then(function (ref) {
            _this.toast.show(todo.description + " added");
            _this.navCtrl.setRoot('HomePage', { key: ref.key });
        });
    };
    AddTodoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-todo',template:/*ion-inline-start:"C:\Users\Сергей\code\challenge.v1.0.1\src\pages\add-todo\add-todo.html"*/'<!--\n\n  Generated template for the AddTodoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color = "primary">\n\n    <ion-title>Add New ToDo</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<ion-item>\n\n  <ion-label>Title</ion-label>\n\n   <ion-input [(ngModel)] = "todo.title" placeholder = "Title"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>Description</ion-label>\n\n  <ion-input [(ngModel)] = "todo.description" placeholder = "something new to do"></ion-input>\n\n</ion-item>\n\n<ion-item>\n\n  <ion-label>AddedBy</ion-label>\n\n  <ion-input [(ngModel)] = "todo.added" disabled="true"></ion-input>\n\n</ion-item>\n\n<button (click) = "addTodo(todo)" ion-button block clear>Add</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Сергей\code\challenge.v1.0.1\src\pages\add-todo\add-todo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_todolist_todolist_service__["a" /* TodoListService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]])
    ], AddTodoPage);
    return AddTodoPage;
}());

//# sourceMappingURL=add-todo.js.map

/***/ })

});
//# sourceMappingURL=5.js.map