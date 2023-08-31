// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”.
// In that case, the function should return null.
let readNumber;
while (isNaN(readNumber)) {
  readNumber = prompt("enter a number please", 0);
}
if (!isNaN(readNumber)) {
  alert(`read: ${readNumber}`);
}
