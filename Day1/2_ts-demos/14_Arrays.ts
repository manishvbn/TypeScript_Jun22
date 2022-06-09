// var arr1 = [10, 20, 30];
// var arr2 = ["Manish", "Abhijeet"];
// var arr3 = [1, "Abhijeet"];

// var arr4: number[];
// arr4 = [10, 20, 30];

// var arr5: Array<number>;
// arr5 = [10, 20, 30];

// var arr6: Array<number> = [10, 20, 30];

// var arr7 = new Array();
// console.log(arr7);
// console.log(arr7.length);

// var arr8 = new Array(10);
// console.log(arr8);
// console.log(arr8.length);

// var arr9 = new Array("Manish");
// console.log(arr9);
// console.log(arr9.length);

// var arr10 = Array.of(10);
// console.log(arr10);
// console.log(arr10.length);

// var arr = [10, 20, 30];

// // var arr11 = new Array(arr);
// // console.log(arr11);
// // console.log(arr11.length);

// // var arr12 = Array.from(arr);
// // console.log(arr12);
// // console.log(arr12.length);

// var arr12 = [...arr];
// console.log(arr12);
// console.log(arr12.length);

// var empList: Array<{ id: number, name: string, city: string }>;

// empList = [
//     { id: 1, name: "Manish", city: "Pune" },
//     { id: 2, name: "Ramakant", city: "Delhi" },
//     { id: 3, name: "Abhijeet", city: "Pune" },
//     { id: 4, name: "Subodh", city: "Mumbai" },
//     { id: 5, name: "Abhishek", city: "Mathura" }
// ];

// Type Alias
type Employee = {
    id: number,
    name: string,
    city: string
};

var empList: Array<Employee>;

empList = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Ramakant", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" },
    { id: 4, name: "Subodh", city: "Mumbai" },
    { id: 5, name: "Abhishek", city: "Mathura" }
];

// empList.forEach((item, index) => {
//     console.log(`${index}               ${JSON.stringify(item)}`);
// });

// for (let i = 0; i < empList.length; i++) {
//     console.log(`${i}               ${JSON.stringify(empList[i])}`);
// }

// for(const item of empList) {
//     console.log(`${JSON.stringify(item)}`);
// }

// for(const item of empList.entries()) {
//     console.log(`${JSON.stringify(item)}`);
// }

// for (const [index, item] of empList.entries()) {
//     console.log(`${index}               ${JSON.stringify(item)}`);
// }

// ---------------------------------------------------

var r1 = empList.find(e => e.id === 4);
console.log(r1);

var r2 = empList.findIndex(e => e.id === 4);
console.log(r2);

var names = empList.map(e => e.name.toUpperCase());
console.log(names);

var ids = empList.map(e => e.id);
console.log(ids);