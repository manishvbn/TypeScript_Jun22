"use strict";
var Mode;
(function (Mode) {
    Mode["Read"] = "Read";
    Mode["Write"] = "Write";
    Mode["ReadWrite"] = "ReadWrite";
})(Mode || (Mode = {}));
function Open(mode) {
    console.log("File Opened in \"" + mode + "\" mode");
}
Open(Mode.Read);
Open(Mode.Write);
Open(Mode.ReadWrite);
function f1(x) {
}
function f2(x) {
}
function f3(x) {
}
function f4(x) {
}
