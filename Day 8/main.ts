/*Question 1: Exporting and Importing Multiple Functions


Create two separate files. In the first file, define and export two functions: calculateArea (calculates the area of a rectangle
given its width and height) and calculatePerimeter (calculates the perimeter of a rectangle given its width and height). In the
second file, import both functions and use them to calculate the area and perimeter of a rectangle with a width of 5 and a height 
of 10. Print the results to the console.

*Hint:*
- Use export to export the functions in the first file.
- Use named imports to bring the functions into the second file.
- Ensure that the file paths are correctly specified when importing.*/


// rectangle.ts

export function calculateArea(width: number, height: number): number {
  return width * height;
}

export function calculatePerimeter(width: number, height: number): number {
  return 2 * (width + height);
}


/*Question: 2
Create three separate files. In the first file, define and export an interface Shape with properties name and area, and a method calculateArea(). 
In the second file, define and export a class Circle that implements the Shape interface. The class should have a property radius and implement the 
calculateArea method. In the third file, import the Circle class, create an instance of Circle, and print the name and area of the circle.

*Hint:*
- Use export to export the interface in the first file.
- Use export to export the class in the second file.
- Use named imports to bring the interface and class into the third file.
- Ensure that the file paths are correctly specified when importing.*/

// shape.ts

export interface Shape {
  name: string;
  calculateArea(): number;
}

// circle.ts



export class Circle implements Shape {
  name = 'Circle';
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}



