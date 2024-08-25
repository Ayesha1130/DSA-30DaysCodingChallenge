"use strict";
/* Day 24: Task
Question 47:
Generate Fibonacci Sequence Write a function generateFibonacci(n: number): number[] that generates and returns the
first n numbers of the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is
 the sum of the previous two.*/
function generateFibonacci(n) {
    // Handle edge cases
    if (n <= 0)
        return [];
    if (n === 1)
        return [0];
    // Initialize the sequence
    const sequence = [0, 1];
    // Generate the sequence
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
// Example usage
console.log(generateFibonacci(5)); // Output: [0, 1, 1, 2, 3]
console.log(generateFibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
/* Question 48:
Replace Vowels with Asterisks Write a function replaceVowels(str: string): string that takes a string str and
 returns a new string where all vowels (a, e, i, o, u) are replaced with asterisks (*). The function should be
 case-insensitive.*/
function replaceVowels(str) {
    // Regular expression to match vowels (case-insensitive)
    return str.replace(/[aeiouAEIOU]/g, '*');
}
// Example usage
console.log(replaceVowels('Hello World')); // Output: 'H*ll* W*rld'
console.log(replaceVowels('TypeScript')); // Output: 'TypScr*pt'
