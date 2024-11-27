// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    //always consider edge cases
    if (nums.length == 0)
        return -1;

    //first we initialize the current and max sumn
    let curSum = nums[0];
    let maxSum = nums[0];

    //since we already processed the 0 index, we start loop from 1
    for (let i = 1; i < nums.length; i++) {
        //The idea here is to basically at every step, pick the previous sum and add to current elem
        //Or not to pick
        //if the previous sum is negative, we are runing our chances of gettting a better sum, so we don't pick
        //if however it's positive, we add it
        if (curSum < 0) {
            //we don't take it
            curSum = nums[i]
        } else {
            //we take it
            curSum += nums[i]
        }
        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum;
};

console.log(maxSubArray([1, -2, 3, -1, 2])); // Output: 4 (Subarray: [3, -1, 2])
console.log(maxSubArray([-1, -2, -3, -4]));  // Output: -1 (Subarray: [-1])
console.log(maxSubArray([5, 4, -1, 7, 8]));   // Output: 23 (Subarray: [5, 4, -1, 7, 8])
console.log(maxSubArray([1]));                // Output: 1 (Subarray: [1])