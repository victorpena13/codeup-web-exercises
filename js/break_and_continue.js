do {
    var userNum = prompt("enter an odd number between 1 & 50: ");
    if (isNaN(userNum)) {
        alert("That is not a number!");
    }
} while (userNum % 2 === 0);


for (var i = 0; i <= 50; i++) {
    if (i === 27) {
        console.log("Yikes skipping " + i + "!");
    } else {
        console.log("Here is an odd number" + i  + "!");
    }
}
