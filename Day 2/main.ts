/* Day 2
Question 3
Write a TypeScript function that takes an array of numbers and returns a new array 
containing only the first and last elements of the input array. Requirements: If the 
array has only one element, the function should return an array with that element 
duplicated. Ensure the function handles arrays with a single element correctly.*/

function getElementInArray(...num: number[]) {
  return [num[0], num[num.length - 1]];
}

console.log(getElementInArray(1, 2, 3, 4, 5)); // Output: [1, 5]

console.log(getElementInArray(10)); // Output: [10, 10]

console.log(getElementInArray()); // Output: []undifined

/* Question 4

Write a TypeScript function that takes an array of numbers and returns the largest 
number in the array. Requirements: The function should handle arrays with positive
and negative numbers. If the array contains only one number, return that number.
Ensure the function handles an empty array gracefully
(you might decide to return undefined or throw an error based on your needs).

   Note: This solution avoids using built-in methods like Math.max and demonstrates
basic iteration and comparison logic.*/

function getLargestNumber(...num: number[]) {
  let result = num.length;
  let max = num[0];

  for (let i = 1; i < result; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}

console.log(getLargestNumber(1, 2, 3, 4, 5)); // Output: 5

console.log(getLargestNumber(10, 20, 30, 40, 50)); // Output: 50
