'use strict';
let arr = [];
let x = "Mahmoud";
let y = 10;
arr.push(x);
console.log(arr);
arr.push(y);
console.log(arr);
console.log(typeof x, typeof y);
console.log(typeof arr);

if (typeof x !== typeof y) {
    console.log('We can combin different datat type in an array');

}

let option1 = 6 / 0;
let option2 = 10 / 0;


if (option1 === option2) {
    console.log('yes definitely, we can compare infinities');
}
else {
    console.log('Sorry,, infinities can not be compared');
}
