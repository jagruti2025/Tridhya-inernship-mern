"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function complexLogic() {
    return new Promise((resolved) => {
        setTimeout(() => {
            resolved({
                name: 'anil',
                id: 10,
                email: 'ciya@gmail.com'
            });
        }, 2000);
    });
}
complexLogic().then((data) => {
    console.log(data);
    test2();
});
function test2() {
    console.log("test2....");
}
// function complexLogic(){
//    return new Promise((resolved)=>{
//         setTimeout(()=>{
//             resolved("result is here")
//         },2000);
//     })
// }
// complexLogic().then((data)=>{
//     console.log(data);
//     test2();
// })
// function test2(){
//     console.log("test2....");
// }
//# sourceMappingURL=promise.js.map