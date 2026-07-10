"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UsernameSpace;
(function (UsernameSpace) {
    class userAuth {
        login() {
            console.log("user login function");
        }
    }
    UsernameSpace.userAuth = userAuth;
    function getList() {
        console.log("list of Users");
    }
    UsernameSpace.getList = getList;
})(UsernameSpace || (UsernameSpace = {}));
var AdminNameSpace;
(function (AdminNameSpace) {
    class userAuth {
        login() {
            console.log("Admin login function");
        }
    }
    AdminNameSpace.userAuth = userAuth;
    function getList() {
        console.log("list of Admin");
    }
    AdminNameSpace.getList = getList;
})(AdminNameSpace || (AdminNameSpace = {}));
var user8 = new UsernameSpace.userAuth();
user8.login();
UsernameSpace.getList();
//# sourceMappingURL=nameSpace.js.map