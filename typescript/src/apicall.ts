
type APIType={
    userId: string,
    id:number,
    title:string,
    completed:boolean
}
type APIType2={
    userId: string,
    id2:number,
}
async function ApiCallHandling(){
    const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');  
    const data = await result.json();
    // console.log(data); 
    return data;
}

ApiCallHandling().then((data:APIType)=>{
    console.log(data);
})