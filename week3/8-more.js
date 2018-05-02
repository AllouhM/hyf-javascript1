'use strict';
//we can use  this code to add other vehicles without changing the code.
function advertisement(vehicles) {
    //This is (for - in )loop it is very interesting you can read about it in the link below
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
    for (let i = 0; i < vehicles.length - 1; i++) {
        adMessage += vehicles[i] + ', ';
    }

    console.log(adMessage += "and " + vehicles[vehicles.length - 1] + ".");
}
let adMessage = " Amazing Mahmoud's Garage, we service ";
let vehiclesShop = ["motorbikes", "caravans", "bikes", "cars", "e-bikes"];
advertisement(vehiclesShop);
