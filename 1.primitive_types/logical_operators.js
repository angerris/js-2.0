// ===== LOGICAL OPERATORS =====

// What is the code below going to output?
console.log(null || 2 || undefined); //2
console.log(console.log(1) || 2 || console.log(3)); //1
console.log(1 && null && 2); //null
console.log(console.log(1) && console.log(2)); //2
console.log(null || (2 && 3) || 4); //3

// Write an if condition to check that age is between 14 and 90 inclusively.
function isAgeInTheRange(age) {
  if (age >= 14 && age <= 90) {
    console.log("age is in the range");
  } else {
    console.log("age in NOT in the range");
  }
}
isAgeInTheRange(17);

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
function isAgeIsNotInTheRange(age) {
  if (age < 14 || age > 90) {
    console.log("age is NOT between 14 and 90");
  } else {
    console.log("age is between 14 and 90");
  }
}
isAgeIsNotInTheRange(27);

// Which of these console.logs are going to execute?
// What will the results of the expressions be inside if(...)?
if (-1 || 0) console.log("first"); //first -1
if (-1 && 0) console.log("second"); //condition is false 0
if (null || (-1 && 1)) console.log("third"); //third
