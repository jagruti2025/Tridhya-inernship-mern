function getChai(kind:string |number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind}`;

}

function serveChai(msg?:string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}

function orderChai(Size: "small"| "medium" | 'large' | number){
    if(Size === "small"){
        return `small cutting chai..`;
    }
    if(Size === 'medium' || Size === 'large'){
        return 'make extra chai'
    }

    return `chai order #${Size}`;

}

class kulhadChai {
    serve(){
        return "Serving Kulhad Chai"
    }
}

class Cutting{
    serve(){
        return `Serving cutting chai`;
    }
}

function serve(chai: kulhadChai | Cutting ){
    if(chai instanceof kulhadChai){
        return chai.serve();
    }
}

type ChaiOrder = {
    type: string
    suger: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj === "object" && 
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number"
    )
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.suger} Suger `;
    }
    return `Serving custom chai: ${item}`;
}

type MasalaChai = {type: "masala"; spicelevel: number};
type GingerChai = {type: "ginger"; amout: number};
type ElaichiCHai = {type: "elaichi"; aroma: number};
type Chai = MasalaChai | GingerChai | ElaichiCHai

function MakeChai(order: Chai){
    switch(order.type){
        case "masala":
            return `Masala Chai`;
            break;
        case "ginger":
            return `Ginger Chai`;
            break;
        case "elaichi":
            return `elaichi Chai`;
            break;        
            

    }
}

function brew(order: MasalaChai | GingerChai){
    if("spicelevel" in order){
        //
    }
}

// function isStringArray(arr:unknown): arr is String[]{

// }