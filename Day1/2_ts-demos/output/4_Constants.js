"use strict";
var obj = { id: 1 };
console.log(obj);
obj.id = 1000;
console.log(obj);
delete obj.id;
console.log(obj);
