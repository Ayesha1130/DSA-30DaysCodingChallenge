/* Day 16
Question 1
Sum of Even Numbers from Multiple Arrays

Problem Statement: You are given three arrays of integers.
Write a function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] 
that calculates the sum of all even numbers in each array. The function should return a new array 
containing the sum of even numbers from each of the three arrays.*/

function sumEvenNumbers(arr1: number[], arr2: number[], arr3: number[]): number[] {
    // Helper function to sum even numbers in an array
    function sumEvens(arr: number[]): number {
        return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
    }
    
    // Calculate sums of even numbers for each array
    const sumArr1 = sumEvens(arr1);
    const sumArr2 = sumEvens(arr2);
    const sumArr3 = sumEvens(arr3);
    
    // Return the array with sums of even numbers
    return [sumArr1, sumArr2, sumArr3];
}

// Example usage:
console.log(sumEvenNumbers([1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12])); // Output: [6, 14, 22]
console.log(sumEvenNumbers([2, 4, 6], [1, 3, 5], [10, 20, 30])); // Output: [12, 0, 60]
console.log(sumEvenNumbers([11, 13, 15], [2, 4], [8, 10, 12])); // Output: [0, 6, 30]

/* Question 2
Concatenate Strings from Arrays

Problem Statement: You are given three arrays of strings.
 Write a function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] 
 that extracts the first letter of each string in the arrays, concatenates these letters for each array, 
 and returns a new array containing the concatenated strings.*/

 function concatenateFirstLetters(arr1: string[], arr2: string[], arr3: string[]): string[] {
    // Helper function to concatenate first letters of strings in an array
    function concatenateFirst(arr: string[]): string {
        return arr.map(str => str.charAt(0)).join('');
    }
    
    // Process each array and store the results
    const result1 = concatenateFirst(arr1);
    const result2 = concatenateFirst(arr2);
    const result3 = concatenateFirst(arr3);
    
    // Return the array of concatenated strings
    return [result1, result2, result3];
}

// Example usage:
console.log(concatenateFirstLetters(["apple", "banana", "cherry"], ["dog", "elephant", "frog"], ["grape", "honeydew", "kiwi"])); // Output: ["abc", "def", "ghk"]
console.log(concatenateFirstLetters(["sun", "moon"], ["star", "planet"], ["galaxy", "comet"])); // Output: ["sm", "sp", "gc"]
console.log(concatenateFirstLetters(["table", "chair", "lamp"], ["carpet", "curtain", "sofa"], ["desk", "shelf", "cabinet"])); // Output: ["tcl", "ccs", "dsc"]




