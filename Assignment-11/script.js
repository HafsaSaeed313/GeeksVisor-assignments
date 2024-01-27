// Prompt the user for their country, city, and area


var country = prompt("Enter your country: ");
var city = prompt("Enter your city: ");
var area = prompt("Enter your area: ");

country = country.toLowerCase();

city = city.toLowerCase();

area = area.toLowerCase();


if (country === "pakistan" && city === "karachi" && area === "defence") {
    console.log("Welcome.");


} else {
    document.write("Invalid area.");
}



//  Prompt the user for their preference (tea or coffee) 

var userPreference = prompt("Do you prefer tea or coffee?");


userPreference = userPreference.toLowerCase();


if (userPreference === "tea") {
    console.log("Here is your tea.");


} else if (userPreference === "coffee") {
    document.write("Here is your coffee.");

} else {
    document.write("Something went wrong.");
}

// Prompt the user for membership status and student status

var Membership = prompt("Do you have a membership? (Yes/No)").toLowerCase();

var Student = prompt("Are you a student? (Yes/No)").toLowerCase();



if (Membership === "yes" || Student === "yes") {
    document.write("You qualify for a discount.");


} else {
    document.write("Sorry, no discount for you.");
}


// Prompt the user for their age and whether they have a valid ID

var userAge = parseInt(prompt("What is your age?"));

var ValidID = prompt("Do you have a valid ID? (Yes/No)").toLowerCase();

if (userAge > 18 && ValidID === "yes") {
    document.write("You are eligible.");


} else {
    document.write("Sorry, you are not eligible.");
}




var fatherIsPaying = prompt("Is your father paying for the shopping? (Yes/No)").toLowerCase();

var saleIsOn = prompt("Is there a sale? (Yes/No)").toLowerCase();


if (fatherIsPaying === "yes" || saleIsOn === "yes") {

    document.write("You will go shopping.");


} else {
    document.write("You will not go shopping.");
}


// Prompt the user for their age and car ownership status

var userAge = parseInt(prompt("What is your age?"));

var ownsCar = prompt("Do you own a car? (Yes/No)").toLowerCase();

if (userAge > 17 && ownsCar === "yes") {
    document.write("You can drive and you own a car.");


} else {
    document.write("You cannot drive a car.");
}


var dayNumber = parseInt(prompt("Enter a number (1-2) representing a day of the week:"));

if (dayNumber === 1) {
    console.log("Monday");

    
} else if (dayNumber === 2) {
    document.write("Tuesday");


} else {
    document.write("Invalid input. Please enter a number from 1 to 2.");
}


var userChoice = prompt("Choose a traffic light color (Red, Yellow, or Green):").toLowerCase();

if (userChoice === "red") {
    document.write("Stop! The light is red.");



} else if (userChoice === "yellow") {
    document.write(" Slow ! The light is yellow.");


} else if (userChoice === "green") {
    document.write("You can go. The light is green.");


} else {
    document.write("Invalid choice. Please choose Red, Yellow, or Green.");
}

var userDay = prompt("Enter a day of the week:").toLowerCase();


if (userDay === "tuesday" || userDay === "sunday ") {
    document.write("It's a weekday.");


} else if (userDay === "tuesday" || userDay === "sunday") {
    document.write("It's a weekend day.");


} else {
    document.write("Invalid input. Please enter a valid day of the week.");
}


var userAge = parseInt(prompt("Enter your age:"));

if (userAge >= 0 && userAge < 13) {
    document.write("You are a child.");


} else if (userAge >= 13 && userAge < 18) {
    document.write("You are a teenager.");


} else if (userAge >= 18 && userAge < 65) {
    document.write("You are an adult.");


} else if (userAge >= 65 && userAge < 150) {
    document.write("You are a senior.");


} else {
    document.write("Invalid age input.");
}