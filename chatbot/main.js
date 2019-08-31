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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<chat-dialog></chat-dialog>"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'chatbot';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_4__["ChatModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.css":
/*!************************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message {\n  border-radius: 50px;\n  margin: 0 0px 10px;\n  padding: 15px 20px;\n  position: relative;\n  font-weight: bold;\n}\n\n.message.to {\n  background-color: #2095FE;\n  color: #fff;\n  margin-left: 100px;\n  text-align: right;\n}\n\n.message.from {\n  background-color: #9b4dca;\n  color: #363636;\n  margin-right: 100px;\n}\n\n.message.to+.message.to, .message.from+.message.from {\n  margin-top: -9px;\n}\n\n.chat {\n  width: 400px;\n  height: 400px;\n  margin: 0 auto;\n  border: 1px solid black;\n  position: relative;\n}\n\n.scrollable {\n  overflow-y: auto;\n  overflow-x: hidden;\n  min-height: 70%;\n  max-height: 70%;\n  width: 100%;\n  position: absolute;\n  background-color: #f3f3f3;\n}\n\n.chat-controls {\n  bottom: 0;\n  position: absolute;\n  width: 100%;\n  max-height: 30%;\n}\n\n.welcomeMessage {\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LWRpYWxvZy9jaGF0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LWRpYWxvZy9jaGF0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW46IDAgMHB4IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1lc3NhZ2UudG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5NUZFO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1lc3NhZ2UuZnJvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5YjRkY2E7XG4gIGNvbG9yOiAjMzYzNjM2O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4ubWVzc2FnZS50bysubWVzc2FnZS50bywgLm1lc3NhZ2UuZnJvbSsubWVzc2FnZS5mcm9tIHtcbiAgbWFyZ2luLXRvcDogLTlweDtcbn1cblxuLmNoYXQge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2Nyb2xsYWJsZSB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgbWluLWhlaWdodDogNzAlO1xuICBtYXgtaGVpZ2h0OiA3MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbi5jaGF0LWNvbnRyb2xzIHtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAzMCU7XG59XG5cbi53ZWxjb21lTWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.html":
/*!*************************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat\">\n  <!-- <h1>Bot</h1> -->\n\n  <div class=\"scrollable\">\n\n    <div class=\"welcomeMessage\" *ngIf=\"!firstInteraction\">\n      <hr>\n      <h5>Write something down below and press enter</h5>\n    </div>\n\n    <ng-container *ngFor=\"let message of messages | async\">\n\n      <div class=\"message\" *ngIf=\"isTypeTextMessage(message)\" [ngClass]=\"{ 'from': message.sentBy === 'bot',\n                                    'to':   message.sentBy === 'user' }\">\n        {{ message.content }}\n      </div>\n\n    </ng-container>\n\n    <chat-suggestion *ngIf=\"isSuggestionAvailable()\" [suggestions]=\"suggestions.content\"\n      (autoReply)=\"autoReply($event)\">\n    </chat-suggestion>\n\n  </div>\n\n  <div class=\"chat-controls\">\n\n    <label for=\"nameField\">Your Message</label>\n\n    <input [(ngModel)]=\"formValue\" (keyup.enter)=\"sendMessage()\" type=\"text\">\n\n    <button (click)=\"sendMessage()\">Send</button>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat-dialog/chat-dialog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/chat-dialog/chat-dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: ChatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDialogComponent", function() { return ChatDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ChatDialogComponent = /** @class */ (function () {
    function ChatDialogComponent(chat) {
        var _this = this;
        this.chat = chat;
        this.subscription = this.chat.getOnNewSuggestionEmitter().subscribe(function (suggestions) { return _this.newSuggestions(suggestions); });
    }
    ChatDialogComponent.prototype.ngOnInit = function () {
        this.messages = this.chat.conversation.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, val) { return acc.concat(val); }));
        this.firstInteraction = false;
    };
    ChatDialogComponent.prototype.sendMessage = function () {
        if (this.formValue.length > 0) {
            this.firstInteraction = true;
            this.suggestions = new _chat_service__WEBPACK_IMPORTED_MODULE_1__["SuggestionCluster"]([]);
            this.chat.converse(this.formValue);
            this.formValue = '';
        }
    };
    ChatDialogComponent.prototype.isTypeTextMessage = function (message) {
        return message.constructor.name === 'TextMessage';
    };
    ChatDialogComponent.prototype.isSuggestionAvailable = function () {
        if (this.suggestions && this.suggestions.content) {
            return this.suggestions.content.length > 0;
        }
        return false;
    };
    ChatDialogComponent.prototype.newSuggestions = function (suggestions) {
        this.suggestions = suggestions;
    };
    ChatDialogComponent.prototype.autoReply = function (event) {
        this.suggestions = new _chat_service__WEBPACK_IMPORTED_MODULE_1__["SuggestionCluster"]([]);
        this.chat.converse(event);
    };
    ChatDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'chat-dialog',
            template: __webpack_require__(/*! ./chat-dialog.component.html */ "./src/app/chat/chat-dialog/chat-dialog.component.html"),
            styles: [__webpack_require__(/*! ./chat-dialog.component.css */ "./src/app/chat/chat-dialog/chat-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]])
    ], ChatDialogComponent);
    return ChatDialogComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-suggestion/chat-suggestion.component.css":
/*!********************************************************************!*\
  !*** ./src/app/chat/chat-suggestion/chat-suggestion.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".suggestion-container {\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 100%;\r\n}\r\n\r\n.suggestion {\r\n  border-radius: 50px;\r\n  margin: 0 15px 10px;\r\n  padding: 3px 5px;\r\n  position: relative;\r\n  font-weight: bold;\r\n  background-color: #FFCF40;\r\n  color: #fff;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LXN1Z2dlc3Rpb24vY2hhdC1zdWdnZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LXN1Z2dlc3Rpb24vY2hhdC1zdWdnZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VnZ2VzdGlvbi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3VnZ2VzdGlvbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW46IDAgMTVweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkNGNDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat-suggestion/chat-suggestion.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/chat/chat-suggestion/chat-suggestion.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"suggestion-container\">\n  <div class=\"suggestion\" *ngFor=\"let suggestion of suggestions; let i = index\" (click)=\"suggestionSelected(i)\">\n      {{ suggestion }}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat-suggestion/chat-suggestion.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/chat/chat-suggestion/chat-suggestion.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChatSuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatSuggestionComponent", function() { return ChatSuggestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatSuggestionComponent = /** @class */ (function () {
    function ChatSuggestionComponent() {
        this.autoReply = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChatSuggestionComponent.prototype.ngOnInit = function () {
    };
    ChatSuggestionComponent.prototype.suggestionSelected = function (i) {
        this.autoReply.emit(this.suggestions[i]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ChatSuggestionComponent.prototype, "suggestions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ChatSuggestionComponent.prototype, "autoReply", void 0);
    ChatSuggestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line: component-selector
            selector: 'chat-suggestion',
            template: __webpack_require__(/*! ./chat-suggestion.component.html */ "./src/app/chat/chat-suggestion/chat-suggestion.component.html"),
            styles: [__webpack_require__(/*! ./chat-suggestion.component.css */ "./src/app/chat/chat-suggestion/chat-suggestion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatSuggestionComponent);
    return ChatSuggestionComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat-text-message/chat-text-message.component.css":
/*!************************************************************************!*\
  !*** ./src/app/chat/chat-text-message/chat-text-message.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC10ZXh0LW1lc3NhZ2UvY2hhdC10ZXh0LW1lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/chat/chat-text-message/chat-text-message.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/chat/chat-text-message/chat-text-message.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chat-text-message works!\n</p>\n"

/***/ }),

/***/ "./src/app/chat/chat-text-message/chat-text-message.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/chat/chat-text-message/chat-text-message.component.ts ***!
  \***********************************************************************/
/*! exports provided: ChatTextMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatTextMessageComponent", function() { return ChatTextMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatTextMessageComponent = /** @class */ (function () {
    function ChatTextMessageComponent() {
    }
    ChatTextMessageComponent.prototype.ngOnInit = function () {
    };
    ChatTextMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'chat-text-message',
            template: __webpack_require__(/*! ./chat-text-message.component.html */ "./src/app/chat/chat-text-message/chat-text-message.component.html"),
            styles: [__webpack_require__(/*! ./chat-text-message.component.css */ "./src/app/chat/chat-text-message/chat-text-message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatTextMessageComponent);
    return ChatTextMessageComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-dialog/chat-dialog.component */ "./src/app/chat/chat-dialog/chat-dialog.component.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat/chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _chat_suggestion_chat_suggestion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-suggestion/chat-suggestion.component */ "./src/app/chat/chat-suggestion/chat-suggestion.component.ts");
/* harmony import */ var _chat_text_message_chat_text_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-text-message/chat-text-message.component */ "./src/app/chat/chat-text-message/chat-text-message.component.ts");








var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChatDialogComponent"], _chat_suggestion_chat_suggestion_component__WEBPACK_IMPORTED_MODULE_6__["ChatSuggestionComponent"], _chat_text_message_chat_text_message_component__WEBPACK_IMPORTED_MODULE_7__["ChatTextMessageComponent"]],
            exports: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChatDialogComponent"]],
            providers: [
                _chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.service.ts":
/*!**************************************!*\
  !*** ./src/app/chat/chat.service.ts ***!
  \**************************************/
/*! exports provided: Message, SuggestionCluster, TextMessage, Card, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionCluster", function() { return SuggestionCluster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMessage", function() { return TextMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api-ai-javascript/es6/ApiAiClient */ "./node_modules/api-ai-javascript/es6/ApiAiClient.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);





var Message = /** @class */ (function () {
    function Message(sentBy) {
        this.sentBy = sentBy;
    }
    return Message;
}());

var SuggestionCluster = /** @class */ (function () {
    function SuggestionCluster(content) {
        this.content = content;
    }
    return SuggestionCluster;
}());

var TextMessage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TextMessage, _super);
    function TextMessage(content, sentBy) {
        var _this = _super.call(this, sentBy) || this;
        _this.content = content;
        _this.sentBy = sentBy;
        return _this;
    }
    return TextMessage;
}(Message));

var Card = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Card, _super);
    function Card(title, imageUrl) {
        var _this = _super.call(this, 'bot') || this;
        _this.title = title;
        _this.imageUrl = imageUrl;
        return _this;
    }
    return Card;
}(Message));

var ChatService = /** @class */ (function () {
    function ChatService() {
        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dialogflow.portfolioGuardian;
        this.client = new api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__["ApiAiClient"]({ accessToken: this.token });
        this.conversation = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.onNewSuggestion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChatService.prototype.update = function (msgs) {
        for (var _i = 0, msgs_1 = msgs; _i < msgs_1.length; _i++) {
            var msg = msgs_1[_i];
            this.conversation.next([msg]);
        }
    };
    ChatService.prototype.extractTextMessage = function (speech) {
        return new TextMessage(speech, 'bot');
    };
    ChatService.prototype.extractSuggestions = function (suggestions) {
        return new SuggestionCluster(suggestions);
    };
    ChatService.prototype.extractDataFromResponse = function (dialog) {
        var agentResponse = [];
        if (dialog.result.fulfillment) {
            if (dialog.result.fulfillment.speech) {
                agentResponse.push(this.extractTextMessage(dialog.result.fulfillment.speech));
            }
            else {
                if (dialog.result.fulfillment.messages) {
                    if (dialog.result.fulfillment.messages[0] && dialog.result.fulfillment.messages[0].speech) {
                        agentResponse.push(this.extractTextMessage(dialog.result.fulfillment.messages[0].speech));
                    }
                    if (dialog.result.fulfillment.messages[1] && dialog.result.fulfillment.messages[1].replies) {
                        this.newSuggestions(this.extractSuggestions(dialog.result.fulfillment.messages[1].replies));
                    }
                }
            }
        }
        return agentResponse;
    };
    ChatService.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new TextMessage(msg, 'user');
        this.update([userMessage]);
        return this.client.textRequest(msg)
            .then(function (res) {
            _this.update(_this.extractDataFromResponse(res));
        });
    };
    ChatService.prototype.newSuggestions = function (suggestions) {
        this.onNewSuggestion.emit(suggestions);
    };
    ChatService.prototype.getOnNewSuggestionEmitter = function () {
        return this.onNewSuggestion;
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatService);
    return ChatService;
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
    production: false,
    dialogflow: {
        portfolioGuardian: 'd0585f9afeca4f55b248af2f51aabb86'
    }
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

module.exports = __webpack_require__(/*! C:\Users\jorge\Documents\Projects\chatbot\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map