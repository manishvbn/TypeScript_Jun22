// ------------------------------------------------------------ Rest Parameter
function Average(...args: number[]) {
    if (args.length > 0) {
        let sum = args.reduce((a, n) => a + n);
        return sum / args.length;
    } else return 0;
}

console.log(Average());
console.log(Average(1));
console.log(Average(1, 2));
console.log(Average(1, 2, 3, 4, 5));
console.log(Average(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Combine comma seperated items into a Array (...) - Rest
// ... used in function parameter at the time of function creation - Rest Parameter
// ... on Left hand side of assignment operator - Rest

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Average(...numbers));               // Array Spread

// Split Array/Object to a comma sperated items (...) - Array / Object Spread
// ... used in function argument at the time of function call - Spread Operator
// ... on Right hand side of assignment operator - Spread