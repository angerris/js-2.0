// 12. Given a sentence with missing words and an array of words. Replace all ‘_ʼ in a sentence with the words
// from the array.
function replaceStr(str, arr) {
  let newStr = str.split("");
  let newArr = [];
  let reg = /_/g;
  while ((match = reg.exec(str))) {
    newArr.push(match.index);
  }
  for (let i = 0; i < newArr.length; i++) {
    newStr.splice(newArr[i], 1, arr[i]);
  }
  console.log(newStr.join(""));
}
replaceStr("_, we have a _.", ["Houston", "problem"]);

// 13. Given mixed array of numbers, strings, booleans, nulls and undefined. Filter array and get all the numbers
// in a separate array. Arrange them such as from the beginning are the odds and from the ending the
// evens.
function filterNumbers(arr) {
  const odd = [];
  const even = [];
  arr.forEach((e) => {
    if (typeof e == "number") {
      e % 2 ? odd.push(e) : even.push(e);
    }
  });
  console.log([...odd, ...even]);
}
filterNumbers([8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3]);

// 14. Given an array of strings and numbers. Print the number of integers and the number of strings in the
// array.
function numberOfTypes(arr) {
  let num = 0;
  let str = 0;
  arr.forEach((e) => {
    typeof e == "number" ? num++ : str++;
  });
  console.log(`numbers: ${num}, strings: ${str}`);
}
numberOfTypes([1, "10", "hi", 2, 3]);

// 15. Given an array of strings. Find the strings with maximum and minimum lengths in array. Print the sum of
// theirlengths.
function sumOfStrings(arr) {
  let newArr = [];
  arr.forEach((e) => {
    newArr.push(e.length);
  });
  console.log(Math.max(...newArr) + Math.min(...newArr));
}
sumOfStrings(["anymore", "raven", "me", "communicate"]);

// 16. Given an array of numbers and a number. Find the index of a first element which is equal to that number.
// If there is not such a number, that find the index of the first element which is the closest to it.
function findClosestIndex(arr, num) {
  const index = arr.reduce((prev, curr) => {
    return Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev;
  });
  console.log(arr.indexOf(index));
}
findClosestIndex([21, -9, 15, 2116, -71, 33], -71);

// 17. Given a sentence as a string. Split it according to space and comma and create an array consisting of the
// words of the array. The last word should not contain the last . or! .
function splitString(str) {
  console.log(str.replace(/[!@#\$%\^\&*\)\(+=._,\-]+/g, "").split(" "));
}
splitString("Keep your friends close, but your enemies closer.");

// 18. Given an array of a size smallerthan 100. It consists of numbers from 0 to 99 in any order. Create a new
// array where each element from th at array is placed underthe index of its value. Start from the smallest
// value and end with the biggest one. If there are missing values, put in its places undefined.
function fillArray(arr) {
  const filled = new Array(Math.max(...arr) - Math.min(...arr) + 1).fill(
    undefined
  );
  for (const i of arr) {
    filled[i - Math.min(...arr)] = i;
  }
  console.log(filled);
}
fillArray([26, 30, 19, 5]);

// 19. Given an array consisting from the arrays of numbers (like a two-dimensional array). Find sum of each
// row and print them as an array.
function sumOfArrayRows(arr) {
  let newArr = [];
  for (const i of arr) {
    newArr.push(
      i.reduce((a, b) => {
        return a + b;
      })
    );
  }
  console.log(newArr);
}
sumOfArrayRows([
  [3, 4, 5],
  [1, 0, 0],
  [4, 5, 4],
  [8, 8, -1],
]);
