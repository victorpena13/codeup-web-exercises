(function(){
    // do {
    //     var numberPicked = prompt("pick an odd number between 1 & 50");
    //     if (numberPicked % 2 === 0)
    //         alert(numberPicked + " is not odd, please pick again");
    //     else if (numberPicked <1 || numberPicked > 50) {
    //         alert(numberPicked + " is not between 1 & 50");
    //     else if (typeof Number(numberPicked) != "number" && Number(numberPicked) != NaN) {
    //         alert(numberPicked + " is not a number");
    //     else {
    //         alert("congrats you picked the right number");
    //         break;
    //     }
    // } while (true)
    //     var yikes = function(skip) {
    //         for (var i = 1; i<50; i+=2) {
    //             if (i == skip) {
    //                 console.log("yikes! skipping number: " + i);
    //                 continue;
    //             }
    //             console.log("Here is an odd number: +" +i);
    //         }
    //     }
    //     // var userEntered = Number(prompt("Enter a number: "))
    //     yikes(numberPicked);
    // }

    while(true){

        chooseNumber=prompt("choose an odd number between 1 to 50");

        if(isNaN(chooseNumber)) {
            alert("Try again");
            continue;
        }

        var num = parseInt(chooseNumber);

        if(num%2===0) {
            continue;
        }


        if(num <= 50 && num > 0) {
            break;
        }


    }


    var totalNumber=0;
    while (totalNumber<=50){
        // var totalNumber=Math.floor(Math.random() * 50) + 1;
        totalNumber++;
        if (totalNumber%2===0){
            continue;
        }

        if (totalNumber===Number(chooseNumber)){
            console.log("Yikes! Skipping Number is "+ chooseNumber + " !");
        }else{
            console.log("Here is an odd number: " + totalNumber);
        }

    }


})();