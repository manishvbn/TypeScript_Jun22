"use strict";
var ProjectManager = (function () {
    function ProjectManager() {
        this.name = "Project Manager";
    }
    return ProjectManager;
}());
var Developer = (function () {
    function Developer() {
        this.name = "Developer";
    }
    return Developer;
}());
var Tester = (function () {
    function Tester() {
        this.name = "Tester";
    }
    return Tester;
}());
var factory = (function () {
    return {
        getEmployee: function (arg) {
            return new arg();
        }
    };
})();
console.log(factory.getEmployee(ProjectManager));
console.log(factory.getEmployee(Developer));
console.log(factory.getEmployee(Tester));
