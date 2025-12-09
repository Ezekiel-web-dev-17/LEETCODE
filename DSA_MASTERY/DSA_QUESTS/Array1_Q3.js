/*
Q3. Max Consecutive Ones
Easy
Topics
premium lock icon
Companies
Hint
Given a binary array nums, return the maximum number of consecutive 1's in the array.

 

Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
*/

// PSEUDOCODE 1
/*
1. Create a maxVal variable and an hashmap for 0 and 1.
2. Create a loop where if the value is 1 and the next consecutive value is 1 increment 1 count in hash.
3. If consecutive num ain't 1 restart 1 count by setting value of 1 in hash to 0 but record maximum between the prevHash value and the maxVal of 1 as maxVal.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const hashMap = {one: 0}
    let maxVal = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            hashMap.one+=1
        } else {
            hashMap.one = 0
        }
        maxVal = Math.max(maxVal, hashMap.one)
    }

    return maxVal;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))