/* Day 10: Task
Question 19: Implement a Basic Counter

Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:

increment(): void - Increments the counter by 1.
decrement(): void - Decrements the counter by 1.
getValue(): number - Returns the current value of the counter.*/

class Counter {
    private count: number;

    constructor(initialValue: number = 0) {
        this.count = initialValue;
    }

    increment(): void {
        this.count++;
    }

    decrement(): void {
        this.count--;
    }

    getValue(): number {
        return this.count;
    }
}

// Example usage:

const counter = new Counter(5);
console.log(counter.getValue()); // Output: 5

counter.increment();
console.log(counter.getValue()); // Output: 6

counter.decrement();

console.log(counter.getValue()); // Output: 5

/* Question 20: Implement a Simple Student Record

Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:

setName(name: string): void - Sets the student's name.
setGrade(grade: number): void - Sets the student's grade.
getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.*/

class Student {
    private name: string;
    private grade: number;

    constructor(name: string, grade: number) {
        this.name = name;
        this.grade = grade;
    }

    setName(name: string): void {
        this.name = name;
    }

    setGrade(grade: number): void {
        this.grade = grade;
    }

    getRecord(): { name: string; grade: number } {
        return { name: this.name, grade: this.grade };
    }
}

// Example usage:

const student = new Student("CodeWithMe", 95);
console.log(student.getRecord()); // Output: { name: "CodeWithMe", grade: 95 }

student.setName("Ayesha");
student.setGrade(90);

console.log(student.getRecord()); // Output: { name: "Ayesha", grade: 90 }