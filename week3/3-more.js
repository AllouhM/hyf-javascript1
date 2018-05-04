"use strict";
function printObject(candidate) {
    for (let propertyName in candidate)
        console.log(propertyName + " = " + candidate[propertyName]);

}

const firstCandidate = {};
firstCandidate.name = ["Maartje Kruijt"];
firstCandidate.age = 26;
firstCandidate.personalStatus = "it is a personal issue";
firstCandidate.nationality = "Dutch";
firstCandidate.profession = "instructor";

printObject(firstCandidate);

