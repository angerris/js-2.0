// 4. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
function isMultiple(...numbers) {
  const val = +prompt("enter a number please");
  const multiples = [];
  numbers.forEach((num) => {
    if (val % num == 0) multiples.push(num);
  });
  isFinite(val)
    ? multiples.length > 0
      ? alert(`${val} is a multiple of ${multiples.join(", ")}`)
      : alert(`${val} is not a multiple of ${numbers.join(", ")}`)
    : alert("please enter a valid number");
}
isMultiple(3, 5, 7);
