let userData:number|string|boolean = 20;

userData = true;

if(typeof userData == "boolean"){
    console.log("this is a bool data type");
}else if(typeof userData == "string"){
    console.log("this is a string data type");
}else{
    console.log("this is a number data type");
}


function checkDataType(data:string | number){
    if(typeof data == "number"){
        console.log("this is a number data type");
    }else{
        console.log("this is a string data type");
    }
    console.log(data);
}

// checkDataType(28);

class Product12{

}
var p1 = new Product12();

class Order12{

}
var o1 = new Order12();

function checkDetails(data:Order12 | Product12){
    if(data instanceof Order12){
        console.log('This is a Order');
    }else{
        console.log('This is a Product');
    }
}

checkDetails(p1);
checkDetails(o1);

interface userData{
    name:string,
    city:string
}

interface userInfo{
    id:number,
    email:string
}
var userData13:userData | userInfo;

userData13={
    name:"ciya",
    city: 'gurgaon'
}

var userData14:userData|userInfo={
    id:101,
    email: 'anil@test.com'
}

function checkUserInfo(data:userData | userInfo){
    if((data as userData).name!=undefined){
        console.log('this is a user data');
    }else{
        console.log('this is a user info');
    }

}

checkUserInfo(userData14);