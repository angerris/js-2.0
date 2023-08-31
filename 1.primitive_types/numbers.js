// ===== NUMBERS =====

// Why 6.35.toFixed(1) == 6.3?
console.log((6.35).toFixed(1)); // 6.3
//because the number 6.35 cannot be represented exactly as a binary floating-point number.

// How to round 6.35 the right way?
let num = Math.round(6.35 * 10);
console.log((num / 10).toFixed(1));

// This loop is infinite. It never ends. Why?
function loop() {
  let i = 0;
  while (i != 10) {
    i += 0.2;
  }
  //because i never becomes exactly 10
}

// Write the function random(min, max) to generate a random floating-point number from min to max
// (not including max).
function random(min, max) {
  const random = min + Math.random() * (max - min);
  console.log(random);
}
random(1, 5);

// Create a function randomInteger(min, max) that generates a random /integer/ number
//  from min to max including both min and max as possible values.
function randomInt(min, max) {
  const random = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(random);
}
randomInt(1, 10);
