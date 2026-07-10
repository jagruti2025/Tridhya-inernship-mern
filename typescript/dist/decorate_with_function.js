"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updatedSum(target, key, description) {
    description.value = function sum(x, y) {
        let output = x + y;
        return "the output of " + x + " is : " + output;
    };
}
class CustomMaths1 {
    //@updatedSum
    sum(x, y) {
        return x + y;
    }
}
var cm2 = new CustomMaths1();
console.log(cm2.sum(10, 20));
//# sourceMappingURL=decorate_with_function.js.map