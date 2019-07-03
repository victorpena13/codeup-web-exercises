'use strict';

// $('body').css('background-color', 'light-gray');
// $('.headers').css('color', 'orange');
// $('#last').css('color', 'purple')
// // alert($('#last').html());
// $('.codeup').css('border', '1px solid red');
//
// $('li').css('font-size', '20px');
// $('h1, li, p').css('background-color', 'yellow');


    $('h1').click(function(){
        $(this).css('background-color', 'orange')
    });

    // having p in both parenthesis well make affect all paragraphs at same time
    // placing 'this' instead of 'p' will affect only the one being clicked.
    $('p').dblclick(function(){
        $('p').css('font-size', '18px')

    });

    $('li').hover(
        function(){
        $(this).css('color', 'red')
        } ,
        function(){
    $(this).css('color', 'black')
    });