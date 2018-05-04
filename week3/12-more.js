"use strict";

const o1 = { foo: "bar" };
const o2 = { foo: "bar" };
const o3 = o2;

console.log("o1", o1, "o2", o2, "o3", o3);

o1.foo = "baz";

console.log("o1", o1, "o2", o2, "o3", o3);

//Explain why making a change to o1 does not affect o3.
//This because each one of them declared and assigned to a value 
// separately ( self standing ). they are in any way not related.

o2.foo = "hyf";

console.log("o1", o1, "o2", o2, "o3", o3);

//Explain why making a changes o2 does affect o3.
// This is normal because we assigned to const o3 const o2 as a value in this case const o3 
//will take the value of o2 and any change we make on const o2 
