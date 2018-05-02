'use strict';
function vehicleType(colore, code) {
    if (code === 1) {
        console.log("it is a " + colore + " car");
    }
    else if (code === 2) {
        console.log("it is a " + colore + " motorbike");
    }
    else {
        console.log("unknown vehicle");
    }
}

vehicleType("red", 1);
vehicleType("pink", 2);
vehicleType("blue", 5);
vehicleType("cyan", 1);
