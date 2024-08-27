"use strict";
/* Day 29*

**Question 1: Calculate the Product of Non-Zero Digits**

Write a TypeScript function that takes a number as input and returns the product of all non-zero digits in
 number.*/
function productOfNonZeroDigits(num) {
    // Convert number to string and initialize product to 1
    const numStr = num.toString();
    let product = 1;
    let hasNonZeroDigit = false;
    // Loop through each character in the string
    for (const char of numStr) {
        const digit = parseInt(char, 10);
        if (digit !== 0) {
            product *= digit;
            hasNonZeroDigit = true;
        }
    }
    // If there were no non-zero digits, return 0
    return hasNonZeroDigit ? product : 0;
}
// Example usage
console.log(productOfNonZeroDigits(4056)); // Output: 120
console.log(productOfNonZeroDigits(1002)); // Output: 2
/* **Question 2:
Find the Difference Between the Largest and Smallest Digit**

Write a TypeScript function that takes a number as input and returns the difference between its largest and
 smallest digits.*/
function differenceBetweenLargestAndSmallestDigit(num) {
    // Convert number to string
    const numStr = num.toString();
    let maxDigit = -Infinity;
    let minDigit = Infinity;
    // Loop through each character in the string
    for (const char of numStr) {
        const digit = parseInt(char, 10);
        if (!isNaN(digit)) {
            if (digit > maxDigit)
                maxDigit = digit;
            if (digit < minDigit)
                minDigit = digit;
        }
    }
    // Return the difference between the largest and smallest digit
    return maxDigit - minDigit;
}
// Example usage
console.log(differenceBetweenLargestAndSmallestDigit(7593)); // Output: 6
console.log(differenceBetweenLargestAndSmallestDigit(12345)); // Output: 4
