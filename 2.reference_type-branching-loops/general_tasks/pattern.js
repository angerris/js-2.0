// 20. Print the following pattern:
// 1
// 2 6
// 3 7 10
// 4 8 11 13
// 5 9 12 14 15

//explanation: think of an arithmetic progression, column outputs works that way
function pattern(rows) {
  let str = "";
  for (let row = 1; row <= rows; row++) {
    //outer loop
    let num = row;
    let inc = rows - 1; //a₁ = rows-1
    for (let col = 1; col <= row; col++) {
      //inner loop
      str += num + " ";
      num += inc;
      inc--; //d = -1
    }
    str += "\n";
    console.log(inc);
  }
  console.log(str);
}
pattern(5);

//explaining each step:

// 1
// 2 6 (6 is num + inc = 2 + 4, and so on...)
// 3 7 10 (10 = 7 + 3)
// 4 8 11 13 (13 = 11 + 2)
// 5 9 12 14 15 (and finally 15 = 14 + 1)

//the first column is just the increasing num itself
