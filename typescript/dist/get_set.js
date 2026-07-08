"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmpInfo {
    _name = "ciya";
    _email = "ciya@gmail.com";
    get name() {
        return "Mr. " + this._name;
    }
    set email(val) {
        this._email = "emp_" + val;
    }
}
var emp1 = new EmpInfo();
emp1.email = "peter@test.com";
console.log(emp1._name);
console.log(emp1._email);
//# sourceMappingURL=get_set.js.map