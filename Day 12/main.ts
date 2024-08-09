/* Day 12*

### Question 1: Remove Duplicates from Sorted Array
**Problem:**
You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place
 (without creating a new array) and return the length of the resulting array. The array should be compressed so 
 that the unique elements are placed first.*/

function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;

  let uniqueIndex = 0; // Pointer for the position of the next unique element

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  // Return the length of the array with unique elements
  return uniqueIndex + 1;
}

// Example Usage:
let mixDup: number[] = [1, 1, 2, 2, 3, 4, 4, 5];
let lenArr = removeDuplicates(mixDup);
console.log(lenArr); // Expected output: 5
console.log(mixDup.slice(0, lenArr)); // Expected output: [1, 2, 3, 4, 5]

/* ### Question 2:
 Move Zeroes
**Problem:**
You are given an array that contains some zero elements. Your task is to move all the zeroes to the end of the
 array, while keeping the relative order of the non-zero elements unchanged.

**Example:**
typescript
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]


**Note:**
* You must modify the array in-place.
* The relative order of the non-zero elements should remain the same.*/

function moveZeroes(nums: number[]): void {
  let zeroIndex = 0; // Pointer for the position of the next zero element

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap the current non-zero element with the zero element at zeroIndex
      [nums[i], nums[zeroIndex]] = [nums[zeroIndex], nums[i]];
      zeroIndex++;
    }
  }
}

// Example Usage:

let arr: number[] = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr); // Expected output: [1, 3, 12, 0, 0]
