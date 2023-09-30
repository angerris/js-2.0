// 1. Given a number. Print “odd” if the numberis odd and “even” if itʼs even.
function evenOrOdd(num) {
  console.log(num % 2 > 0 ? "odd" : "even");
}
evenOrOdd(7);

// 2. Given two variables, which are the angles of a triangle. Find the third angle of the triangle. (Sum of the
// angles of a triangle equals 180 degrees).
function angleOfTriangle(ang1, ang2) {
  console.log(180 - (ang1 + ang2));
}
angleOfTriangle(75, 25);

// 3. Given a positive integer. Bring the last digit of the number to the beginning. Print the new number. If the
// last digit of the inserted numberis 0, number remains the same.
function lastToBeginning(num) {
  const str = num.toString().split("");
  console.log(str[str.length - 1] !== "0" ? str.pop() + str.join("") : num);
}
lastToBeginning(1002);

// 5. Given three numbers. Sort them by the ascending order.
function sortByAsc(...numbers) {
  console.log(
    numbers.sort((a, b) => {
      return a - b;
    })
  );
}
sortByAsc(45, 26, 78, 822, 1);

// 6. Find the sign of product of three numbers without multiplication operator. Display the specified sign.
function signOfProduct(...numbers) {
  let negative = 0;
  if (numbers.includes(0)) {
    console.log("unsigned");
  } else {
    for (const i of numbers) {
      if (i < 0) {
        negative++;
      }
    }
    console.log(!(negative % 2) ? "+" : "-");
  }
}
signOfProduct(4, 19, -2, -3, 2);

// 7. Insert a digit and a number. Check whetherthe digits contains in the number or not.
function checkIfContains(dig, num) {
  console.log(num.toString().includes(dig.toString()) ? "yes" : "no");
}
checkIfContains(5, 6734);

// 8. Enter a number. Reverse its first and last digits. Print the new number.
function lastToBeginning(num) {
  const str = num.toString();
  console.log(
    str.length > 1 ? +(str[str.length - 1] + str.slice(1, -1) + str[0]) : num
  );
}
lastToBeginning(895796);

// 9. Insert a number. Print ‘yesʼ if the numberis prime, ‘noʼ otherwise.
function checkIfPrime(num) {
  console.log(
    [2, 3, 5, 7].includes(num) ||
      (num % 2 && num % 3 && num % 5 && num % 7 && num > 1)
      ? "yes"
      : "no"
  );
}
checkIfPrime(47);

// 10. Given a number n ( n >= 0 ) . Print n Fibonacci number
function fibonacci(n) {
  let prev = -1;
  let curr = 1;
  if (n >= 0) {
    for (i = 0; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    console.log(curr);
    return;
  }
  console.log("enter a positive integer");
}
fibonacci(10);

//11. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum,
//print the quotient, otherwise print the remainder
function divisionResult(num) {
  if (num) {
    const temp = num.toString().split("");
    const sum = temp.reduce((a, b) => {
      return +a + +b;
    });
    const prod = temp.reduce((a, b) => {
      return +a * +b;
    });
    console.log(
      prod % sum ? "remainder: " + (prod % sum) : "quotient: " + prod / sum
    );
  } else {
    console.log("cannot calculate");
  }
}
divisionResult(455);
