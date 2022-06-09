"use strict";
var fname = "Manish";
var lname = "Sharma";
var message1 = "Hello, " + fname + " " + lname;
console.log(message1);
var message2 = "Hello, ".concat(fname, " ").concat(lname);
console.log(message2);
