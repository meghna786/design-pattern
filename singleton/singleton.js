"use strict";
exports.__esModule = true;
exports.Client = void 0;
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (this.instance !== null)
            return this.instance;
        else
            return new Singleton();
    };
    Singleton.instance = null;
    return Singleton;
}());
var Client = /** @class */ (function () {
    function Client() {
    }
    Client.prototype.main = function () {
        var singletonObj = Singleton.getInstance();
        console.log('SingleTon Obj is :', singletonObj);
    };
    return Client;
}());
exports.Client = Client;
window.Client = Client;
