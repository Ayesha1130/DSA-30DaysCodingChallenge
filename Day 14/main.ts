// Day 14
// Question_no1
//  *Find the Maximum Sum from Two Arrays*
// *Problem Statement:*
// Create a function findMaxSum that accepts two arrays of numbers. The function should determine the maximum
// number from each array and return the sum of these two maximum numbers.

// Step 1: Create the Helper Function findMax
// This function will iterate through the array to find the maximum value

function findMax(array: number[]): number {
  if (array.length === 0) {
    throw new Error("Array must not be empty.");
  }

  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// Step 2: Implement the findMaxSum Function
// This function will use the findMax function to find the maximum values in both arrays and then sum them.

function findMaxSum(arr1: number[], arr2: number[]): number {
  // Find maximum values in both arrays
  const max1 = findMax(arr1);
  const max2 = findMax(arr2);

  // Return the sum of these maximum values
  return max1 + max2;
}
// Step 3: Testing the Function
// Let's test findMaxSum with different scenarios to ensure it works correctly.

// Test cases
console.log(findMaxSum([1, 3, 5, 7], [2, 4, 6, 8])); // Output: 15 (7 + 8)
console.log(findMaxSum([10, 20, 30], [5, 15, 25])); // Output: 55 (30 + 25)
console.log(findMaxSum([-1, -5, -3], [0, -2, -6])); // Output: -1 (-1 + 0)
console.log(findMaxSum([1], [2])); // Output: 3 (1 + 2)


// Question_no2
// *Check if a String is a Palindrome*
// *Problem Statement:* 
// Write a function isPalindrome that takes a string as input and checks if it reads the same backward as forward.
//  The function should return true if the string is a palindrome and false otherwise.
// Step 1: Normalize the String
// We need to:

// Convert the string to lowercase to handle case sensitivity.
// Remove non-alphanumeric characters to focus on the actual content.

// Step 2: Use the Two-Pointer Technique
// Initialize two pointers: one at the start of the string and one at the end.
// Compare characters at these pointers and move inward.
// Return false if characters do not match; otherwise, continue until the pointers meet.

// Step 3: Complete the Loop
// If the loop completes without mismatches, return true.

// Step 4: Testing
// Verify the function with various cases to ensure correctness.
// Here's the TypeScript implementation for the isPalindrome function:

function isPalindrome(str: string): boolean {
    // Step 1: Normalize the string
    // Convert to lowercase and remove non-alphanumeric characters
    const normalizedStr = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');

    // Step 2: Use two-pointer technique
    let left = 0;
    let right = normalizedStr.length - 1;

    while (left < right) {
        if (normalizedStr[left] !== normalizedStr[right]) {
            return false;
        }
        left++;
        right--;
    }

    // Step 3: If loop completes without finding a mismatch, it's a palindrome
    return true;
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("No 'x' in Nixon")); // Output: true
console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true


