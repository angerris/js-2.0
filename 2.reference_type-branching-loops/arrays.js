// What is this code going to show?
let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log(fruits.length); // 4

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.
let array = ["jazz", "blues"];
array.push("rock-n-roll");
array[Math.round(array.length / 2) - 1] = "classics";
array.shift();
array.unshift("rap", "reggae");

// What is the result? Why?
let arr = ["a", "b"];
arr.push(function () {
  console.log(this);
});
arr[2](); // 'a', 'b', function

// arrays can store any type, so function goes there. the function invokes and
//  'this' refers to the object it is being called on, so it outputs the whole array which is also 'kinda an object'
