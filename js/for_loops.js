"use strict";
//a function that accepts a number(y) and passes y through a for loop
// to give you the multiples of y by 1 - 10.
//console.log the function and passed in a literal number to display results
//in the console.
function showMultiplicationTable(y) {
    for(var i = 0; i<11; i++) {
        console.log(y + " x " + i + " = " + (y*i));
    }
}
console.log(showMultiplicationTable(3));


// Use a for loop and the code from the previous lessons to
// generate 10 random numbers between 20 and 200 and output to
// the console whether each number is odd or even.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

for(var a = 0; a<10; a++) {
    var random = getRandomInt(20,200);
    if (random % 2 === 0) {
        console.log("even = " + random);
    } else {
        console.log("odd = " + random);
    }
}

// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999

for(var b = 1; b < 10; b++) {
    var output = '';
    for (var j = 1; j<=b; j++) {
        output = output + b;
        // output+=b;
    }
    console.log(output);
}

// Create a for loop that uses console.log to create
// the output shown below.
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5

for(var d = 100; d>=5; d-=5) {

    console.log(d);
}