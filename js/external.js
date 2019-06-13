"use strict";
console.log("Hello from external JavaScript");
alert("Welcome to my Website!");
var userColor = prompt("What is your favorite color?");
alert("really! " + userColor +  ", that's my favorite color too!");

var littleMermaidRental =  Number(prompt("How many days are you renting the little mermaid?"));
var brotherBearRental =  Number(prompt("How many days are you renting brother bear?"));
var herculesRental =  Number(prompt("How many days are you renting Hercules?"));
var total = (littleMermaidRental + brotherBearRental + herculesRental) * 3;
alert ("you owe: " + total)

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var googleHours = Number(prompt("How many hours did you work for Google this week?"));
var amazonHours = Number(prompt("How many hours did you work for Amazon this week?"));
var facebookHours = Number(prompt("How many hours did you work for Facebook this week?"));
alert Number("you earned: " + (googleHours * googleRate) + (amazonHours * amazonRate) + (facebookHours * facebookRate));

var classTime = Number(prompt("What time is the class?"));
var noScheduleConflict = !confirm("Does the student have a class at " + classTime);
var maxClassSize = Number(prompt("What is the maximum class size?"));
var studentsEnrolled = Number(prompt("How many students are currently enrolled? "));
console.log(studentsEnrolled)
alert("students can enroll in class: " + (noScheduleConflict && (studentsEnrolled < maxClassSize)));

var isPremiumMember = confirm("is the customer a premium member?");
var numberItemsBought = Number(prompt("how many items did the customer purchase?"));
var isOfferValid = confirm("Is this coupon still good?");
alert("Customer coupon valid: " + (isOfferValid && (isPremiumMember || numberItemsBought >= 2)));