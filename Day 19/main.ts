/* Day 19
Question 37: Find the Maximum Difference Problem Statement: Given an array of integers,
 find the maximum difference between any two elements in the array. The difference should
  be calculated as difference = arr[j] - arr[i] where j > i.

Example: typescript Input: [2, 7, 9, 5, 1, 3, 5] Output: 7 Explanation: The maximum
 difference is between 9 and 2, where 9 - 2 = 7.*/

 function findMaximumDifference(arr: number[]): number {
    if (arr.length < 2) return 0; // Not enough elements to form a difference

    let minValue = arr[0];
    let maxDifference = Number.NEGATIVE_INFINITY;

    for (let i = 1; i < arr.length; i++) {
        const currentValue = arr[i];
        const currentDifference = currentValue - minValue;

        if (currentDifference > maxDifference) {
            maxDifference = currentDifference;
        }

        if (currentValue < minValue) {
            minValue = currentValue;
        }
    }

    return maxDifference;
}

// Example usage:
const result = findMaximumDifference([2, 7, 9, 5, 1, 3, 5]);
console.log(result); // Output: 7


/* Question 38: String Character Frequency Problem Statement: Write a function that 
takes a string as input and returns an object where the keys are characters and the 
values are the frequency of those characters in the string.

Example: typescript Input: "hello" Output: { h: 1, e: 1, l: 2, o: 1 }*/

function characterFrequency(str: string): Record<string, number> {
    const frequencyMap: Record<string, number> = {};

    for (const char of str) {
        if (frequencyMap[char]) {
            frequencyMap[char]++;
        } else {
            frequencyMap[char] = 1;
        }
    }

    return frequencyMap;
}

// Example usage:
const results = characterFrequency("hello");
console.log(results); // Output: { h: 1, e: 1, l: 2, o: 1 }
