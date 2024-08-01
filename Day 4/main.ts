/*Day:4 Task

Question 7: 
Find Duplicate Numbers in an Array

*Description:*

Write a TypeScript function that takes an array of numbers as input and returns a new array containing only 
the duplicate numbers from the original array. If there are no duplicates, return an empty array.*/

function findDuplicates(numbers: number[]) {
  let duplicates: number[] = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        if (!duplicates.includes(numbers[i])) {
          duplicates.push(numbers[i]);
        }
        //break;
      }
    }
  }
  return duplicates;
}

const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

const duplicates = findDuplicates(numbers);

console.log(duplicates); //output [2, 5]

console.log(findDuplicates([1, 2, 3, 4])); // output empty[]

console.log(findDuplicates([1, 1, 2, 3, 3, 4])); // output [1,3]




/*Question 8:
 Filter Students with Marks Greater than 80

*Description:*

Create an array of objects where each object represents a student with properties name, age, and marks. Write a function that filters and
 prints the data of students who have marks greater than 80.*/


// Answer:

interface Student{
    name: string;
    age: number;
    marks: number;
}

function printTopStudents(students: Student[]): void {
 for (const student of students) {
  if (student.marks > 80) {
   console.log(`${student.name} - Age: ${student.age}, Marks: ${student.marks}`);
  }
 }
}

const students: Student[] = [
 { name: "Jiya", age: 20, marks: 75 },
 { name: "Ayesha", age: 22, marks: 85 },
 { name: "CodeWithMe", age: 21, marks: 90 }
]

printTopStudents(students); // Output: Ayesha - Age: 22, Marks: 85, CodeWithMe- Age: 21, Marks: 90


