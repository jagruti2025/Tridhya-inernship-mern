"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = '1M'; //union
let apiRequestStatus = 'pending';
apiRequestStatus = "success";
let airlineSeat = 'aisle';
airlineSeat = 'window';
const orders = ['12', '20', '28', '45'];
let currentorder;
for (let order of orders) {
    if (order === '28') {
        currentorder = order;
        break;
    }
}
currentorder = '30';
console.log(currentorder);
//# sourceMappingURL=unionAndany.js.map