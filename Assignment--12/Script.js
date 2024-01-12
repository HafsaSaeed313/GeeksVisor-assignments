/* Q1) Add an element 'apple' to the end of an array of fruits. If the original array is
 [ 'orange', 'banana', 'grapes' ], what will the array look like after adding 'apple'? */

let fruits = ["Mango","Orange","Banana"];

fruits.push("Apple");

document.write(fruits , "</br>");

/* Q2) Remove the last element from an array of animals. If the original array is
[ 'lion', 'tiger', 'elephant', 'giraffe' ], what will the array look like after removing the last
element? */

let animals = ["lion", "tiger", "elephant", "giraffe"];

animals.pop();

document.write(animals, "</br>");

/* Q3) Add the element 'cherry' to the beginning of an array of fruits. If the original array
is [ 'apple', 'banana', 'grapes' ], what will the array look like after adding 'cherry'? */

let add = [ 'apple', 'banana', 'grapes' ];

add.unshift("Cherry");

document.write(add, "</br>");

/*Q4) Remove the first element from an array of colors. If the original array is
[ 'red', 'blue', 'green', 'yellow' ], what will the array look like after removing the first
element? */

let colors = [ 'red', 'blue', 'green', 'yellow' ];

colors.shift();

document.write(colors, "</br>");

/* Q5) Replace the element at index 2 with 'peach' in an array of fruits. If the original
array is [ 'apple', 'banana', 'grapes', 'cherry' ], what will the array look like after the
replacement? */

let replace = [ 'apple', 'banana', 'grapes', 'cherry' ];

replace[2] = "peach";

document.write(replace, "</br>");

/* Q6) Given an array of numbers, use the forEach method to double each number. If the
original array is [ 2, 4, 6, 8 ], what will the modified array look like? */


let originalnumber = [2, 4, 6, 8];
let modifiednumber = [];

originalnumber.forEach(function(number) {
  modifiednumber.push(number * 2);
});

console.log(modifiednumber);


/* Q7) Add the elements 'rose' and 'tulip' to the end of an array of flowers. If the original
array is [ 'daisy', 'lily' ], what will the array look like after adding the elements? */

let flowers = ['daisy', 'lily'];

flowers.push('rose','tulip');

document.write(flowers, "</br>");

/* Q8) Remove the elements at index 1 and 2 from an array of names. If the original array
is [ 'Alice', 'Bob', 'Charlie', 'David' ], what will the array look like after the removal? */

let names = [ 'Alice', 'Bob', 'Charlie', 'David' ];

names.splice(1,2);

document.write(names, "</br>");

/* Q9) Given an array of fruits, use the forEach method to add 'fresh' before each fruit. If
the original array is [ 'apple', 'banana', 'grapes' ], what will the modified array look
like? */

let fresh = [ 'apple', 'banana', 'grapes' ];

fresh.forEach(function (fresh, index, array) {
    array[index] = 'fresh ' + fresh;
  });

  document.write(fresh, "</br>");


/* Q10) Add the elements 'summer' and 'winter' to the beginning of an array of seasons.
If the original array is [ 'spring', 'autumn' ], what will the array look like after adding
the elements? */

let season = [ 'spring', 'autumn' ];

season.unshift("summer","winter");

document.write(season, "</br>");





