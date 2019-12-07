// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(number) {
    for (var i = 0; i < 11; i++) {
        console.log(i + "*" + number + "=" + (number * i));
    }
}
var randomNumber = Math.floor(Math.random() * 11);

showMultiplicationTable(randomNumber);

// Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even.
//

var randomNum = Math.floor(Math.random() * 180) + 20;

console.log("your number is " + randomNum);

for (var i = 0; i < 11; i++) {
    if (randomNum % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

for (var i = 1; i <= 10; i++){
    console.log(String(i).repeat(i));
}


