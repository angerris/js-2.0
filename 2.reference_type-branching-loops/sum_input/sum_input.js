// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.

function sumInput() {
  let val;
  let arr = [];
  do {
    val = prompt("enter a number please");
    if (isFinite(val) && val !== null && val !== "") arr.push(+val);
  } while (isFinite(val) && val !== null && val !== "");
  alert(
    arr.reduce((a, b) => {
      return a + b;
    })
  );
}
sumInput();
