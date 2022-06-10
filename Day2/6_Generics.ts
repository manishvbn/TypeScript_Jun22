// var arr1: Array<number>;
// var arr2: Array<string>;

// class Queue {
//     private _data: number[] = [];

//     push(d: number) {
//         this._data.push(d);
//     }

//     pop(): number | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// ---------------------------------------------- Flexibility, we can use 'any' as type

// class Queue {
//     private _data: any[] = [];

//     push(d: any) {
//         this._data.push(d);
//     }

//     pop(): any | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// var namesQ = new Queue();
// namesQ.push("manish");
// namesQ.push("abhijeet");
// namesQ.push("ramakant");
// namesQ.push(99);

// console.log(namesQ.pop().toUpperCase());
// console.log(namesQ.pop());
// console.log(namesQ.pop());
// console.log(namesQ.pop().toUpperCase());

// -------------------------------------------------------- Generic Implementation
// Generics allows you to create a component that can work over a variety of types
// rather than a single one, without loosing type safety and intellisense

// class Queue<T> {
//     private _data: T[] = [];

//     push(d: T) {
//         this._data.push(d);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }
// }

// var numbersQ = new Queue<number>();
// numbersQ.push(10);
// numbersQ.push(20);
// numbersQ.push(30);

// console.log(numbersQ.pop());
// console.log(numbersQ.pop());
// console.log(numbersQ.pop());

// var namesQ = new Queue<string>();
// namesQ.push("manish");
// namesQ.push("abhijeet");
// namesQ.push("ramakant");

// console.log(namesQ.pop()?.toUpperCase());
// console.log(namesQ.pop()?.toUpperCase());
// console.log(namesQ.pop()?.toUpperCase());

// // var mix = new Queue<number | string>();

// type mixType = number | string;
// var mix = new Queue<mixType>();

// -------------------------------------------------------- Generic Constraints

// Create a Generic Method to merge 2 objects

// function mergeObject<T1, T2>(obj1: T1, obj2: T2) {
//     return { ...obj1, ...obj2 };
// }

// function mergeObject<T1 extends object, T2 extends object>(obj1: T1, obj2: T2) {
//     return { ...obj1, ...obj2 };
// }

// type t1 = {
//     id: number
// }

// type t2 = {
//     name: string
// }

// let rObj1 = mergeObject<t1, t2>({ id: 1 }, { name: "Manish" });
// console.log(rObj1);

// // let rObj2 = mergeObject<number, boolean>(1, true);
// // console.log(rObj2);

// ------------------------------------

// interface IShape {
//     draw(): void;
// }

// class Circle implements IShape {
//     draw(): void {
//         console.log("Circle is drawn...");
//     }
// }

// class Square implements IShape {
//     draw(): void {
//         console.log("Square is drawn...");
//     }
// }

// function drawShapes<S extends IShape>(shapes: S[]):void {
//     for (const shape of shapes) {
//         shape.draw();
//     }
// }

// drawShapes([new Circle(), new Square()]);
// drawShapes([{ id: 1 }]);                    // Error

// ------------------------------------
// function getPropValue<T, K>(obj: T, key: K) {
//     return obj[key];
// }

// function getPropValue<T, K extends keyof T>(obj: T, key: K) {
//     return obj[key];
// }

// var person = { id: 1, name: "Manish", city: "Pune" };
// console.log(getPropValue(person, "id"));
// console.log(getPropValue(person, "name"));
// console.log(getPropValue(person, "city"));