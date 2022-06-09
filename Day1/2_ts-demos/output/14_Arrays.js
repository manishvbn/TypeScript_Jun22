"use strict";
var empList;
empList = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Ramakant", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" },
    { id: 4, name: "Subodh", city: "Mumbai" },
    { id: 5, name: "Abhishek", city: "Mathura" }
];
var r1 = empList.find(function (e) { return e.id === 4; });
console.log(r1);
var r2 = empList.findIndex(function (e) { return e.id === 4; });
console.log(r2);
var names = empList.map(function (e) { return e.name.toUpperCase(); });
console.log(names);
var ids = empList.map(function (e) { return e.id; });
console.log(ids);
