do {
    var userNum = prompt("enter an odd number between 1 & 50: ");
    if (isNaN(userNum)) {
        alert("That is not a number!");
    }
} while (userNum % 2 === 0 && isNaN(userNum));
