/*
Q1. Set Mismatch
Easy
Topics
premium lock icon
Companies
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

 

Example 1:

Input: nums = [1,2,2,4]
Output: [2,3]
Example 2:

Input: nums = [1,1]
Output: [1,2]
 

Constraints:

2 <= nums.length <= 10^4
1 <= nums[i] <= 10^4
*/

// PSUEDOCODE

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
var findErrorNums = function(nums) {
    // nums = nums.sort((a, b) => a - b)
    const hash = {}
   for (let i = 1; i <= nums.length; i++){
    hash[i] = nums[i-1]
    // if (nums[i-1] === i && nums[0] === 1){
    //     // console.log("Equal");
    // } else{
    //     return [nums[i-1], i]
    // }

   }
    return hash
};
*/

var findErrorNums = function (nums) {
    nums = nums.sort((a, b) => a - b)
    const hash = {}
    const suspects = []
    for (let i = 1; i <= nums.length; i++) {
        hash[i] = nums[i - 1]
    }


    for (const num in hash) {
        const element = hash[num];
        if (Number(num) !== element) {
            suspects.push(element)
        }
    }

    const duplicated = {}
    let culpriter;
    suspects.forEach((suspect) => {
        nums.filter((num) => { if (num === suspect) { duplicated[suspect] ? duplicated[suspect] += 1 : duplicated[suspect] = 1 } })
    })

    for (const culprit in duplicated) {
        duplicated[culprit] > 1 ? culpriter = parseInt(culprit) : "WHEY HA";
    }

    return [culpriter, Number(Object.keys(hash).find((a) => !nums.includes(Number(a))))];
};

console.log(findErrorNums([1, 2, 2, 4]))
console.log(findErrorNums([1, 1]))
console.log(findErrorNums([2, 2]))
console.log(findErrorNums([3, 2, 3, 4, 6, 5]))
console.log(findErrorNums([1, 5, 3, 2, 2, 7, 6, 4, 8, 9]))
console.log(findErrorNums([1, 3, 3, 4, 2]))
console.log(findErrorNums([9, 7, 6, 5, 4, 3, 2, 1, 1, 10]))
console.log(findErrorNums([3, 2, 2]))