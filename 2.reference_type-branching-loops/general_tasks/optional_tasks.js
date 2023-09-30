// 1. Enter a number. Find the difference between its biggest and smallest digits.
function digitsDifference(num) {
  console.log(Math.max(...num.toString()) - Math.min(...num.toString()));
}
digitsDifference(152);

// 2. Convert base-2 number to base-10
function binToDec(bin) {
  let arr = bin.toString().split("").map(Number);
  let indices = [];
  let powArr = [];
  let result = [];
  arr.forEach((el, index) => (el > 0 ? indices.push(index) : null));
  for (i = arr.length - 1; i >= 0; i--) {
    powArr.push(Math.pow(2, i));
  }
  indices.forEach((index) => {
    result.push(powArr[index]);
  });
  console.log(
    result.reduce((a, b) => {
      return a + b;
    })
  );
}
binToDec(10010);

// 3. Takes two arrays and insert the second array in the middle of the first array. The first array always has
// two elements.
function insertArray(arr1, arr2) {
  const [a, b] = arr1;
  console.log([a, ...arr2, b]);
}
insertArray(
  [
    [1, 2],
    [5, 6],
  ],
  [[3, 4]]
);

// 4. Enter a positive number. Calculate and print its factorial. ( n! = n _ (n-1) _ (n-2) _ … _ 3 _ 2 _ 1 , 0! = 1 )
function factorial(num) {
  let fact = 1;
  for (i = num; i >= 1; i--) {
    fact = fact * i;
  }
  console.log(`${num}! = ${fact}`);
}
factorial(5);

// 5. Write a program to check the validity of password input by users.
function isPasswordValid(password) {
  const reg =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,16}$/;
  console.log(reg.test(password) ? "valid" : "invalid");
}
isPasswordValid("Aaza1234566#");
