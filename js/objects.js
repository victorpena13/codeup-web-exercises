// (function() {
//     "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Victor",
        lastName: "Pena"
    }
        console.log(person.firstName);
        console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = function(){
        return "Hello from " + this.firstName + this.lastName + "!";
    };

    console.log(person.sayHello());






    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    //create a function to calculate the discount to use this in foreach loop
    var shoppers = [
            {name: 'Cameron', amount: 180},
            {name: 'Ryan', amount: 250},
            {name: 'George', amount: 320}

    function calculateDiscount(total) {
        var output = 0;
        if (total > 200) {
            output = total * .12;
        }
        return output;
    }

    //create a function to convert number to currency
    function convertToCurrency(num) {
        return "$" + num.toFixed(2);
    }

    //display individual info for each shopper
    function displayShopperInfo(shopper) {
        //default empty string
        var output = "";
        //var stores total amount
        var amount = convertToCurrency(shopper.amount);
        //var stores discount to be applie
        var discount = convertToCurrency(calculateDiscount(shopper.amount));
        // var stroes final total
        var finalAmount = convertToCurrency(shopper.amount - calculateDiscount(shopper.amount));
        //concatenate onto empy string
        output += shopper.name + " spent" + amount;
        output += " and recieved a discount of " + discount;
        output += " and paid " + finalAmount;
        return output;
    }

    //display info for all shoppers

    function displayShoppersInfo(shoppers) {
        shoppers.forEach(function(shopper){
            console.log(displayShopperInfor(shopper));
        });
    }

    displayShoppersInfo(shoppers);


    // ];
    // // names.forEach(function(name) {
    // //     console.log('here is a name: ' + name + '.');
    // // })
    //
    // shoppers.forEach(function(client) {
    //
    // }
    //
    //
    //     if(client.amount>200) {
    //         console.log(client.name + " you get the discount! You before is " + client.amount + " your total after is " + client.amount * .88);
    //     } else {
    //         console.log(client.name + " didn't qualify for discount!");
    //     }
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "animal",
            author: {
                firstName: "George",
                lastName: "Orwell"
            }
        },
        {
            title: "the name of the wind",
            author: {
                firstName: "Patrick",
                lastName: "Rothfuss"
            }
        },
        {
            title: "Harry Potter and the half blood prince",
            author: {
                firstName: "J.K.",
                lastName: "Rowling"
            }
        },
        {
            title: "Art of War",
            author: {
                firstName: "name1",
                lastName: "name2"
            }
        },
        {
            title: "book",
            author: {
                firstName: "name3",
                lastName: "name4"
            }
        },
    ];


    books.forEach(function(book,i)) {
        var output = "";
        output += "Book # " + (i+1) + "/n";
        output += "Title: " + book.title + "/n";
        output += "Author: " + book.author.firstName + " " + book.author.lastName + "/n";
        output += "---" + "/n";
        console.log(output);
    });


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */








    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    function createBook(title, firtName, lastName) {
        var book = {}:
        book.title = title;
        book.author = {};
        book.author.firstName = firstName;
        book.author.lastName = lastName;
        return book;
    }

    books.push(createBook("How to draw Manga", "katy", "coope"));
    console.log(books);


    function showBookInfo(book,i){
        var book = {};
        book.title = title;
        book.author = {};
        book.author.firstName = firstName;
        book.author.lastName = lastName;
        return book;
        
        
        
        
        
        
        
    }
    
    
    
    
    
    
    function String ifTrue(a) {
       if (a == )  
}


// })();