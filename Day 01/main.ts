/* 30 Days Of Codding Challenge
Day 1:
Question 1: 
 Sum of an Array

**Instructions:**

1. Write a function named `sumArray` that takes an array of numbers as input.
2. The function should return the sum of all numbers in the array.
3. Ensure your function works correctly by testing it with different inputs.

**Example:**

- Input: `[1, 2, 3, 4, 5]`
- Output: `15`*/


function sumArray1(...num: number[]) {
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i]
    }
    return sum;
    
}

console.log(sumArray1(1,2,3,));// output 6

console.log(sumArray1(2,3,5,6));// output 16




/* Question 2:
Reverse a String
Instructions:

Write a function named reverseString that takes a string as input.
The function should return the reversed version of the input string.
Ensure your function works correctly by testing it with different inputs.
Example:

Input: "hello"
Output: "olleh"*/

function reverseString(str:string) {
    let reversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    return reversed;
    
}

console.log(reverseString("Hello World"));// output: dlroW olleH

console.log(reverseString("Coding Challenge"));// output: ecnegnidoc gnidocC