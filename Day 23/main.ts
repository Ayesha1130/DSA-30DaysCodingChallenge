/* Day 23
Question 45:
 Calculate the Factorial of a Number Task: Write a function calculateFactorial that takes a number as input and
  returns its factorial.*/

  function calculateFactorial(n: number): number {
    // Handle base cases
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }

    // Calculate factorial using a loop
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
console.log(calculateFactorial(5)); // Output: 120
console.log(calculateFactorial(0)); // Output: 1
console.log(calculateFactorial(7)); // Output: 5040


/*Question 46: 
Convert a Number to Binary (Without Using Built-in Functions) Task: Write a function convertToBinary that takes a
 number as input and converts it into its binary form.*/

 function convertToBinary(num: number): string {
    // Handle edge case for zero
    if (num === 0) {
        return "0";
    }

    let binary = "";
    let number = num;

    // Handle negative numbers by converting to positive and adding '-' prefix
    const isNegative = number < 0;
    if (isNegative) {
        number = -number;
    }

    // Convert number to binary
    while (number > 0) {
        const remainder = number % 2;
        binary = remainder + binary;
        number = Math.floor(number / 2);
    }

    // Add '-' prefix for negative numbers
    return isNegative ? '-' + binary : binary;
}

// Example usage:
console.log(convertToBinary(10));  // Output: "1010"
console.log(convertToBinary(255)); // Output: "11111111"
console.log(convertToBinary(-7));  // Output: "-111"

