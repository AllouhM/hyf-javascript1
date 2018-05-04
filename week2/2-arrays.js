"use strict";

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];

favoriteAnimals.push("turtle");

console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");

console.log("My new array will look like :" + ["blowfish", "meerkat",
    "capricorn", "giraffe", "turtle"]);

console.log(favoriteAnimals);

console.log("The array has a length of:" + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);

console.log(favoriteAnimals);

const index = favoriteAnimals.indexOf("meerkat");

console.log("the item you are looking for is at index :" + index);

//console.log("the item you are looking for is at index :" + favoriteAnimals.indexOf("meerkat"));

if (index !== -1) {
    favoriteAnimals.splice(1, 1);
}

// favoriteAnimals.splice(1, 1);

console.log(favoriteAnimals);
