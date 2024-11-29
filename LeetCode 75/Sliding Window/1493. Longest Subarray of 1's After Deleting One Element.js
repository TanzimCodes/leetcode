/**
 * Approach:
 * 
 * This problem can be efficiently solved using the sliding window technique.
 * The task is to find the length of the longest contiguous subarray of 1's after deleting exactly one element.
 * You can think of the deletion operation as flipping one zero to one.
 * 
 * Steps:
 * 1. Initialize two pointers `L` (left) and `R` (right) to represent the sliding window, and a variable `delZero` 
 *    to track the number of zeros in the current window.
 * 2. Iterate through the array with the right pointer (`R`):
 *    - If `nums[R]` is 0, increment the `delZero` count.
 *    - If `delZero > 1`, it means there are more than one zero in the window, so move the left pointer (`L`) to shrink
 *      the window until `delZero` becomes 1 or less.
 *    - If `nums[L]` is 0, decrement the `delZero` count as we are removing that zero from the window.
 * 3. After ensuring that the window contains at most one zero, calculate the length of the window (`R - L`) and update 
 *    the maximum length (`maxLen`).
 * 4. Continue expanding the window by moving the right pointer (`R`) until the end of the array.
 * 5. The result will be the maximum length of the valid window found during the iteration.
 * 
 * Time Complexity:
 * - O(n), where `n` is the length of the array, because both the `L` and `R` pointers traverse the array only once.
 * 
 * Space Complexity:
 * - O(1), as the algorithm only uses a fixed amount of extra space.
 * 
 * @param {number[]} nums - The array of 0s and 1s.
 * @return {number} - The maximum length of the subarray with at most one zero flipped to 1.
 */
var longestSubarray = function (nums) {
    let maxLen = 0, k = 1, L = 0, R = 0, delZero = 0;

    while (R < nums.length) {
        // Expand the window by moving the right pointer
        if (nums[R] === 0)
            delZero++;

        // If there are more than one zero in the window, shrink the window from the left
        while (delZero > k) {
            if (nums[L] == 0) {
                // Undelete a zero (i.e., move left pointer)
                delZero--;
            }
            L++;  // Move left pointer to shrink the window
        }

        // Calculate the max length of the valid window
        maxLen = Math.max(maxLen, R - L);

        // Expand the window by moving the right pointer
        R++;
    }

    return maxLen;  // Return the maximum length of valid subarray
};
