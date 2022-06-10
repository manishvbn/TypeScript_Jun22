"use strict";
var Control = (function () {
    function Control() {
    }
    Control.prototype.focus = function () {
        return "The control is in focus...";
    };
    return Control;
}());
var SelectableControl = (function () {
    function SelectableControl() {
    }
    SelectableControl.prototype.select = function () {
        return "The control is selected...";
    };
    return SelectableControl;
}());
var Button = (function () {
    function Button() {
    }
    return Button;
}());
applyMixins(Button, [Control, SelectableControl]);
var button = new Button();
console.log(button.focus());
console.log(button.select());
function applyMixins(derivedCtor, constructors) {
    constructors.forEach(function (baseCtor) {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null));
        });
    });
}
