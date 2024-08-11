"use strict";
// Day 13
// Question 1: Count Vowels in a String
// *Problem Statement:*
// Write a function in TypeScript that takes a string as input and returns the number of vowels (a, e, i, o, u)
// in the string.
Object.defineProperty(exports, "__esModule", { value: true });
function countVowels(str) {
    const vowels = new Set('aeiouAEIOU');
    let count = 0;
    for (const char of str) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}
// Examples
console.log(countVowels("hello world")); // Output: 3
console.log(countVowels("TypeScript")); // Output: 2
// Question 2: Find the Missing Number in an Array
// *Problem Statement:*
// Write a function in TypeScript that takes an array of numbers containing n distinct numbers taken from 
// range 1 to n+1, where one number is missing. The function should find and return the missing number.
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const sum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (const num of arr) {
        actualSum += num;
    }
    return sum - actualSum;
}
// Examples
console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
console.log(findMissingNumber([1, 2, 3, 4, 6])); // Output: 5
