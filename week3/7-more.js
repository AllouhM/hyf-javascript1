'use strict';
const vehicles = ["motorbike", "caravan", "bike", "car"];

function vehicleType(color, code, age) {
    if (code < 3) {
        if (age <= 1) {
            console.log("it is a " + color + " new " + vehicles[code]);
        }
        else {
            console.log("it is a " + color + " old " + vehicles[code]);
        }
    }

    else {
        console.log("unknown type " + color + " vehicle");
    }
}
vehicleType('green', 1, 1);
vehicleType('red', 0, 2);
vehicleType('cyan', 5, 2);
