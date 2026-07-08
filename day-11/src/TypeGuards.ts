//5. Type Guards

//Different Kinds of Guards

//1)) typeof guard (for primitives)

function print(val: string | number) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    } else {
        console.log(val.toFixed(2));
    }
}

print("ciya");
print(679);

//2)) in operator guard

type Dog1 = {
    bark1: () => void;
};

type Cat1 = {
    meow1: () => void;
};

function makeSound1(animal1: Dog1 | Cat1) {
    if ("bark1" in animal1) {
        animal1.bark1();
    } else {
        animal1.meow1();
    }
}

const dog1: Dog1 = {
    bark1: () => console.log("Woof Woof"),
};

const cat1: Cat1 = {
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

function makeSound2(animal: Dog2 | Cat2) {
  if (animal instanceof Dog2) {
    animal.bark2();
  } else {
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

function isDog(animal: Dog | Cat): animal is Dog {
  return animal instanceof Dog;
}

function makeSound(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());