//Union, Intersection, Type Aliases

//1. Union Types
//A union type means "this value can be one of several types." Written with | (pipe).

let id:number | string;
id = 100;
id = "abc";
//id = true // Error

//example

function formateId(id: string | number) : string{
    if(typeof id === "string"){
        return id.toUpperCase();
    }

    return id.toString();
}

console.log(formateId(7890));
console.log(typeof(formateId(7890)));
console.log(typeof id);

