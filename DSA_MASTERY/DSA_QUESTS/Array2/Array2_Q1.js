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
var findErrorNums = function(nums) {
    nums = nums.sort((a, b) => a - b)
   for (let i = 1; i <= nums.length; i++){
    // console.log( [nums[i-1], i])
    if (nums[i-1] === i && nums[0] === 1){
        console.log("Equal");
    } else{
        return [nums[i-1], i]
    }
   }
};

// console.log(findErrorNums([1, 2, 2, 4]))
// console.log(findErrorNums([1, 1]))
// console.log(findErrorNums([2, 2]))
console.log(findErrorNums([3,2,2]))