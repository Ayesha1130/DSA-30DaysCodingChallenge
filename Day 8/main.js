"use strict";
/*Question 1: Exporting and Importing Multiple Functions


Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle
given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the
second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height
of 10. Print the results to the console.

*Hint:*
- Use export to export the functions in the first file.
- Use named imports to bring the functions into the second file.
- Ensure that the file paths are correctly specified when importing.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.calculatePerimeter = exports.calculateArea = void 0;
// rectangle.ts
function calculateArea(width, height) {
    return width * height;
}
exports.calculateArea = calculateArea;
function calculatePerimeter(width, height) {
    return 2 * (width + height);
}
exports.calculatePerimeter = calculatePerimeter;
// circle.ts
class Circle {
    name = 'Circle';
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
exports.Circle = Circle;
