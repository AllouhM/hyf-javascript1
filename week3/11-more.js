"use strict";

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

if (x == y) {
    //the result will be false
    console.log("true");
} else {
    console.log("false");
}

if (x === y) {
    //the result will be false
    console.log("true");
} else {
    console.log("false");
}

z === y ? console.log("true") : console.log("false");//the result will be true

z === x ? console.log("true") : console.log("false");//the result will be false
