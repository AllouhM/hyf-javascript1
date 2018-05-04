"use strict";

//This is another way for exercise 8, but in this way we have to change the code when we
//want to do exercise 9. we can use the way in file 8-more.js if we don't want to change the
//code for exercise 9.

function advertisement(vehicles) {
    console.log("Amazing Mahmoud's Garage" + "," + " we service " + vehicles[0]
        + "," + vehicles[1] + "," + vehicles[2] + "," + " and" + vehicles[3] + ".");
}

const shop = [" motorbikes", " caravans", " bikes", " cars"];

advertisement(shop);
