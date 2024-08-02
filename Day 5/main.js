/*Day 5*

**Question 1:
 Array Comparison and Manipulation (Updated)**

Create a function in TypeScript that takes two arrays of numbers as input. The function should perform the following operations based on the conditions given:

1. **If the lengths of both arrays are the same and all elements are the same:**
 - Merge both arrays into one array.
 - Multiply all elements of the merged array to produce a single number.
 - Return the product.

2. **If the lengths of both arrays are different:**
 - Merge both arrays into one array.
 - Return the middle element of the merged array.

3. **If the lengths of both arrays are the same but elements are different:**
 - Make the elements of both arrays the same by adding corresponding elements.
 - Merge the arrays.
 - Return the sum of the elements of the resulting merged array.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function manipulateArrays(arr1, arr2) {
    // Check if lengths are the same
    if (arr1.length === arr2.length) {
        // Check if all elements are the same
        if (arr1.every(function (element, index) { return element === arr2[index]; })) {
            // Merge arrays and multiply elements
            return arr1.reduce(function (product, element) { return product * element; }, 1);
        }
        else {
            // Merge arrays and add corresponding elements
            var mergedArray = arr1.map(function (element, index) { return element + arr2[index]; });
            // Return the sum of elements
            return mergedArray.reduce(function (sum, element) { return sum + element; }, 0);
        }
    }
    else {
        // Merge arrays
        var mergedArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
        // Return the middle element
        return mergedArray[Math.floor(mergedArray.length / 2)];
    }
}
// Example Test Cases
console.log(manipulateArrays([1, 2, 3], [1, 2, 3])); // Output: 6
console.log(manipulateArrays([1, 2], [3, 4, 5])); // Output: 3
console.log(manipulateArrays([1, 2], [3, 4])); // Output: 10
/*Question 2: Extract First Letters from String Array**

Create a function in TypeScript that takes an array of strings (names) as input. The function should return a new array containing
 the first letter of each name.

**Hints:**
- Iterate through each name in the array.
- Extract the first letter of each name without using built-in methods.

**Example:**
typescript
function extractFirstLetters(names: string[]): string[] {
 // Your implementation here
}

// Example Test Case
// extractFirstLetters(["Alice", "Bob", "Charlie", "David"*])*/
function extractFristLetters(names) {
    var result = [];
    for (var i = 0; i < names.length; i++) {
        var name_1 = names[i];
        if (name_1.length > 0) {
            result.push(name_1[0]);
        }
    }
    return result;
}
// Example Test Case
console.log(extractFristLetters(["Ayesha", "CodeWithMe", "Jiya", "Erik"]));
