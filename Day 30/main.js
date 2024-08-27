"use strict";
/* *Day 30*

**Question 1:
Convert Number to Words**

**Problem:**
Write a TypeScript function that takes a number between 0 and 99 and returns the number in words.
For example, if the input is 45, the output should be "Forty-Five".*/
function numberToWords(num) {
    if (num < 0 || num > 99) {
        throw new Error("Number out of range. Only numbers between 0 and 99 are allowed.");
    }
    const ones = [
        "Zero", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine"
    ];
    const teens = [
        "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];
    const tens = [
        "", "", "Twenty", "Thirty", "Forty",
        "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    if (num < 10) {
        return ones[num];
    }
    else if (num < 20) {
        return teens[num - 10];
    }
    else {
        const tenPart = Math.floor(num / 10);
        const onePart = num % 10;
        return onePart === 0 ? tens[tenPart] : `${tens[tenPart]}-${ones[onePart]}`;
    }
}
// Example usage
console.log(numberToWords(45)); // Output: "Forty-Five"
console.log(numberToWords(7)); // Output: "Seven"
console.log(numberToWords(13)); // Output: "Thirteen"
/* **Question 2:
Calculate the Sum of the First n Natural Numbers**

**Problem:**
Write a TypeScript function that takes a positive integer n and returns the sum of the first n natural numbers.
 For example, if n = 5, the output should be 15 (because 1 + 2 + 3 + 4 + 5 = 15).*/
function sumOfNaturalNumbers(n) {
    if (n < 1) {
        throw new Error("Input must be a positive integer.");
    }
    // Using the formula
    return (n * (n + 1)) / 2;
    // Alternatively, using a loop
    // let sum = 0;
    // for (let i = 1; i <= n; i++) {
    //     sum += i;
    // }
    // return sum;
}
// Example usage
console.log(sumOfNaturalNumbers(5)); // Output: 15
console.log(sumOfNaturalNumbers(10)); // Output: 55
