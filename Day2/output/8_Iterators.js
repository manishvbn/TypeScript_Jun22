"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var e_1, _a;
var Queue = (function () {
    function Queue() {
        this._i = 0;
        this._data = [];
    }
    Queue.prototype.push = function (d) {
        this._data.push(d);
    };
    Queue.prototype.pop = function () {
        return this._data.shift();
    };
    Queue.prototype[Symbol.iterator] = function () {
        return this;
    };
    Queue.prototype.next = function () {
        if (this._i < this._data.length) {
            return {
                done: false,
                value: this._data[this._i++]
            };
        }
        else {
            return {
                done: true,
                value: undefined
            };
        }
    };
    return Queue;
}());
var ordersQ = new Queue();
ordersQ.push({ id: 1, description: "Order One" });
ordersQ.push({ id: 2, description: "Order Two" });
ordersQ.push({ id: 3, description: "Order Three" });
try {
    for (var ordersQ_1 = __values(ordersQ), ordersQ_1_1 = ordersQ_1.next(); !ordersQ_1_1.done; ordersQ_1_1 = ordersQ_1.next()) {
        var item = ordersQ_1_1.value;
        console.log(item.id + "         " + item.description);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (ordersQ_1_1 && !ordersQ_1_1.done && (_a = ordersQ_1.return)) _a.call(ordersQ_1);
    }
    finally { if (e_1) throw e_1.error; }
}
