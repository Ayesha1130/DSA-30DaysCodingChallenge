// Day 3

/*Question 5: 
Remove duplicates from array
Write a TypeScript function that takes an array of numbers and returns a new array with all duplicate elements removed.
function should iterate through the array and check for duplicates manually. You can use additional arrays and variables 
to keep track of seen elements.*/

function removedDuplicates(num: number[]) {
  let uniqueNum = new Array(num.length);
  let index = 0;

  for (let i = 0; i < num.length; i++) {
    if (uniqueNum.indexOf(num[i]) === -1) {
      uniqueNum[index] = num[i];
      index++;
    }
  }

  return uniqueNum;
}

console.log(removedDuplicates([1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 8])); // output [1,2,3,4,5,6,7,8]

/*Question 6: 
Find the second largest number in an array
Write a TypeScript function that takes an array of numbers and returns the second largest number in the array. 
The function should manually find the largest numbers by iterating through the array. You can use additional variables 
to keep track of the largest and second largest numbers.*/

function findSecondLargest(arr: number[]) {
  let max = Math.max(arr.length);
  let secondMax = -Infinity;

  for (let i = 0; i < max; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}

console.log(findSecondLargest([1, 2, 3, 4, 5])); // should return 4

console.log(findSecondLargest([10, 20, 30, 40, 50, 55, 60])); // should return 55
