//Literal Types

type role = "admin" | "editor" | "viewer"; 
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type statusCode = 200 | 404 | 500; 

//example
function setRole(roles:role) {
  console.log(`Role set to ${roles}`);
}
setRole("admin");  
//setRole("superuser"); // Error