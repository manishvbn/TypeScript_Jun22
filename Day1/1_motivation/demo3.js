console.log("Demo Three - TypeScript");
var PersonType = /** @class */ (function () {
    function PersonType(name) {
        this._name = name;
    }
    PersonType.prototype.getName = function () {
        return this._name;
    };
    PersonType.prototype.setName = function (value) {
        this._name = value;
    };
    return PersonType;
}());
var p1 = new PersonType("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());
var p2 = new PersonType("Subodh");
console.log(p2.getName());
p2.setName("Ramakant");
console.log(p2.getName());
