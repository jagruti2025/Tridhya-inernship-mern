interface CollageType{
    name:string,
    location:string,
    students:number,
    branch?:number|undefined 
}

//partial


// let CollageData3:Partial<CollageType>={
//     name:"IIt Delhi",
//     location:"Delhi",
//     students:23
   
// }

function getcollageData(data:Partial<CollageType>){

};

getcollageData({name:'IIt Bomby', location: "delhi"})

//Required
function getcollageData2(data:Required <CollageType>){
    return data;

};
getcollageData2({name:'IIt Bomby', location: "delhi", students: 49, branch:34})

//Readonly

var collageData4:Readonly<CollageType>={
    name: 'iit Delhi',
    location:"Delhi",
    students:23,
    branch:5
}
//collageData4.name="iit gurgaon";

//pick

var collageDatas:Pick<CollageType,"name" | "location">={
    name: 'iit Delhi',
    location:"Delhi",
}

//Omit

let collageData7:Omit<CollageType, 'branch' | 'students'>={
    name: 'iit Delhi',
    location:"Delhi",
}

//Exclude

type APIStatus = "loading" | 'error' | 'pending' | 'success';

var APIcall:Exclude<APIStatus,'pending'> = 'success';
APIcall="loading";
//APIcall="pending" //error

//Extract
var APIcall2:Extract<APIStatus,'error' | 'success'> = 'success';
APIcall2 = "error";

type RandomType = string | number |undefined | null |string[];

var randomData:NonNullable<RandomType>= 20;

type SiteRole =  'Admin' | 'user' | 'guest';
var siteRoleOption:SiteRole = 'guest';
var RoloName:Record<SiteRole , string>= {
    Admin: "anil",
    user: "sidhu",
    guest: "peter"
}


