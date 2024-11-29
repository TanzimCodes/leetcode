/**
 * Approach:
 * 
 * This problem can be solved using the sliding window technique.
 * We maintain a window defined by two pointers `L` (left) and `R` (right) which represent
 * the current subarray being considered. The goal is to find the maximum length of a subarray
 * that contains at most `k` zeros (i.e., we can flip at most `k` zeros to ones).
 * 
 * Steps:
 * 1. Initialize two pointers, `L` and `R`, to define the sliding window, and a variable `zeroCount`
 *    to count the number of zeros in the current window.
 * 2. Iterate through the array with the right pointer (`R`). For each element:
 *    - If `nums[R]` is 0, increment `zeroCount`.
 *    - If `zeroCount` exceeds `k` (i.e., there are too many zeros in the window), move the left pointer (`L`)
 *      to shrink the window and reduce the number of zeros.
 *    - Continue shrinking the window until the number of zeros in the window is less than or equal to `k`.
 * 3. After ensuring the window is valid (i.e., `zeroCount <= k`), calculate the length of the current window,
 *    which is `R - L + 1`, and update the maximum length (`maxLen`) if needed.
 * 4. Once the loop is complete, `maxLen` will contain the length of the longest subarray with at most `k` zeros.
 * 
 * Time Complexity:
 * - The time complexity is O(n), where `n` is the length of the array, because both the left and right pointers
 *   only move from 0 to `n` without ever backtracking.
 * 
 * Space Complexity:
 * - The space complexity is O(1), as we only use a constant amount of extra space.
 *
 * @param {number[]} nums - The array of 0s and 1s.
 * @param {number} k - The maximum number of zeros that can be flipped.
 * @return {number} - The maximum length of the subarray with at most `k` zeros flipped to 1s.
 */
var longestOnes = function(nums, k) {
    let maxLen = 0;  // To track the maximum length of the subarray
    let zeroCount = 0;  // To count the zeros in the current window
    let L = 0, R = 0;  // Left and right pointers for the sliding window

    while (R < nums.length) {
        // Expand the window by moving the right pointer
        if (nums[R] === 0) {
            zeroCount++;
        }

        // If the number of zeros exceeds k, shrink the window from the left
        while (zeroCount > k) {
            if (nums[L] === 0) {
                zeroCount--;
            }
            L++;  // Move left pointer to shrink the window
        }

        // After ensuring the window is valid, calculate the max length
        maxLen = Math.max(maxLen, R - L + 1);

        // Expand the window further by moving the right pointer
        R++;
    }

    return maxLen;  // Return the maximum length of valid subarray
};
