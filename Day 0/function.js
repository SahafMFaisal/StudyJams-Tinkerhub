"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(a, b, c) {
    if (c)
        return (a + b + c);
    else
        return (a + b);
}
var sumValue = sum(1, 2, 2);
console.log(sumValue);
