"use strict";
//+++++++++++++ Generics types +++++++++++++//
Object.defineProperty(exports, "__esModule", { value: true });
//Generics in TypeScript allow you to write reusable, flexible, and type-safe code by using type variables (placeholders) instead of concrete types.
//1.Generic function
//2.Generic interface
//3.Generic classes
//4.Generic Constraints
//1)) Generic function
function Fruits(name) {
    return name;
}
let fruitsName = Fruits("Apple");
let fruitPrice = Fruits(200);
let fruitBool = Fruits(true);
console.log(fruitsName);
console.log(fruitPrice);
console.log(fruitBool);
//array 
function User20(data2) {
    return data2;
}
let userCollection = User20([10, 29, 40]);
console.log(userCollection);
const userResponse = {
    status: "success",
    data: { id: 1, name: "ciya" }
};
console.log(userResponse);
//3.Generic classes
//Classes can manage multiple data types dynamically while ensuring inner properties remain type-safe.
//example
class StorageContainer {
    contents = [];
    addItem(item) {
        this.contents.push(item);
    }
    getItems() {
        return this.contents;
    }
}
const bookStorage = new StorageContainer();
bookStorage.addItem("The Hobbit");
// bookStorage.addItem(123);       // error
console.log(bookStorage);
function logLength(arg) {
    console.log(arg.length);
}
logLength("hello");
logLength([1, 2, 3]);
// logLength(123);        // error
//# sourceMappingURL=Generics.js.map