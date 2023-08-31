// ===== STRINGS =====

// Write a function ucFirst(str) that returns the string str with the uppercased first character
function ucFirst(str) {
  console.log(str[0].toUpperCase() + str.slice(1));
}
ucFirst("hello");

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
function checkSpam(str) {
  const test = ["viagra", "xxx"].some((el) => str.toLowerCase().includes(el));
  console.log(test);
}
checkSpam("helloooxxx");

// Create a function truncate(str, maxlength) that checks the length of the str and,
//  if it exceeds maxlength – replaces the end of str with the ellipsis character "…",
// to make its length equal to maxlength.
function truncate(str, maxlength) {
  str.length > maxlength
    ? console.log(str.slice(0, maxlength) + "...")
    : console.log(str);
}
truncate("lorem ipsum", 7);

// Create a function extractCurrencyValue(str) that would extract the numeric value from such
//  string and return it.
function extractCurrencyValue(str) {
  console.log(+str.slice(1));
}
extractCurrencyValue("$120");
