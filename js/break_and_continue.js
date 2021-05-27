
do {
    var userNum = prompt("enter an odd number between 1 & 50: ");
    if (isNaN(userNum)) {
        alert("That is not a number!");
    } else if (userNum >= 50) {
        alert("that number doesn't work");
        var userNum = prompt("enter an odd number between 1 & 50: ");
    }
} while (userNum % 2 === 0);


for (var i = 0; i <= 50; i++) {
    if (i === 27) {
        console.log("Yikes skipping " + i + "!");
    } else {
        console.log("Here is an odd number" + i  + "!");
    }
}


// var userNum = prompt("enter an odd number between 1 & 50: ");
//
// if (isNaN(userNum)) {
//     alert
// }
//
//
//
//
//
// //2 examples of how to make the above example a break and continue statement.
//
// var numberToStopAt = 5;
//
// for (var i = 1; i< 100; i++) {
//     console.log('loop counter is : ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         break;
//         //any code beyond this break will not be evaluated.
//     }
// }
//
// for (var i = 1; i < 100; i++) {
//     if(i%2 !== 0) {
//         continue;
//     }
//     console.log('Here is a lovely even number: ' + i);
// }
