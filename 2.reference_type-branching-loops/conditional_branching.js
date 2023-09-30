// Will alert be shown?
if ("0") {
  console.log("Hello");
}
//yes, because the string is not empty so it's true

// Rewrite this if using the conditional operator '?':
let result;
if (a + b < 4) {
  result = "Below";
} else {
  result = "Over";
}
//my code below
a + b < 4 ? (result = "below") : (result = "over");

// Rewrite if..else using multiple ternary operators '?'.
let message;
if (login == "Employee") {
  message = "Hello";
} else if (login == "Director") {
  message = "Greetings";
} else if (login == "") {
  message = "No login";
} else {
  message = "";
}
//my code below
login == "employee"
  ? (message = "hello")
  : login == "director"
  ? (message = "greetings")
  : login == ""
  ? (message = "no login")
  : (message = "");
