"use strict";

function vehicleType(color, code) {
    if (code === 1) {
        console.log("it is a " + color + " car");
    }
    else if (code === 2) {
        console.log("it is a " + color + " motorbike");
    }
    else {
        console.log("unknown vehicle");
    }
}

vehicleType("red", 1);

vehicleType("pink", 2);

vehicleType("blue", 5);

vehicleType("cyan", 1);
