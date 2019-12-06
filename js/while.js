"use strict";


var i = 2;
while (i <= 65536) {
    console.log(i);
    i=i*2
}


// An ice cream seller can't go home until she sells all of her cones. Write a JS program that ' +
// 'generates a random number between 50 and 100 representing the amount of cones to sell. ' +
// 'Your code should generate numbers between 1 and 5, simulating the amount of cones being ' +
// 'bought by her clients. Use a do-while loop to log to the console the amount of cones ' +
// 'sold to each person. This is how you get the random numbers.


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var randomNumber = Math.floor(Math.random() * 5) + 1



do {
    console.log("total cones: " + allCones + "sold: " + randomNumber + "left: " + (allCones - randomNumber));
} while (randomNumber <= allCones);

console.log("All Done");

// "use strict"
//
// var i = 2;
// while (i <= 65536) {
//     console.log(i);
//     i=i*2
// }
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
//
//
// var allCones = Math.floor(Math.random() * 50) + 50;
// console.log("starting the day with" + allCones + ' cones.')
//
// do {
//     var cones= Math.floor(Math.random() * 5) + 1;
//     if (cones > allCones) {
//         console.log("i cannot sell you " + cones + ", I only have " + allCones + " cones.")
//     } else {
//         allCones -= cones;
//         console.log("I sold " + cones + " cones.");
//     }
// }
//
// while (allCones > 0);
// console.log("I'm all done ")


