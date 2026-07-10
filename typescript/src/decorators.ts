function classLogger(constructor:Function){
    console.log(constructor.name);
}

function getKeyDetails(target:any, key:any){
    console.log(key.name );

}

//@classLogger
class CustomMaths{

    value1:number;
    value2:number;
    value3:number;
    constructor(x:number, y:number, z:number){
        this.value1 = x;
        this.value2 = y;
        this.value3 = z;
    }
}

var cm1 = new CustomMaths(10,20,30);