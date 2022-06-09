// Variables created are optionally typesafe
// Untyped Variable - Not TypeSafe, Will Not get Intellisence (any)
// var data;
// data = 10;
// data = "Manish";

// Implicitly Typed - Type Inference
// var data = 10;
// data = "Manish";            // Compile Time Error: Type 'string' is not assignable to type 'number'.

// var ename = "Manish";
// ename = 10;                 // Compile Time Error: Type 'number' is not assignable to type 'string'

// Explicitly Typed
// var age: number;
// age = 10;
// // age = "abc";                // Compile Time Error: Type 'string' is not assignable to type 'number'.

// var city: string;
// city = "Pune";

// Function to add 2 numbers
// function add(x, y) {
//     return x + y;
// }

// function add(x: any, y: any) {
//     return x + y;
// }

function add(x: number, y: number) {
    return x + y;
}

console.log(add(2, 3));
// console.log(add(2, "ABC"));
// console.log(add("ABC", "XYZ"));
// console.log(add("ABC", true));

// number / string / boolean / undefined / array / object / Date / RegExp / function / void
// All the new Types which are supported by ECMASCRIPT
// Lefthand side of assignment Operator, all JS Types (Declaration)

var a: Array<number>;
var s: symbol;
var p: Promise<void>;

// Righthand Side of assignment Operator, API's will come
// If you want to use any API, You can only use them with proper configuration
// Based on target in tsconfig.json
// And lib section configured in your tsconfig.json

a = new Array<number>();
s = Symbol("Hello");
p = new Promise((resolve, reject) => { });

// BROWSER API (lib -> DOM) - All HTML 5 API's
// console
// document
// navigator
// screen
// localStorage
// sessionStorage

// VS Code gives you intellisense using d.ts files (Type Definition)