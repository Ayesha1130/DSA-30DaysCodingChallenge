"use strict";
/* Day 20
Question 39: Check for Prime Number Problem:
Write a TypeScript function that takes a positive integer as input and checks whether it
is a prime number. A prime number is a number greater than 1 that has no divisors other
than 1 and itself. If the number is prime, return true; otherwise, return false.*/
function isPrime(num) {
    if (num <= 1)
        return false; // Numbers less than or equal to 1 are not prime
    if (num <= 3)
        return true; // 2 and 3 are prime numbers
    // Eliminate even numbers and multiples of 3
    if (num % 2 === 0 || num % 3 === 0)
        return false;
    // Check for factors from 5 up to the square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0)
            return false;
    }
    return true;
}
// Example usage:
console.log(isPrime(29)); // Output: true
console.log(isPrime(18)); // Output: false
/*Question 40: Reverse a Number Problem:
Write a TypeScript function that takes a number as input and returns the number with its
digits reversed. For example, if the input is 1234, the output should be 4321.*/
function reverseNumber(num) {
    // Convert number to string and reverse the string
    const reversedString = num.toString().split('').reverse().join('');
    // Convert the reversed string back to a number
    return parseInt(reversedString, 10);
}
// Example usage:
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(56789)); // Output: 98765
