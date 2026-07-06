let subs: number | string = '1M'; //union

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'

apiRequestStatus = "success";

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle';

airlineSeat = 'window';

const orders = ['12', '20', '28', '45'];

let currentorder: string  ;

for(let order of orders){
    if(order === '28'){
        currentorder = order
        break
    }
}
currentorder = '30';

console.log(currentorder);