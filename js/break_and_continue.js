// Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting
// the user if they enter invalid input.
//     Use a loop and the continue statement to output all the
// odd numbers between 1 and 50, except for the number the user
// entered.

//an immediately invoked function that runs functions as soon as they are defined
(function () {

    var userInput = parseInt(prompt("Please enter an odd number between 1-50:"));
    // outputs odd numbers between 1 and 100
    function oddNumber() {
        for (var i = 1; i <= 50; i=i+2) {
            if (userInput % 2 === 0) {
                break;
            } else if (userInput === i) {
                console.log("Yikes!, lets skip " + userInput);
            }
        }
    }

    while(userInput > 50 || isNaN(userInput) === true || userInput % 2 === 0) {
        alert("Hey! That's an invalid input. Try again");
        userInput = parseInt(prompt("Please enter an odd number between 1-50:"));
    }
    console.log(oddNumber(userInput));

    alert("The number to skip is: " + userInput);
    console.log("The number to skip is: " + userInput);
    console.log(oddNum(userInput));

})();







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
