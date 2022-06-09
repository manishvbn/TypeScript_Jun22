var d1: number;
d1 = 10;

var d2: string;
d2 = "Manish";

var d3: number | string;
d3 = 10;
d3 = "abc";
// d3 = true;                      // Error: Type 'boolean' is not assignable to type 'string | number'

var d4: number | string | boolean;
d4 = 10;
d4 = "abc";
d4 = true;

var d5: Array<number>;
d5 = [10, 20, 30, 40, 50];

var d6: Array<string>;
d6 = ["abc", "pqr"];

var d7: Array<number | string>;
d7 = [10, 20, 30, "abc", "pqr"];