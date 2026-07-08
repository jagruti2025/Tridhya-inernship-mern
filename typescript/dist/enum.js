"use strict";
// Enum Data type
Object.defineProperty(exports, "__esModule", { value: true });
// A data type that allows you to define a set of named constants..
// var who:string = 'student';
// who = "teacher" 
var WhoType;
(function (WhoType) {
    WhoType["student"] = "students";
    WhoType["teacher"] = "teacher";
    WhoType["management"] = "management";
    WhoType["labStaff"] = "labStaff";
})(WhoType || (WhoType = {}));
var who1 = WhoType.teacher;
who1 = WhoType.teacher;
console.log(WhoType.management);
var Fruit;
(function (Fruit) {
    Fruit["a"] = "Apple";
    Fruit["b"] = "banana";
    Fruit["c"] = "cherry";
})(Fruit || (Fruit = {}));
var myFruit = Fruit.a;
myFruit = Fruit.c;
console.log(myFruit);
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["manager"] = 1] = "manager";
    Roles[Roles["qa"] = 2] = "qa";
    Roles[Roles["developer"] = 3] = "developer";
    Roles[Roles["user"] = 4] = "user";
})(Roles || (Roles = {}));
var userRoles = Roles.qa;
console.log(userRoles);
//# sourceMappingURL=enum.js.map