"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function classLogger(constructor) {
    console.log(constructor.name);
}
function getKeyDetails(target, key) {
    console.log(key.name);
}
//@classLogger
class CustomMaths {
    value1;
    value2;
    value3;
    constructor(x, y, z) {
        this.value1 = x;
        this.value2 = y;
        this.value3 = z;
    }
}
var cm1 = new CustomMaths(10, 20, 30);
//# sourceMappingURL=decorators.js.map