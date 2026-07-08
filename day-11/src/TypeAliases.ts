//3.Type Aliases
//A type alias is just a name you give to a type so you can reuse it.

// Define the type alias
type User = {
  id: string;
  username: string;
  email: string;
  isAdmin?: boolean; // Optional property
};

// Use the type alias
const activeUser: User = {
  id: "usr_9921",
  username: "johndoe",
  email: "john@example.com"
};

console.log(activeUser);
