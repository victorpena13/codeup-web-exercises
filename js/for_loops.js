function showMultiplicationTable(number) {
    for (var i = 0; i < 11; i++) {
        console.log(i + "*" + number + "=" + (number * i));
    }
}
var randomNumber = Math.floor(Math.random() * 6);

showMultiplicationTable(randomNumber);

















// function showMultiplicationTable(number) {
//     for (var i = 0; i <= 10; i++) {
//         var result = number * i;
//         console.log(number + ' * ' + i + ' = ' + result);
//     }
// }
// console.log(showMultiplicationTable(7));
//
//
// for(var i = 1; i <= 10; i++) {
//     var number = Math.floor(Math.random() * 181) + 20;
//     if (number %2 === 0) {
//         console.log("here is an even number: " + number);
//     } else {
//         console.log("here is an odd number: " + number);
//     }
//
// }
//
//
// for (var i = 1; i <= 10; i++){
//     console.log(String(i).repeat(i));
// }
//
// for (var i = 100; i >=5; i= i-5) {
//     console.log(i);
// }

