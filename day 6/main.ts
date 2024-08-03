/* Day 6
Question 11:
 Simple Calculator
Task: 1️⃣ 1️⃣ *
1. *Functional Programming Approach:* 
 - Write functions for each operation: add, subtract, multiply, and divide.
 - Implement a function calculation that takes two numbers and an operation (as a string) and returns the result of the operation.*/

function simpleCalculator(num1: number, num2: number, operation: string) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
      break;

    default:
  }
}

console.log(simpleCalculator(5, 3, "add")); // Output: 8

console.log(simpleCalculator(10, 2, "subtract")); // Output: 8

console.log(simpleCalculator(15, 5, "multiply")); // Output: 75

console.log(simpleCalculator(10, 2, "divide")); // Output: 5

/*Question 11 part 2
. *Object-Oriented Programming (OOP) Approach:*
 - Create a Calculator class with methods for each operation.
 - Implement a method calculated in the class that takes two numbers and an operation (as a string) and returns the result of the operation.*/

class SimpleCalculator2 {
  add(num1: number, num2: number): number {
    return num1 + num2;
  }
  subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
  divide(num1: number, num2: number): number {
    return num1 / num2;
  }
}

const calc = new SimpleCalculator2();

console.log(calc.add(5, 5)); // Output: 10

console.log(calc.subtract(10, 8)); // Output: 2

console.log(calc.multiply(5, 5)); // Output: 25

console.log(calc.divide(16, 2)); // Output: 8

/* Question 12
Question 12: Separate Elements by Type
Given an array with mixed types of elements, here's a function to separate them into different arrays based on their type (number, string, boolean):*/

let separateElements = [10, "Ash", "CodeWithMe", true, 786, false];

let numberArr: number[] = [];
let stringArr: string[] = [];
let booleanArr: boolean[] = [];
separateElements.forEach((element) => {
  if (typeof element === "string") {
    stringArr.push(element);
  } else if (typeof element === "number") {
    numberArr.push(element);
  } else if (typeof element === "boolean") {
    booleanArr.push(element);
  }
});
console.log("Numbers:", numberArr);
console.log("Strings:", stringArr);
console.log("Booleans:", booleanArr);
