"use strict";
//Union, Intersection, Type Aliases
Object.defineProperty(exports, "__esModule", { value: true });
//1. Union Types
//A union type means "this value can be one of several types." Written with | (pipe).
let id;
id = 100;
id = "abc";
//id = true // Error
//example
function formateId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
    return id.toString();
}
console.log(formateId(7890));
console.log(typeof (formateId(7890)));
console.log(typeof id);
//# sourceMappingURL=UnionTypes.js.map