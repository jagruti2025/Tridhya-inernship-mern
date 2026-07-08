//+++++++++++++ Generics types +++++++++++++//

//Generics in TypeScript allow you to write reusable, flexible, and type-safe code by using type variables (placeholders) instead of concrete types.

//1.Generic function
//2.Generic interface
//3.Generic classes
//4.Generic Constraints

//1)) Generic function

function Fruits<T>(name: T): T {
    return name;
}

let fruitsName = Fruits("Apple");
let fruitPrice = Fruits(200);
let fruitBool = Fruits(true);

console.log(fruitsName);
console.log(fruitPrice);
console.log(fruitBool);

//array 

function User20<T>(data2: T): T {
    return data2
}

let userCollection = User20([10, 29, 40]);

console.log(userCollection);

//2.Generic interface

interface ApiResponse<T> {
    status: string;
    data: T;
}

interface User {
    id: number;
    name: string;
}

const userResponse: ApiResponse<User> = {
    status: "success",
    data: { id: 1, name: "ciya" }
};

console.log(userResponse);

//3.Generic classes

//Classes can manage multiple data types dynamically while ensuring inner properties remain type-safe.

//example

class StorageContainer<T> {
    private contents: T[] = [];

    addItem(item: T): void {
        this.contents.push(item);
    }

    getItems(): T[] {
        return this.contents;
    }
}

const bookStorage = new StorageContainer<string>();
bookStorage.addItem("The Hobbit");
// bookStorage.addItem(123);       // error

console.log(bookStorage);


//4.Generic Constraints

//Sometimes you want to use generics, but limit them to types that have specific properties. Use the extends keyword to add a constraint.

//example

interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length); 
}

logLength("hello");       
logLength([1, 2, 3]);     
// logLength(123);        // error