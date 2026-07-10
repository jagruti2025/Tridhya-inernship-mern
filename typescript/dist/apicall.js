"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function ApiCallHandling() {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await result.json();
    // console.log(data); 
    return data;
}
ApiCallHandling().then((data) => {
    console.log(data);
});
//# sourceMappingURL=apicall.js.map