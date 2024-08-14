/* Day 15 
Question 1
Problem: Write a TypeScript function areAnagrams(str1: string, str2: string): boolean that checks if two strings
are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or 
phrase using all the original letters exactly once.*/

function areAnagrams(str1: string, str2: string): boolean {
    // Normalize both strings by converting to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // Check if the lengths of the strings are different
    if (str1.length !== str2.length) {
        return false;
    }
    
    // Create arrays to count character frequencies for both strings
    const charCount1: number[] = new Array(26).fill(0); // For str1
    const charCount2: number[] = new Array(26).fill(0); // For str2
    
    // Helper function to convert characters to index
    const getIndex = (char: string): number => char.charCodeAt(0) - 'a'.charCodeAt(0);
    
    // Count characters in str1
    for (const char of str1) {
        charCount1[getIndex(char)]++;
    }
    
    // Count characters in str2
    for (const char of str2) {
        charCount2[getIndex(char)]++;
    }
    
    // Compare character counts
    for (let i = 0; i < 26; i++) {
        if (charCount1[i] !== charCount2[i]) {
            return false;
        }
    }
    
    return true;
}

// Example usage:
console.log(areAnagrams('Listen', 'Silent')); // true
console.log(areAnagrams('Hello', 'World'));   // false


/*Question 2: 
Reverse Words in a Sentence

Problem: Write a TypeScript function reverseWords(sentence: string): string that reverses the words in a given 
sentence. For example, if the input is "Hello world", the output should be "world Hello".*/

function reverseWords(sentence: string): string {
    // Split the sentence into words, handling multiple spaces
    const words: string[] = sentence.trim().split(/\s+/);
    
    // Reverse the array of words
    const reversedWords: string[] = words.reverse();
    
    // Join the reversed words into a single string with spaces
    const reversedSentence: string = reversedWords.join(' ');
    
    return reversedSentence;
}

// Example usage:
console.log(reverseWords('  Hello   world  ')); // Output: "world Hello"
console.log(reverseWords('TypeScript is awesome')); // Output: "awesome is TypeScript"


