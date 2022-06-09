// Global Scope
// Module Scope (If Module is enabled) - Local to the Module (File)
// Local Scope (Function Scope)
// Block Scope (Using let and const keyword)

// var i = 20;
// var i = 30;
// console.log(i);

// var j = 20;
// // var j = "abc";              // Error: Subsequent variable declarations must have the same type.
// console.log(j);

// var i = 20;

// function test() {
//     var i = "Hello";
//     console.log("Inside Function: ", i);
// }

// test();
// console.log("Outside Function: ", i);

// Using var keyword, you will get, either Global, Module or Function Scoping
// var does not support Block Scoping

// var i = 20;

// function test() {
//     if (true) {
//         var i = "Hello";                    // Scope is Function
//         console.log("Inside, if block: ", i);
//     }
//     console.log("Inside Function: ", i);
// }

// test();
// console.log("Outside Function: ", i);

// var i = 100;
// console.log("Before, i is", i);

// // for (var i = 0; i < 5; i++) {
// //     console.log("Inside Loop, i is", i);
// // }

// for (var _i = 0; _i < 5; _i++) {
//     console.log("Inside Loop, _i is", _i);
// }

// console.log("After, i is", i);

// Support Hoisting - Moving Declarations to the top
// a1 = "Hello";
// console.log(a1);
// var a1;

// ---------------------------------------------------------- let keyword
// We cannot create variables with same name in the same scope using let keyword

// let i = 20;
// // let i = 30;                     // Compile Time Error: Cannot redeclare block-scoped variable 'i'
// console.log(i);

// Does not Support Hoisting
// a1 = "Hello";
// console.log(a1);
// let a1;

// Support Block Scoping
// var i = 20;

// function test() {
//     if (true) {
//         let i = "Hello";                    // Scope is Function
//         console.log("Inside, if block: ", i);
//     }
//     console.log("Inside Function: ", i);
// }

// test();
// console.log("Outside Function: ", i);

var i = 100;
console.log("Before, i is", i);

for (let i = 0; i < 5; i++) {
    console.log("Inside Loop, i is", i);
}

console.log("After, i is", i);