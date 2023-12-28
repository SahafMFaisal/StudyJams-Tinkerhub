"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculate(a, b, operator) {
    if (operator === '+')
        return a + b;
    else if (operator === '-')
        return a - b;
    else
        return " UNDEFINED OPERATOR ";
}
var value = calculate(1, 2, 'c');
console.log(value);
