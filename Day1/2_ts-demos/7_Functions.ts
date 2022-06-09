// // Function Declaration Syntax

// function hello1() {
//     console.log("Hello World!");
// }

// hello1();

// // Function Expression Syntax

// const hello2 = function () {
//     console.log("Hello World 2!");
// }

// hello2();

// let hello3: () => void;
// hello3 = function () {
//     console.log("Hello World 3!");
// }

// let fn: (a: number, b: number) => number;
// // fn = function (x: number, y: number) {
// //     return x + y;
// // }

// fn = function (x, y) {
//     return x + y;
// }

// ---------------------------------------

// function hello1() {
//     console.log("Hello World");
// }

// var r = hello1();
// console.log(r);
// console.log(typeof r);

// var r1: undefined;
// // r1 = 10;                // Error: Type '10' is not assignable to type 'undefined'.
// r1 = undefined;
// console.log(r1);

// var r2: void;
// // r2 = 10;                // Error: Type 'number' is not assignable to type 'void'.
// r2 = void 0;
// r2 = undefined;
// console.log(r1);

// var r3: never;
// r3 = 10;                // Error: Type 'number' is not assignable to type 'void'.
// r3 = void 0;
// r3 = undefined;
// console.log(r3);

// var value: any;
// console.log(value);
// console.log(value.trim());

// var value1: unknown;
// console.log(value1);
// console.log(value1.trim());

// TypeScript - never / unknown / any
// JavaScript - undefined / void

// -------------------------------------------

// function iterate(): never {
//     let i = 1;
//     while (true) {
//         console.log(++i);
//     }
// }

// iterate();
// console.log("Waiting......");

// -------------------------------------------

function add1(x: number, y: number): number {
    return x + y;
}

let add2 = function (x: number, y: number): number {
    return x + y;
}

let add3: (a: number, b: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
}

let add4: (a: number, b: number) => number;
add4 = function (x, y) {
    return x + y;
}

// Lambdas (Multiline Lambda)
let add5: (a: number, b: number) => number;
add5 = (x, y) => {
    return x + y;
}

// Lambdas (Singleline Lambda)
let add6: (a: number, b: number) => number;
add6 = (x, y) => x + y;

let add7: (a: number, b: number) => number = (x, y) => x + y;

let add8 = (x: number, y: number) => x + y;

console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
console.log(add4(2, 3));
console.log(add5(2, 3));
console.log(add6(2, 3));
console.log(add7(2, 3));
console.log(add8(2, 3));

// Declaration
// Expression
// Lambdas - Singleline / Multiline