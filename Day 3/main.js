// function removedDuplicates(num:number[]){
//     let uniqueNum = new Array(num.length);
//     let index = 0;
//     for(let i =0; i < num.length;i++){
//         if (uniqueNum.indexOf(num[i]) === -1) {
//             uniqueNum[index] = num[i];
//             index++;
//         }
//     }
//     return uniqueNum;
// }
// console.log(removedDuplicates([1,2,2,3,3,4,4,5,5,6,7,8]));
function findSecondLargest(arr) {
    var max = Math.max(arr.length);
    var secondMax = -Infinity;
    for (var i = 0; i < max; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}
console.log(findSecondLargest([1, 2, 3, 4, 5])); // should return 4
console.log(findSecondLargest([10, 20, 30, 40, 50, 55, 60])); // should return 55
