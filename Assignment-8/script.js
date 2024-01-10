let name = ["Sunday", "Monday", "Tuesday", "Wednesday", " Thursday", "Friday", "Saturday"]

let d = new Date();

let days = name[d.getDay()];

document.write("<h1>Today</h1>")

if (name = 0) {
    document.write(days + " its fun day")
} else {
    document.write(days + " its work day </br> </br>")
}

document.write("<h1>Number Game</h1> </br>")
let num = Math.floor(Math.random() * 10);
let input = parseInt(prompt("Enter any number"));

if (num === input) {
    document.write(num + "  You won!");
} else {
    document.write(num + "  Try again");
};