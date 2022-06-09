function Average() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length > 0) {
        var sum = args.reduce(function (a, n) { return a + n; });
        return sum / args.length;
    }
    else
        return 0;
}
console.log(Average());
console.log(Average(1));
console.log(Average(1, 2));
console.log(Average(1, 2, 3, 4, 5));
console.log(Average(1, 2, 3, 4, 5, 6, 7, 8, 9));
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Average.apply(void 0, numbers));
