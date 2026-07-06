//var var_name : datatype = value

//apply number data type
//redeclare issue

var num:number =10;
var num2:number = 30;
var num3:number = 30;

//how to add  number eith datatype

var total:number = num+num3;
console.log(total);

//how to use binary and hexadecimal number
var oct:number = 0o100001;
var hexa:number = 0b00001
var binary:number = 0x00001

console.log(oct+10);

//convert string to number

var item:number = 100;
var item2 = "50";
// var item2Convert = Number(item2);
var item2Convert = +item2
console.log(item + +item2);

//type interface with number
var data: number |string = 30;
data = "anil";
