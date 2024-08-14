"use strict";
/* Day 17
Question 1:
Calculate the Product of Odd Numbers Write a
function productOfOdds(numbers: number[]): number that takes an array of numbers as input. The function should
calculate the product of all odd numbers in the array and return the result. If there are no odd numbers, return 1.*/
function productOfOdds(numbers) {
    // Initialize the product to 1
    let product = 1;
    // Flag to track if we found any odd numbers
    let foundOdd = false;
    // Traverse through the array
    for (const num of numbers) {
        // Check if the number is odd
        if (num % 2 !== 0) {
            product *= num; // Multiply the product by the odd number
            foundOdd = true; // Set the flag to true
        }
    }
    // If no odd numbers were found, return 1
    return foundOdd ? product : 1;
}
// Example usage:
console.log(productOfOdds([2, 3, 5, 6])); // Output: 15 (3 * 5)
console.log(productOfOdds([2, 4, 6, 8])); // Output: 1 (no odd numbers)
console.log(productOfOdds([1, 3, 5, 7])); // Output: 105 (1 * 3 * 5 * 7)
console.log(productOfOdds([10, 21, 22, 33])); // Output: 693 (21 * 33)
/* Question 2
Question 34: Find the Longest Word in a Sentence Write a
function findLongestWord(sentence: string): string that takes a string sentence as input. The function should
 return the longest word in the sentence. If there are multiple words with the same length, return the first one.*/
function findLongestWord(sentence) {
    // Split the sentence into words based on spaces
    const words = sentence.split(/\s+/);
    // Initialize variables to track the longest word and its length
    let longestWord = '';
    let maxLength = 0;
    // Traverse through the words array
    for (const word of words) {
        // Check if the current word is longer than the previously found longest word
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }
    // Return the longest word found
    return longestWord;
}
// Example usage:
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("I love coding in TypeScript")); // Output: "TypeScript"
console.log(findLongestWord("Short long longer longest")); // Output: "longest"
console.log(findLongestWord("One word")); // Output: "word"
console.log(findLongestWord("")); // Output: ""
