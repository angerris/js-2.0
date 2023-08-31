//===== PRIMITIVE TYPES =====

// What will be output of i and n?(and why)
//***
let i = 10;
let n = i++ % 5;
console.log(i, n); //11 0

// Swap two variables
let a = 10;
let b = 3;
let c = a;
a = b;
b = c;
console.log(a, b); // 3 10

// Swap two variables without using the third one
function scope2() {
  let a = 10;
  let b = 3;
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b); // 3 10
}
scope2();
