class Queue<T> implements IterableIterator<T> {
    private _i = 0;
    private _data: T[] = [];

    push(d: T) {
        this._data.push(d);
    }

    pop(): T | undefined {
        return this._data.shift();
    }

    [Symbol.iterator](): IterableIterator<T> {
        return this;
    }

    public next(): IteratorResult<T> {
        if (this._i < this._data.length) {
            return {
                done: false,
                value: this._data[this._i++]
            };
        } else {
            return {
                done: true,
                value: undefined
            };
        }
    }
}

type Order = {
    id: number,
    description: string
}

var ordersQ = new Queue<Order>();
ordersQ.push({ id: 1, description: "Order One" });
ordersQ.push({ id: 2, description: "Order Two" });
ordersQ.push({ id: 3, description: "Order Three" });

for (const item of ordersQ) {
    console.log(`${item.id}         ${item.description}`);
}