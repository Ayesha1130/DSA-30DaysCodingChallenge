/* *Day-11*
*Question 1:
Merge Two Sorted Arrays*
Write a function mergeSortedArrays that takes two sorted arrays of numbers and returns a single sorted array by
merging them. You cannot use any built-in sort function.*/
function mergeSortedArrays(arr1, arr2) {
    var mergedArray = [];
    var i = 0;
    var j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    // Add the remaining elements from arr1 or arr2 if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }
    return mergedArray;
}
// Test the function
var arr1 = [1, 3, 5, 7];
var arr2 = [2, 4, 6, 8];
console.log(mergeSortedArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
/* *Question 2:
Find the First Non-Repeated Character*
Write a function firstNonRepeatedCharacter that takes a string and returns the first character that does not
repeat. If all characters repeat, return an empty string.*/
function firstNonRepeatedCharacter(str) {
    var charCount = {};
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (charCount[char]) {
            charCount[char]++;
        }
        else {
            charCount[char] = 1;
        }
    }
    for (var _a = 0, str_2 = str; _a < str_2.length; _a++) {
        var char = str_2[_a];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return "";
}
// Test the function
console.log(firstNonRepeatedCharacter("google")); // Output: 'l'
console.log(firstNonRepeatedCharacter("leetcode")); // Output: 'e'
console.log(firstNonRepeatedCharacter("programming")); // Output: 'r'
console.log(firstNonRepeatedCharacter("aab")); // Output: ''
