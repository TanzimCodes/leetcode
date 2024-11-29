/**
 * Approach 1: Tracks Individual Numbers (Optimized)
 * - Maintains two variables: `first` (smallest so far) and `second` (second smallest so far).
 * - If a number greater than `second` is found, it confirms the triplet.
 * - Strength: Minimal state tracking and efficient.
 * - Weakness: Doesn't explicitly track the entire sequence (abstracts it).
 * 
 * Time Complexity: O(n) (Single pass through the array).
 * Space Complexity: O(1) (Uses constant space for two variables).
 * 
 * @param {number[]} nums - Input array of integers.
 * @return {boolean} - True if there exists an increasing triplet subsequence.
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num; // Smallest so far
        } else if (num <= second) {
            second = num; // Second smallest so far
        } else {
            // Found a number greater than second
            return true;
        }
    }
    return false;
};


/**
 * Approach 2: Explicitly Tracks the Increasing Sequence ( This is the custom approcah I came up with when I first solved this problem wihtout looking at sol 🙈)
 * - Maintains a "current sequence" using variables like `counter`, `currentMax`, `lastSeen`, and `parent`.
 * - Resets these variables when a smaller number is encountered.
 * - Strength: Detailed tracking ensures correctness.
 * - Weakness: More complex to implement and manage states.
 * 
 * Time Complexity: O(n) (Iterates through the array once, but with more overhead).
 * Space Complexity: O(1) (Uses constant space for tracking variables).
 * 
 * @param {number[]} nums - Input array of integers.
 * @return {boolean} - True if there exists an increasing triplet subsequence.
 */
var increasingTriplet = function (nums) {
    let counter = 0;
    let currentMax = nums[0];
    let parent = nums[0];
    let lastSeen = null;

    for (let i = 1; i < nums.length; i++) {
        if (lastSeen !== null && nums[i] > lastSeen) {
            return true;
        }

        if (currentMax < nums[i]) {
            currentMax = nums[i];
            counter++;
            if (counter === 2) {
                return true;
            }
        } else if (nums[i] > parent) {
            currentMax = nums[i];
        } else if (nums[i] < parent) {
            if (counter === 1) {
                lastSeen = lastSeen === null ? currentMax : Math.min(lastSeen, currentMax);
            }
            // Reset tracking
            parent = nums[i];
            currentMax = nums[i];
            counter = 0;
        }
    }
    return false;
};
