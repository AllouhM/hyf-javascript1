'use strict';
let emptyObject = {};
console.log(typeof emptyObject);
let teachers = [
    { firstName: 'Philipp', lastName: 'Beau' },
    { firstName: 'Unmesh', lastName: 'Joshi' },
    { firstName: 'Osman', lastName: 'Üngür' },
    { firstName: 'Hardit', lastName: 'Singh' },
    { firstName: 'Jim  ', lastName: 'Cramer' },
    { firstName: 'Rohan', lastName: 'Nicholls' },
];
teachers[0].Language = "HTML and CSS";
teachers[1].Language = "CLI and Git";
teachers[2].Language = "CLI and Git";
teachers[3].Language = "CLI and Git";
teachers[4].Language = "Javascript";
teachers[5].Language = "Javascript";

console.log(teachers);
