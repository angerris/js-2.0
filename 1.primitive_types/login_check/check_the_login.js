// Write the code which asks for a login with prompt.
// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.
// The password is checked as follows:
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

const inputName = prompt("who's there?");
if (inputName === "admin") {
  const inputPassword = prompt("password?");
  if (inputPassword === "theMaster") {
    alert("welcome!");
  } else if (
    inputPassword !== "theMaster" &&
    typeof inputPassword === "string"
  ) {
    alert("wrong password!");
  } else {
    alert("canceled");
  }
} else if (inputName !== "admin" && typeof inputName === "string") {
  alert("i dont know you!");
} else {
  alert("canceled");
}
