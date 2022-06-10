// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// class Person implements IPerson {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return "Hello";
//     }
// }

// let p1: IPerson = new Person("Abhijeet", 39);
// let p2: IPerson = new Person("Ramakant", 40);

// console.log(p1.greet("Hi"));
// console.log(p2.greet("Hi"));

// --------------------------------------------------------- Multiple Interface Implementations
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// class Person implements IPerson, IEmployee {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return "Hello";
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }
// }

// let p1: Person = new Person("Abhijeet", 39);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());

// --------------------------------------------------------- Interface Extraction
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// interface ICustomer {
//     doShopping(): string;
// }

// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return "Hello";
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }

//     doShopping(): string {
//         return "Let us do it online";
//     }
// }

// // let p1: Person = new Person("Abhijeet", 39);
// // console.log(p1.greet("Hi"));
// // console.log(p1.doWork());
// // console.log(p1.doShopping());

// // Interface Extraction
// // let p1: IPerson = new Person("Abhijeet", 39);
// // console.log(p1.greet("Hi"));

// // let p1: IEmployee = new Person("Abhijeet", 39);
// // console.log(p1.doWork());

// let p1: ICustomer = new Person("Abhijeet", 39);
// console.log(p1.doShopping());

// --------------------------------------------------------- Interface can extend from other Interfaces
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee extends IPerson {
//     doWork(): string;
// }

// interface ICustomer extends IPerson {
//     doShopping(): string;
// }

// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return "Hello";
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }

//     doShopping(): string {
//         return "Let us do it online";
//     }
// }

// let p1: IEmployee = new Person("Abhijeet", 39);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());

// let p2: ICustomer = new Person("Abhijeet", 39);
// console.log(p2.greet("Hola"));
// console.log(p2.doShopping());

// --------------------------------------------------------- Interface can extend from class(es)
// class Control {
//     focus(): string {
//         return "The control is in focus...";
//     }
// }

// class SelectableControl {
//     select(): string {
//         return "The control is selected...";
//     }
// }

// // When an interface extends a class, it extends only the class members but not 
// // their implementation because interfaces don’t contain implementations.
// interface ISelectableControls extends Control, SelectableControl { }

// // Button Class have to re implement all the methods
// class Button implements ISelectableControls {
//     focus(): string {
//         throw new Error("Method not implemented.");
//     }
//     select(): string {
//         throw new Error("Method not implemented.");
//     }
// }