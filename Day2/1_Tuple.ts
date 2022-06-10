// // Typeguard Array
// var dataArr1: (number | string)[];
// dataArr1 = [1, "Manish"];
// dataArr1 = ["Manish", 1];
// dataArr1 = ["Manish", "Pune"];
// dataArr1 = [1, 2, 3, 4, 5];
// dataArr1 = ["Manish", 1, "Pune", 411021];

// // Tuple - Stores a fixed collection of values of same or varied types, maintaining the sequence
// let dataRow: [number, string];
// dataRow = [1, "Manish"];
// dataRow = ["Manish", 1];
// dataRow = ["Manish", "Pune"];
// dataRow = [1, 2, 3, 4, 5];
// dataRow = [1, "Manish", "Pune", 411021];

// function insert(data: (number | string)[]) {
//     // Code to insert the data as row of a table
// }

function insert(data: [number, string]) {
    // Code to insert the data as row of a table
}

insert([1, "Manish"]);

let dataRow1: [number, string, number, string];
let dataRow2: [number, string, (number | string)];

type Employee = {
    id: number,
    name: string
};

let dataRow3: [number, string, boolean, Employee];
