// let j: number;
// j = 10;
// j = 20;

// // const env: string;          // Compile Time Error: 'const' declarations must be initialized.

// const env = "development";
// console.log(env);

// // // env = "production";             // Compile Time Error: Cannot assign to 'env' because it is 
// // // const env = "production";       // Compile Time Error: Cannot redeclare block-scoped variable 'env'

// if(true) {
//     const env = "production";
//     console.log("Block: ", env);
// }

const obj = { id: 1 };
console.log(obj);

// obj = { name: "Manish" };

obj.id = 1000;
console.log(obj);

delete obj.id;
console.log(obj);
