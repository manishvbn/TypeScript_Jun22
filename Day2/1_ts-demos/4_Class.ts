// class Employee {
//     // Data Property
//     private _name: string;

//     // Multiple constructor implementations are not allowed.
//     // constructor() {
//     //     this._name = "NA";
//     // }

//     // constructor(name: string) {
//     //     this._name = name;
//     // }

//     constructor(name = "NA") {
//         this._name = name;
//     }

//     // 136 bytes
//     getName() {
//         return this._name;
//     }

//     setName(value: string) {
//         this._name = value;
//     }

//     // // 312 bytes
//     // // Never use function expressions to create member functions, it will increase the memory usage
//     // getName = function () {
//     //     return this._name;
//     // }

//     // setName = function (value: string) {
//     //     this._name = value;
//     // }

//     // 332 bytes
//     // Never use Lambdas to create member functions, it will increase the memory usage
//     // getName = () => {
//     //     return this._name;
//     // }

//     // setName = (value: string) => {
//     //     this._name = value;
//     // }
// }

// // let e1 = new Employee();
// let e1 = new Employee("Ramakant");
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// ------------------------------------------ Vikas Query
// // document.getElementById("b1").addEventListener("click", function () { });
// // document.getElementById("b1").addEventListener("click", () => { });

// var arr = [10, 21, 33, 40, 53];
// var eArr = arr.filter(n => n % 2 === 0);

// var tArr = arr.map(n => n * 10);

// console.log(eArr);
// console.log(tArr);

// // -------------------------------------------------------------- Enabled Strict

// class Employee {
//     // private _name: string;

//     // constructor(name = "na") {
//     //     this._name = name;
//     // }

//     private _name = "na";
//     private _age?: number;

//     getName() {
//         return this._name.toUpperCase();
//     }

//     setName(value: string) {
//         this._name = value;
//     }

//     getAge() {
//         // if (this._age)
//         //     return this._age.toFixed();
//         // else
//         //     return this._age;

//         return this._age?.toFixed();
//     }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// // -------------------------------------------------------------- Used Accessor & Mutator Methods

// class Employee {
//     // Data Properties
//     private _name: string;
//     private _age?: number | undefined;

//     constructor(name = "na") {
//         this._name = name;
//     }

//     getName() {
//         return this._name.toUpperCase();
//     }

//     setName(value: string) {
//         this._name = value;
//     }

//     getAge() {
//         return this._age?.toFixed();
//     }

//     setAge(value: number | undefined) {
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// console.log(e1.getAge());
// e1.setName("Abhijeet");
// e1.setAge(39);
// console.log(e1.getName());
// console.log(e1.getAge());

// // -------------------------------------------------------------- Accessor Property
// class Employee {
//     // Data Properties
//     private _name: string;
//     private _age?: number | undefined;

//     constructor(name = "na") {
//         this._name = name;
//     }

//     // Accessor Properties
//     get Name() {
//         return this._name.toUpperCase();
//     }

//     set Name(value: string) {
//         this._name = value;
//     }

//     get Age() {
//         return this._age;
//     }

//     set Age(value: number | undefined) {
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Name = "Abhijeet";
// e1.Age = 39;
// console.log(e1.Name);
// console.log(e1.Age);

// -------------------------------------------------------------- Parameter Property/Parameter Members
// Parameter Property/Parameter Member let us create and initialize member variables in one place. 
// It is a shorthand for creating member variables.

// class Employee {
//     // Data Properties
//     // private _name: string;
//     // private _age?: number | undefined;

//     // constructor(name = "na", age = 0) {
//     //     this._name = name;
//     //     this._age = age;
//     // }

//     // constructor(private _name: string, private _age: number) { }
//     constructor(private _name = "na", private _age = 0) { }

//     // Accessor Properties
//     get Name() {
//         return this._name.toUpperCase();
//     }

//     set Name(value: string) {
//         this._name = value;
//     }

//     get Age() {
//         return this._age;
//     }

//     set Age(value: number) {
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Name = "Abhijeet";
// e1.Age = 39;
// console.log(e1.Name);
// console.log(e1.Age);

// -------------------------------------------------------------------------

// Create a BankAccount Class with bankName and accName as data members and create Properties to access
// the data outside using instance.

// class BankAccount {
//     constructor(private _accName: string, private _bankName: string) { }

//     get BankName(): string {
//         return this._bankName;
//     }

//     set BankName(value: string) {
//         this._bankName = value;
//     }

//     get AccountHolderName(): string {
//         return this._accName;
//     }
// }

// var a1 = new BankAccount("Manish", "ICICI");
// console.log(`\nBank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// var a2 = new BankAccount("Abhijeet", "ICICI");
// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// console.log(a1);
// console.log(a2);

// // ----------------------------------------------------------- Static
// class BankAccount {
//     // private static _bankName: string;
//     private static _bankName = "HDFC";

//     constructor(private _accName: string) { }

//     get BankName(): string {
//         return BankAccount._bankName;
//     }

//     static set BankName(value: string) {
//         BankAccount._bankName = value;
//     }

//     get AccountHolderName(): string {
//         return this._accName;
//     }
// }

// BankAccount.BankName = "ICICI";

// var a1 = new BankAccount("Manish");
// console.log(`\nBank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// var a2 = new BankAccount("Abhijeet");
// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// console.log(a1);
// console.log(a2);

// ----------------------------------------------------------- Readonly
// Readoly can be initialized only in the constructor
class BankAccount {
    // private static _bankName: string;
    private static _bankName = "HDFC";

    constructor(private readonly _accNumber: number, private _accName: string) { }

    get BankName(): string {
        return BankAccount._bankName;
    }

    static set BankName(value: string) {
        BankAccount._bankName = value;
    }

    get AccountHolderName(): string {
        return this._accName;
    }

    get AccountNumber(): number {
        // this._accNumber = 100;                  // Compile Time Error: Cannot assign to '_accNumber' because it is a read-only property.
        return this._accNumber;
    }
}

BankAccount.BankName = "ICICI";

var a1 = new BankAccount(1, "Manish");
console.log(`\nBank Name: ${a1.BankName}`);
console.log(`Account Number: ${a1.AccountNumber}`);
console.log(`Account Holder Name: ${a1.AccountHolderName}`);

var a2 = new BankAccount(2, "Abhijeet");
console.log(`\nBank Name: ${a2.BankName}`);
console.log(`Account Number: ${a2.AccountNumber}`);
console.log(`Account Holder Name: ${a2.AccountHolderName}`);