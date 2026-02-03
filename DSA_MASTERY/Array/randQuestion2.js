/*
139. Word Break
Medium
Topics
premium lock icon
Companies
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

 

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
 

Constraints:

1 <= s.length <= 300
1 <= wordDict.length <= 1000
1 <= wordDict[i].length <= 20
s and wordDict[i] consist of only lowercase English letters.
All the strings of wordDict are unique.
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s = "leetcode", wordDict = ["leet", "code"]) {
    let i = 0;
    while (i < wordDict.length) {
        if (s.includes(wordDict[i])) {
            s = s.replaceAll(wordDict[i], "")
            return s === wordDict.filter((word) => word !== wordDict[i]).toString().replaceAll(",", "") || s.length === 0;
        } else i++;
    }

    return false;

};

console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("a", ["b"]));
console.log(wordBreak("bb", ["a", "b", "bbb", "bbbb"]))