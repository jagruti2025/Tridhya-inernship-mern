"use strict";
//5. Type Guards
Object.defineProperty(exports, "__esModule", { value: true });
//Different Kinds of Guards
//1)) typeof guard (for primitives)
function print(val) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    }
    else {
        console.log(val.toFixed(2));
    }
}
print("ciya");
print(679);
function makeSound1(animal1) {
    if ("bark1" in animal1) {
        animal1.bark1();
    }
    else {
        animal1.meow1();
    }
}
const dog1 = {
    bark1: () => console.log("Woof Woof"),
};
const cat1 = {
    meow1: () => console.log("Meow Meow"),
};
makeSound1(dog1);
makeSound1(cat1);
//3)) instanceof guard (for classes)
class Dog2 {
    bark2() {
        console.log("Woof2 Woof2");
    }
}
class Cat2 {
    meow2() {
        console.log("Meow2 Meow2");
    }
}
function makeSound2(animal) {
    if (animal instanceof Dog2) {
        animal.bark2();
    }
    else {
        animal.meow2();
    }
}
const dog2 = new Dog2();
const cat2 = new Cat2();
makeSound2(dog2);
makeSound2(cat2);
//4)) Custom type predicate 
class Dog {
    bark() {
        console.log("Woof3 Woof3");
    }
}
class Cat {
    meow() {
        console.log("Meow3 Meow3");
    }
}
function isDog(animal) {
    return animal instanceof Dog;
}
function makeSound(animal) {
    if (isDog(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makeSound(new Dog());
makeSound(new Cat());
//# sourceMappingURL=TypeGuards.js.map