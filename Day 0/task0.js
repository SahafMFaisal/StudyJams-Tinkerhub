"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAge(birthyear) {
    if (birthyear >= 2005)
        return true;
    else
        return false;
}
function registerUser(name, birthYear) {
    if (checkAge(birthYear) === true) {
        console.log(name, ",Your User Registration is Successful");
    }
    else {
        console.log(name, ",Your User Registration is Successful");
    }
}
registerUser("SAHAF M FAISAL", 2004);
