"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//partial
// let CollageData3:Partial<CollageType>={
//     name:"IIt Delhi",
//     location:"Delhi",
//     students:23
// }
function getcollageData(data) {
}
;
getcollageData({ name: 'IIt Bomby', location: "delhi" });
//Required
function getcollageData2(data) {
    return data;
}
;
getcollageData2({ name: 'IIt Bomby', location: "delhi", students: 49, branch: 34 });
//Readonly
var collageData4 = {
    name: 'iit Delhi',
    location: "Delhi",
    students: 23,
    branch: 5
};
//collageData4.name="iit gurgaon";
//pick
var collageDatas = {
    name: 'iit Delhi',
    location: "Delhi",
};
//Omit
let collageData7 = {
    name: 'iit Delhi',
    location: "Delhi",
};
var APIcall = 'success';
APIcall = "loading";
//APIcall="pending" //error
//Extract
var APIcall2 = 'success';
APIcall2 = "error";
var randomData = 20;
var siteRoleOption = 'guest';
var RoloName = {
    Admin: "anil",
    user: "sidhu",
    guest: "peter"
};
//# sourceMappingURL=Utility_types.js.map