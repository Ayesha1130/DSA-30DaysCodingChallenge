"use strict";
/*  Day 26: Task
Question 51: Reverse a Number

Write a function reverseNumber(n: number): number that takes a positive integer n and returns the number with its digits reversed.

Example: typescript reverseNumber(1234); // Output: 4321 reverseNumber(567); // Output: 765 */
function reverseNumber(n) {
    // Convert the number to a string
    const numStr = n.toString();
    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');
    // Convert the reversed string back to a number
    return parseInt(reversedStr, 10);
}
// Example usage
console.log(reverseNumber(1234)); // Output: 4321
console.log(reverseNumber(567)); // Output: 765
/*  Question 52: Find the Average of Numbers in a String

Write a function averageOfNumbersInString(str: string): number that extracts all numbers from a given string,
 calculates their average, and returns the result.*/
function averageOfNumbersInString(str) {
    // Use a regular expression to find all numbers in the string
    const numbers = str.match(/\d+/g);
    // If no numbers are found, return NaN
    if (!numbers)
        return NaN;
    // Convert the extracted strings to numbers
    const numArray = numbers.map(Number);
    // Calculate the average
    const sum = numArray.reduce((acc, num) => acc + num, 0);
    const average = sum / numArray.length;
    return average;
}
// Example usage
console.log(averageOfNumbersInString('The numbers are 12, 15, and 20.')); // Output: 15.666...
console.log(averageOfNumbersInString('No numbers here!')); // Output: NaN
