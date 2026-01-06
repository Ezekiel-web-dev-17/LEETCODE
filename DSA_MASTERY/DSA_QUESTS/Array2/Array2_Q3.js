/*
Q3. Find All Numbers Disappeared in an Array
Easy
Topics
premium lock icon
Companies
Hint
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.



Example 1:

Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
Example 2:

Input: nums = [1,1]
Output: [2]


Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i] <= n


Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var findDisappearedNumbers = function (nums) {
//     const originalLength = nums.length
//     let life = ""
//     for (let i = 1; i < originalLength + 1; i++) {
//         if (!nums.includes(i)) {
//             life = life.concat(i + ", ");
//         }
//     }

//     return life.split(", ").filter(item => item !== "").map(Number);
// };

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var findDisappearedNumbers = function (nums) {
//     const originalLength = nums.length
//     let life = ""

//     for (const key in nums) {
//         console.log(key)
//         if (!nums.includes(parseInt(key) + 1)) {
//             life = life.concat(i + ", ");
//         }
//     }

//     return life.split(", ").filter(item => item !== "").map(Number);
// };

/**
 * The answer above is not optimal as it uses extra space and has a time complexity of O(n^2) due to the use of includes inside a loop.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const originalLength = nums.length
    let life = ""
    for (let i = 1; i < originalLength + 1; i++) {
        if (!nums.includes(i)) {
            life = life.concat(i + ", ");
        }
    }

    return life.split(", ").filter(item => item !== "").map(Number);
};

// The approach above involves modifying the input array to mark the presence of numbers by negating the value at the index corresponding to each number found. Then, we can identify the missing numbers by checking which indices have positive values.

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findDisappearedNumbers([1, 1]))
