// function fruits(name:string):string{
//     return name
// }

// fruits("apple");
// fruits(100); //Error
// fruits(true); //Error

function fruits<T>(name:T):T{
    return name
}

fruits("apple");
fruits(100); 
fruits(true); 