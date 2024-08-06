/* Day 10
 Question 1: Implement a Stack using TypeScript
*Problem Statement:* 👇
Implement a stack using TypeScript. The stack should have the following methods:
1. push(item: T): void - Adds an item to the top of the stack.
2. pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
3. peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
4. isEmpty(): boolean - Returns true if the stack is empty, otherwise false.

*Constraints:*
- Use generics to make the stack implementation type-safe.
- The stack should handle various data types (number, string, etc.).*/
// Solution 1: Implementing a Stack using TypeScript*/
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
    }
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    Queue.prototype.dequeue = function () {
        if (this.items.length === 0) {
            return undefined;
        }
        else {
            return this.items.shift();
        }
    };
    Queue.prototype.peek = function () {
        if (this.items.length === 0) {
            return undefined;
        }
        else {
            return this.items[this.items.length - 1];
        }
    };
    Queue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Queue.prototype.remaining = function () {
        return "".concat(this.items);
    };
    return Queue;
}());
// Example usage:
var stack = new Queue();
stack.enqueue(1);
stack.enqueue("CodeWithMe");
stack.enqueue(10);
console.log("".concat(stack.peek())); // Output: 10
console.log("".concat(stack.dequeue())); // Output: 1
console.log("".concat(stack.peek())); // Output: CodeWithMe
console.log("".concat(stack.isEmpty())); // Output: false
console.log("".concat(stack.remaining())); // Output: [ 'CodeWithMe', 10 ]
/*📝 Question 2: Implement a Queue using TypeScript
*Problem Statement:* 👇
Implement a queue using TypeScript. The queue should have the following methods:
1. enqueue(item: T): void - Adds an item to the end of the queue.
2. dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
3. peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
4. isEmpty(): boolean - Returns true if the queue is empty, otherwise false.

*Constraints:*
- Use generics to make the queue implementation type-safe.
- The queue should handle various data types (number, string, etc.).*/
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    // Add an item to the end of the queue
    Stack.prototype.enqueue = function (item) {
        this.items.push(item);
    };
    // Remove and return the item from the front of the queue
    Stack.prototype.dequeue = function () {
        return this.items.shift();
    };
    // Return the item at the front of the queue without removing it
    Stack.prototype.peek = function () {
        return this.items[0];
    };
    // Return true if the queue is empty
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    return Stack;
}());
// Example usage:
var queue = new Queue();
queue.enqueue(20);
queue.enqueue("CodeWithMe");
queue.enqueue(30);
queue.enqueue("a");
console.log(queue.peek()); // Output: 20
console.log(queue.dequeue()); // Output: 20
console.log(queue.peek()); // Output: CodeWithMe
console.log(queue.isEmpty()); // Output: false
console.log(queue.remaining()); // Output: [ 'CodeWithMe', 30 ]
console.log(queue.dequeue()); // Output: 'a'
console.log(queue.isEmpty()); // Output: false
