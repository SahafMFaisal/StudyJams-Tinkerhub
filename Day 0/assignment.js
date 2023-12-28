"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function checkAge(birthYear) {
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    return age >= 18;
}
function registerUser(name, birthYear) {
    var isUserOfAge = checkAge(birthYear);
    if (isUserOfAge)
        console.log(name, " Your User Registration Success!");
    else
        console.log(name, " Your User Registration Failed!");
}
var userName = "SAHAF M";
var userBirthYear = 2004;
registerUser(userName, userBirthYear);
