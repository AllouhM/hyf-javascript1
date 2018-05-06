"use strict";

//we can use  this code to add other vehicles without changing the code.

function advertisement(vehicles) {

    for (let i = 0; i < vehicles.length - 1; i++) {
        adMessage += vehicles[i] + ', ';
    }

    console.log(adMessage += "and " + vehicles[vehicles.length - 1] + ".");
}

let adMessage = " Amazing Mahmoud's Garage, we service ";
const vehiclesShop = ["motorbikes", "caravans", "bikes", "cars", "e-bikes"];

advertisement(vehiclesShop);
