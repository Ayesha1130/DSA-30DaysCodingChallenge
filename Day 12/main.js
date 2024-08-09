/* Day 12*

### Question 1: Remove Duplicates from Sorted Array
**Problem:**
You are given a sorted array that may contain duplicate elements. Your task is to remove the duplicates in-place
 (without creating a new array) and return the length of the resulting array. The array should be compressed so
 that the unique elements are placed first.*/
function removeDuplicates(nums) {
    if (nums.length === 0)
        return 0;
    var uniqueIndex = 0; // Pointer for the position of the next unique element
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    // Return the length of the array with unique elements
    return uniqueIndex + 1;
}
// Example Usage:
var mixDup = [1, 1, 2, 2, 3, 4, 4, 5];
var lenArr = removeDuplicates(mixDup);
console.log(lenArr); // Expected output: 5
console.log(mixDup.slice(0, lenArr)); // Expected output: [1, 2, 3, 4, 5]
