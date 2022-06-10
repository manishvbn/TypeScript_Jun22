// // Eager
// function idNormal() {
//     console.log("Id is Created, Normal Fn...");
// }

// idNormal();

// // Lazy
// function* idGen() {
//     console.log("Id is Created, Generator Fn...");
// }

// var genObj = idGen();
// console.log(genObj.next());

// ---------------------------------------------------

// function* idGen() {
//     console.log("Generator Execution Started....");
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     console.log("Generator Execution Completed....");
// }

// var genObj = idGen();
// console.log(genObj.next());
// console.log("Paused 1....");
// console.log(genObj.next());
// console.log("Paused 2....");
// console.log(genObj.next());
// console.log("Paused 3....");
// console.log(genObj.next());
// console.log("Paused 4....");
// console.log(genObj.next());
// console.log("Paused 5....");


// --------------------------------------------------------

// class GQueue<T> {
//     private _data: T[] = [];

//     push(d: T) {
//         this._data.push(d);
//     }

//     pop(): T | undefined {
//         return this._data.shift();
//     }

//     *[Symbol.iterator]() {
//         for (let i = 0; i < this._data.length; i++) {
//             yield this._data[i] ;           
//         }
//     }
// }

class GQueue<T> {
    private _data: T[] = [];

    push(d: T) {
        this._data.push(d);
    }

    pop(): T | undefined {
        return this._data.shift();
    }

    *[Symbol.iterator]() {
        yield* this._data;
    }
}

type GOrder = {
    id: number,
    description: string
}

var ordersGQ = new GQueue<GOrder>();
ordersGQ.push({ id: 1, description: "Order One" });
ordersGQ.push({ id: 2, description: "Order Two" });
ordersGQ.push({ id: 3, description: "Order Three" });

for (const item of ordersGQ) {
    console.log(`${item.id}         ${item.description}`);
}