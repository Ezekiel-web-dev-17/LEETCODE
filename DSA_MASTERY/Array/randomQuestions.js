/*

Code
Testcase
Test Result
Test Result
15. 3Sum
Medium
Topics
premium lock icon
Companies
Hint
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.
Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 

Constraints:

3 <= nums.length <= 3000
-105 <= nums[i] <= 105
 

Seen this question in a real interview before?
1/5
Yes
No
Accepted
5,505,396/14.4M
Acceptance Rate
38.3%
Topics
icon
Companies
Hint 1
So, we essentially need to find three numbers x, y, and z such that they add up to the given value. If we fix one of the numbers say x, we are left with the two-sum problem at hand!
Hint 2
For the two-sum problem, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y, which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?
Hint 3
The second train of thought for two-sum is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function (nums = [-1, 0, 1, 2, -1, -4]) {
    let values = { x: 0, y: 1, z: 2 },
        answersArr = []

    for (let i = 0; i < nums.length; i++) {
        for (const key of Object.keys(values)) {
            if (values[key] === i) {
                answersArr.push(nums[values[key]])
                break
            } else continue
        }
    }

    const sumAll = answersArr.reduce((prev, curr) => {
        return prev + curr;
    })

    return sumAll === 0 ? [answersArr] : []
};

console.log(threeSum())