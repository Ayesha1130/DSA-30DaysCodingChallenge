import { calculateArea,calculatePerimeter ,Circle } from "./main";

// Example usage:
// Question 1
console.log(`Area: ${calculateArea(5, 3)}`); // Output: 15

console.log(`Perimeter: ${calculatePerimeter(5, 3)}`); // Output: 16


//Question 2

const circle = new Circle(4);
console.log(`Area of circle: ${circle.calculateArea()}`); // Output: 50.26548245743669

console.log(`Name of the shape: ${circle.name}`); // Output: Circle