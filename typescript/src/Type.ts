//Define Custom data type for Object, function etc..

type DataType = {name: string, email: string};

type a = {name: string};
type b = {email: string};

type c = a | b;

var empData:DataType ={
    name: 'anil',
    email: 'anil@gmail.com'
}

var studetData:DataType ={
    name: 'riya',
    email: 'riya@gmail.com'
}