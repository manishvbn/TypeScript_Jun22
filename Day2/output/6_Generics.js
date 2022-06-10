"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function mergeObject(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var rObj1 = mergeObject({ id: 1 }, { name: "Manish" });
console.log(rObj1);
var rObj2 = mergeObject(1, true);
console.log(rObj2);
