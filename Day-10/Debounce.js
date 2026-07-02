function callAPI(){
    console.log("API call Done!");
}
let timer ;
function handleSearch(){
    clearTimeout(timer);
    timer = setTimeout(() =>{
       callAPI();
    }, 1000);
}