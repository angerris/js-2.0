// What is the last value console.loged by this code? Why?
let i = 3;
while (i) {
  console.log(i--);
}
//1 because 0 is a 'falsy' value

//For each loop write down which values it is going to show. Then compare with the answer.
// Both loops console.log the same values, or not?
let j = 0;
while (++j < 5) console.log(j);
while (j++ < 5) console.log(j);
//the first loop basically means 'while 1 is smaller than 5 console.log 1'
//because the prefix form and postfix form differ by their behaviour obviously in this case

//the below loops output is the same because in the second case the initial i value
// doesn't become 1 'on time' as it would seem it should, because
// the condtion check and the loop iteration are before the step in this case
for (let i = 0; i < 5; i++) console.log(i); //0,1...4
for (let i = 0; i < 5; ++i) console.log(i); //0,1...4

// Use the for loop to output even numbers from 2 to 10.
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) console.log(i);
}
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).
for (let i = 0; i < 3; i++) {
  console.log(`number ${i}!`);
}
//my code below
let a = 0;
while (a < 3) {
  console.log(`number ${a}!`);
  a++;
}

// Write the code which outputs prime numbers in the interval from 2 to n.
function primeInTheInterval(num, n) {
  for (i = num; i <= n; i++) {
    if ([2, 3, 5, 7].includes(i)) {
      console.log(i);
    } else if (i % 2 && i % 3 && i % 5 && i % 7 && i > 1) {
      console.log(i);
    }
  }
}
primeInTheInterval(2, 30);
