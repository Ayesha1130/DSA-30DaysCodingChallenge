/* Day 10: Task
Question 19: Implement a Basic Counter

Problem Statement: Create a TypeScript class Counter that manages a simple counter with the following methods:

increment(): void - Increments the counter by 1.
decrement(): void - Decrements the counter by 1.
getValue(): number - Returns the current value of the counter.*/
var Counter = /** @class */ (function () {
    function Counter(initialValue) {
        if (initialValue === void 0) { initialValue = 0; }
        this.count = initialValue;
    }
    Counter.prototype.increment = function () {
        this.count++;
    };
    Counter.prototype.decrement = function () {
        this.count--;
    };
    Counter.prototype.getValue = function () {
        return this.count;
    };
    return Counter;
}());
// Example usage:
var counter = new Counter(5);
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
var Student = /** @class */ (function () {
    function Student(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getRecord = function () {
        return { name: this.name, grade: this.grade };
    };
    return Student;
}());
// Example usage:
var student = new Student("CodeWithMe", 95);
console.log(student.getRecord()); // Output: { name: "CodeWithMe", grade: 95 }
student.setName("Ayesha");
student.setGrade(90);
