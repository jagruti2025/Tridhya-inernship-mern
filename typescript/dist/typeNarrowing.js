"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai...`;
    }
    return `Chai order: ${kind}`;
}
function serveChai(msg) {
    if (msg) {
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`;
}
function orderChai(Size) {
    if (Size === "small") {
        return `small cutting chai..`;
    }
    if (Size === 'medium' || Size === 'large') {
        return 'make extra chai';
    }
    return `chai order #${Size}`;
}
class kulhadChai {
    serve() {
        return "Serving Kulhad Chai";
    }
}
class Cutting {
    serve() {
        return `Serving cutting chai`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.suger === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.suger} Suger `;
    }
    return `Serving custom chai: ${item}`;
}
function MakeChai(order) {
    switch (order.type) {
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
function brew(order) {
    if ("spicelevel" in order) {
        //
    }
}
// function isStringArray(arr:unknown): arr is String[]{
// }
//# sourceMappingURL=typeNarrowing.js.map