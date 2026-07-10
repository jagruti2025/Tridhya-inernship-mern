type PersonT ={
    name:string,
    age:number,
    isEmp:boolean
}

let PersonData:PersonT={
    name:"anil",
    age:30,
    isEmp:true
}

type PersonX = keyof PersonT;
let PersonDataX:PersonX;

PersonDataX="name";
PersonDataX="age";
PersonDataX="isEmp";
//PersonDataX="city"; //Error

let userX:keyof typeof PersonData="name";