'use strict';


function advertisement(vehicles) {
    for (let i = 0; i < vehicles.length - 1; i++) {
        adMessage += vehicles[i] + ', ';
    }

    console.log(adMessage += "and " + vehicles[vehicles.length - 1] + ".");
}
let adMessage = " Amazing Mahmoud's Garage, we service ";
let vehiclesShop = ["motorbikes", "caravans", "bikes", "cars", "e-bikes"];
vehiclesShop.push('buses');
advertisement(vehiclesShop);
