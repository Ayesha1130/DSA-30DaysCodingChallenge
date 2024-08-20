/* Day 21
Question 41:
Sum of DigitsZ Problem:
Write a function sumOfDigits that takes a number as input and returns the sum of its digits.*/

function sumOfDigits(number: number): number {
    // Convert the number to a string
    const numberString = number.toString();

    // Split the string into individual characters, map each to a number, and sum them up
    const sum = numberString
        .split('')                // Split the string into an array of characters
        .map(digit => parseInt(digit, 10)) // Convert each character to a number
        .reduce((acc, curr) => acc + curr, 0); // Sum all the numbers

    return sum;
}

// Example usage:
console.log(sumOfDigits(123));  // Output: 6 (1 + 2 + 3)
console.log(sumOfDigits(4567)); // Output: 22 (4 + 5 + 6 + 7)


/* Question 42: 
Count Consonants in a String Problem:
Write a function countConsonants that takes a string as input and returns the number of consonants in the string. 
Consonants are all alphabetical characters except a, e, i, o, u (both lowercase and uppercase).*/


function countConsonants(input: string): number {
    // Define a set of vowels
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    // Initialize consonant count
    let consonantCount = 0;

    // Loop through each character in the input string
    for (const char of input) {
        // Check if the character is an alphabetic character and not a vowel
        if (char.match(/[a-zA-Z]/) && !vowels.has(char)) {
            consonantCount++;
        }
    }

    return consonantCount;
}

// Example usage:
console.log(countConsonants("hello")); // Output: 3
console.log(countConsonants("TypeScript")); // Output: 7






