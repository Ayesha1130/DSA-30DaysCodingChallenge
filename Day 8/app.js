"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
// Example usage:
// Question 1
console.log(`Area: ${(0, main_1.calculateArea)(5, 3)}`); // Output: 15
console.log(`Perimeter: ${(0, main_1.calculatePerimeter)(5, 3)}`); // Output: 16
//Question 2
const circle = new main_1.Circle(4);
console.log(`Area of circle: ${circle.calculateArea()}`); // Output: 50.26548245743669
console.log(`Name of the shape: ${circle.name}`); // Output: Circle
