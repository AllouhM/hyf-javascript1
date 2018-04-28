'use strict';
let name = 'mahmoud';
console.log('The value of the variable is : ' + name);
console.log('My variable type is : string');
console.log(typeof name);
let student = true;
console.log('The value of the variable is : ' + student);
console.log('My variable type is : boolean');
console.log(typeof student);
let age = 20;
console.log('The value of the variable is : ' + age);
console.log('My variable type is : number');
console.log(typeof age);
let grades = [95, 90, 88, 45]
console.log('The value of of variable is : ' + grades);
console.log('My variable type is : object');
console.log(typeof grades);
if (typeof name === typeof age) {
    console.log('Same type');
}
else {
    console.log('Different types');
}

let rank = 8; // I added this variable just to compare between variables and get "same type" as I don't have two variables above with "number" data type.

if (typeof rank === typeof age) {
    console.log('Same type');
}
else {
    console.log('Different types');
}


