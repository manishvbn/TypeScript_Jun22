"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var emp = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411021 };
var id = emp.id, ename = emp.ename, address = __rest(emp, ["id", "ename"]);
console.log("Id: ", id);
console.log("Name: ", ename);
console.log("Address: ", address);
