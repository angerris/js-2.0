// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
let user = {};
user.name = "john";
user.surname = "smith";
user.name = "pete";
delete user.name;

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
let schedule = {};
function isEmpty(obj) {
  if (Object.keys(obj).length === 0) {
    console.log(true);
    return;
  }
  console.log(false);
}
isEmpty(schedule);

// Write the code to sum all salaries and store in the variable sum.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function sumSalaries(obj) {
  if (Object.values(obj).length === 0) console.log(0);
  else {
    console.log(
      Object.values(obj).reduce((a, b) => {
        return a + b;
      })
    );
  }
}
sumSalaries(salaries);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  console.log(obj);
}
multiplyNumeric(menu);
