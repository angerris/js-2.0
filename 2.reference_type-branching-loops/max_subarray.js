// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.
// If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:
function getMaxSubSum(arr) {
  let global = arr[0];
  let curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curr + arr[i] > arr[i] ? (curr += arr[i]) : (curr = arr[i]);
    if (curr > global) {
      global = curr;
    }
    // for better understanding:
    // console.log("current " + curr, "iterator " + arr[i], "global " + global);
  }
  global < 0 || !arr.length ? console.log(0) : console.log(global);
}
getMaxSubSum([-1, 2, 3, -9]); // 5
getMaxSubSum([2, -1, 2, 3, -9]); // 6
getMaxSubSum([-1, 2, 3, -9, 11]); // 11
getMaxSubSum([-2, -1, 1, 2]); // 3
getMaxSubSum([100, -9, 2, -3, 5]); //100
getMaxSubSum([1, 2, 3]); //6
getMaxSubSum([]); //0
getMaxSubSum([-1, -2, -3]); //0

//explanation(!!!):

//here i'm using the kadane's algorithm because it's execution is faster and it's much easier to do
//the main idea is that maximum subarray ending at the n-th index is either the current element 'x'
//OR 'x' combined with the prev sum

//so, i am creating two variables:
//the global variable which represents the result of the maximum subarray sum
//and the 'curr' variable, represents the current subarray sum

//then im creating a for loop which starts from index 1

//then here goes the key part of kadane's alg. - checking the maximum subarray sum
//whether it's the current element itself or the current element + current sum

//after all we refresh the 'global' value giving it the maximum current value to 'remember'

//and finally checking whether the array was empty or contained negative values only, return in that cases
