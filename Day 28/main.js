"use strict";
/*  Day 28: Task
Question 55:
Armstrong Number Checker (Without Using split) Problem: Check if a given number is an Armstrong number.
 An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of
 the number of digits.*/
function isArmstrongNumber(n) {
    // Find the number of digits
    let num = n;
    let digits = 0;
    while (num > 0) {
        digits++;
        num = Math.floor(num / 10);
    }
    // Check if the number is an Armstrong number
    num = n;
    let sum = 0;
    while (num > 0) {
        const digit = num % 10;
        sum += Math.pow(digit, digits);
        num = Math.floor(num / 10);
    }
    return sum === n;
}
// Example usage
console.log(isArmstrongNumber(153)); // Output: true
console.log(isArmstrongNumber(123)); // Output: false
/* Question 56:
Find the LCM (Least Common Multiple) Problem: Find the Least Common Multiple (LCM) of two numbers.
LCM is the smallest number that is a multiple of both given numbers.*/
function gcd(a, b) {
    // Euclidean algorithm to find GCD
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}
// Example usage
console.log(lcm(12, 15)); // Output: 60
console.log(lcm(7, 9)); // Output: 63
