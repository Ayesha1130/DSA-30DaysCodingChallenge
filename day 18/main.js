"use strict";
/* Day 17
Question: 35 :Sum of Odd Numbers and Multiplication Table Write a function that takes an array of
numbers as input. The function should first find the sum of all the odd numbers in the array. Then,
 it should generate and return an array containing the multiplication table of that sum from 1 to 10.*/
function oddSumMultiplicationTable(numbers) {
    // Find the sum of all odd numbers in the array
    const sumOfOddNumbers = numbers.reduce((sum, num) => {
        if (num % 2 !== 0) { // Check if the number is odd
            return sum + num;
        }
        return sum;
    }, 0);
    // Explicitly declare the type of multiplicationTable as number[]
    const multiplicationTable = [];
    for (let i = 1; i <= 10; i++) {
        multiplicationTable.push(sumOfOddNumbers * i);
    }
    return multiplicationTable;
}
// Example usage:
const result = oddSumMultiplicationTable([2, 3, 5, 8, 11]);
console.log(result); // Output: [19, 38, 57, 76, 95, 114, 133, 152, 171, 190]
// Question 2
// Filter and Square Even Numbers Write a function that takes an array of numbers as input. The function
// should filter out all the even numbers from the array, square each of those even numbers, and return a
//   new array containing these squared values.
function filterAndSquareEvenNumbers(numbers) {
    // Filter out even numbers using array filter method
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    // Square each even number using array map method
    const squaredEvenNumbers = evenNumbers.map(num => num ** 2);
    return squaredEvenNumbers;
}
// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const resultArray = filterAndSquareEvenNumbers(inputArray);
console.log(resultArray); // Output: [4, 16]
