"use strict";
function printObject(candidate) {

    //This is (for - in )loop it is very interesting you can read about it in the link below
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

    for (const propertyName in candidate)
        console.log(propertyName + " = " + candidate[propertyName]);

}

const firstCandidate = {};
firstCandidate.name = ["Maartje Kruijt"];
firstCandidate.age = 26;
firstCandidate.personalStatus = "it is a personal issue";
firstCandidate.nationality = "Dutch";
firstCandidate.profession = "instructor";

printObject(firstCandidate);

