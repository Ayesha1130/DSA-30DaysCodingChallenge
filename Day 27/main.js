"use strict";
/* Day 27: Task
Question 53:
Count the Number of Divisors Description: Write a TypeScript function that takes a positive integer as input and returns the number of its divisors (factors). A divisor is a number that divides the input number without leaving a remainder.

Example: typescript Input: 12 Output: 6 // (1, 2, 3, 4, 6, 12)*/
function countDivisors(n) {
    let count = 0;
    // Iterate from 1 to the square root of the number
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            // i is a divisor, and n / i is also a divisor
            count += (i === n / i) ? 1 : 2; // Count both divisors if they are different
        }
    }
    return count;
}
// Example usage
console.log(countDivisors(12)); // Output: 6 (1, 2, 3, 4, 6, 12)
console.log(countDivisors(7)); // Output: 2 (1, 7)
/* Question 54: Check if a Number is a Perfect Square Description: Write a TypeScript function that takes a
positive integer as input and returns true if the number is a perfect square, otherwise return false. A perfect
 square is a number that is the square of an integer.

Example: typescript Input: 16 Output: true // (4 * 4 = 16)

Input: 20 Output: false*/
function isPerfectSquare(n) {
    if (n < 0)
        return false; // Negative numbers cannot be perfect squares
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt);
}
// Example usage
console.log(isPerfectSquare(16)); // Output: true (4 * 4 = 16)
console.log(isPerfectSquare(20)); // Output: false
