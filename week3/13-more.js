"use strict";

//What will be the value of result ? (And why ?) Add your explanation in a JavaScript comment.

const bar = 42;
const result = typeof typeof bar;

// will be string because the data type of (bar) is "number" and the data type of the string "number" is a string

console.log(result);
