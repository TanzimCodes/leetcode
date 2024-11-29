/**
 * @param {number[]} nums - Array of numbers
 * @param {number} k - Size of the subarray for which we want to find the maximum average
 * @return {number} - The maximum average of any subarray of size 'k'
 * 
 * Approach:
 * 1. This problem uses a sliding window technique to efficiently calculate the average of subarrays of size 'k'.
 * 2. We maintain a window of size 'k' and slide it over the input array while keeping track of the sum of the elements in the window.
 * 3. The sum of elements in the current window is updated as the window moves.
 * 4. At each step when the window size is exactly 'k', we calculate the average of the current window and update the max average found so far.
 * 5. The sliding window is adjusted by incrementing the left or right pointers to maintain the size of the window as 'k'.
 * 6. This approach runs in O(n) time, where 'n' is the length of the array, since we only traverse the array once.
 */
var findMaxAverage = function (nums, k) {
    let L = 0, R = 0; // Left and right pointers for the sliding window
    let maxAvg = Number.MIN_SAFE_INTEGER; // Variable to store the maximum average found
    let sum = 0; // Variable to store the sum of elements in the current window

    // Iterate through the array with the right pointer R
    while (R < nums.length) {
        const curWindow = R - L + 1; // Calculate the current window size

        if (curWindow < k) {
            // If window size is less than k, add the current element to the sum and move the right pointer
            sum += nums[R];
            R++;
        } else if (curWindow > k) {
            // If window size exceeds k, remove the element at the left of the window and move the left pointer
            sum -= nums[L];
            L++;
        } else {
            // When window size is exactly k, calculate the average and update the max average
            sum += nums[R];
            maxAvg = Math.max(maxAvg, sum / k);
            R++; // Move the right pointer for the next window
        }
    }

    // Return the maximum average found
    return maxAvg;
};
