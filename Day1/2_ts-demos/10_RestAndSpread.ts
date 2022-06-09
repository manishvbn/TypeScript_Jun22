// In TypeScript, Rest and Spread can be used with Array and Object type

// ... on Left hand side of assignment (=) operator - Rest
// ... on Right hand side of assignment (=) operator - Spread


// ----------------------------------------------------------- Array Spread

// var numArr1 = [10, 20, 30, 40, [50, 60]];

// // Refrence Copy
// // var numArr2 = numArr1;

// // Shallow Copy
// var numArr2 = [...numArr1];

// numArr2[0] = 1000;
// (numArr2[4] as number[])[0] = 5000;

// console.log("Array 1:", numArr1);
// console.log("Array 2:", numArr2);

// ------------------------------------------------------------ Array Rest

// var numArr1 = [10, 20, 30, 40, 50];

// // Destructuring
// // var x = numArr1[0];
// // var y = numArr1[1];

// // var [x, y] = numArr1;

// // Destructuring with Rest
// var [x, y, ...z] = numArr1;

// console.log("x = " + x);
// console.log("y = " + y);
// console.log("z = " + z);

// -------------------------------

// var x = 10;
// var y = 20;

// console.log("x = " + x);
// console.log("y = " + y);

// [x, y] = [y, x];

// console.log("\nAfter Swapping....");
// console.log("x = " + x);
// console.log("y = " + y);

// --------------------------------------------------------------------------- Object Spread

// var emp1 = { id: 1, name: "Manish", address: { city: "Pune" } };

// // Reference Copy
// // var emp2 = emp1;

// // Shallow Copy
// // var emp2 = Object.assign({}, emp1);
// var emp2 = { ...emp1 };

// emp2.id = 100;
// emp2.address.city = "Mumbai";

// console.log("Employee 1 - ", emp1);
// console.log("Employee 2 - ", emp2);

// ----------------------------------------------------- Object Rest
var emp = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411021 };

// Destructuring
// var id = emp.id;
// var ename = emp.ename;

// var { id, ename } = emp;

// Destructuring with Rest
var { id, ename, ...address } = emp;

console.log("Id: ", id);
console.log("Name: ", ename);
console.log("Address: ", address);