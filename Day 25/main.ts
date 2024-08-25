/* Day 25: Task
Question 49: 
Calculate the Difference Between the Sum of Odd and Even Digits Problem: You are given a positive integer.
 You need to calculate the sum of the odd digits and the sum of the even digits, then find the difference 
 between these two sums. The difference should be positive.

Example:

Input: number = 1234
Output: 2 (Odd sum: 1 + 3 = 4, Even sum: 2 + 4 = 6, Difference: |4 - 6| = 2)*/

function calculateDifference(number: number): number {
    // Convert number to string to process each digit
    const numStr = number.toString();
    
    let sumOdd = 0;
    let sumEven = 0;
    
    // Iterate over each character in the string
    for (const char of numStr) {
        const digit = parseInt(char);
        if (digit % 2 === 0) {
            // It's an even digit
            sumEven += digit;
        } else {
            // It's an odd digit
            sumOdd += digit;
        }
    }
    
    // Calculate the absolute difference
    const difference = Math.abs(sumOdd - sumEven);
    
    return difference;
}

// Example usage
console.log(calculateDifference(1234)); // Output: 2
console.log(calculateDifference(56789)); // Output: 3


/*Question 50: 
Find the Smallest Divisor of a Number (Greater than 1) Problem: You are given a positive integer. Your task is to find the smallest divisor of this number that is greater than 1.

Example:

Input: number = 15
Output: 3 (because 3 is the smallest divisor of 15 that is greater than 1)*/


function findSmallestDivisor(number: number): number {
    if (number <= 1) {
        throw new Error('Number must be greater than 1');
    }
    
    // Check divisors from 2 upwards
    for (let i = 2; i <= number; i++) {
        if (number % i === 0) {
            return i;
        }
    }
    
    // In case the number is prime, the number itself will be returned
    return number;
}

// Example usage
console.log(findSmallestDivisor(15)); // Output: 3
console.log(findSmallestDivisor(29)); // Output: 29 (29 is a prime number)

