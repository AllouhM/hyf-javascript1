'use strict';
function printObject(candidate) {
    for (let propertyName in candidate)
        console.log(propertyName + " = " + candidate[propertyName]);

}

const firstCandidate = {}
firstCandidate.name = ["Maartje Kruijt"];
firstCandidate.age = 26;
firstCandidate.personalStatus = "it is personal issue";
firstCandidate.nationality = "Dutch";
firstCandidate.profession = "instructor";

const secondCandidate = {
    name: "Mahmoud Allouh",
    age: 38,
    personalStatus: "it is personal issue",
    nationality: "Palestinian",
    profession: "Student",
};
printObject(firstCandidate);
printObject(secondCandidate);
