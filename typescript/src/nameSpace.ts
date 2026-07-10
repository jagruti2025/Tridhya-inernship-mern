namespace UsernameSpace {

   export class userAuth {
        login() {
            console.log("user login function");
        }
    }

    export function getList() {
        console.log("list of Users");
    }

}

namespace AdminNameSpace {

    export class userAuth {
        login() {
            console.log("Admin login function");
        }
    }

    export function getList() {
        console.log("list of Admin");
    }
    

}


var user8 = new UsernameSpace.userAuth();
user8.login();
UsernameSpace.getList();
