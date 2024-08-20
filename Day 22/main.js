"use strict";
/* Day 22
Question 43:
 Count Digits in a Number Given a number, your task is to count and return the number of digits in that number.*/
function countDigits(num) {
    // Convert the number to a string and ignore the negative sign
    const numString = Math.abs(num).toString();
    // Return the length of the string representation
    return numString.length;
}
// Example usage:
console.log(countDigits(12345)); // Output: 5
console.log(countDigits(987)); // Output: 3
console.log(countDigits(-123)); // Output: 3
/*Question 44:
Calculate the Power of a Number Given a base number b and an exponent e, your task is to calculate b raised to the
power of e without using built-in methods like Math.pow.*/
function calculatePower(b, e) {
    // Handle the case where exponent is 0
    if (e === 0)
        return 1;
    // Initialize the result to 1
    let result = 1;
    // Loop to multiply base b, e times
    for (let i = 0; i < e; i++) {
        result *= b;
    }
    return result;
}
// Example usage:
console.log(calculatePower(2, 3)); // Output: 8
console.log(calculatePower(5, 0)); // Output: 1
console.log(calculatePower(3, 4)); // Output: 81
