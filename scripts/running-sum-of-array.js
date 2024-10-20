// Example
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let runningSum = [];
     nums.reduce((prev, next) => {
         runningSum.push(next + prev);
         return prev + next;
     }, 0);
     return runningSum;
 };
 