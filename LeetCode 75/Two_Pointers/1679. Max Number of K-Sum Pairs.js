/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 
// HashMap Approach: This approach uses a hashmap to track the frequency of numbers we have seen 
// and checks if the complement of each number (k - num) is present. If it is, we form a pair and 
// decrease the frequency of the complement.
var maxOperationsHashMap = function (nums, k) {
    // Initialize a map to store the frequency of each number
    const map = new Map();
    let op = 0;  // To count the number of valid pairs
    
    // Iterate through each number in the array
    for (const digit of nums) {
        // Only consider numbers less than k, as we are searching for pairs that sum to k
        if (digit < k) {
            const diff = k - digit; // Calculate the complement
            
            // Check if the complement exists in the map (i.e., a valid pair can be formed)
            if (map.has(diff)) {
                let rem = map.get(diff); // Get the frequency of the complement
                op++;  // Found a valid pair
                
                // Decrease the frequency of the complement
                rem -= 1;
                
                // If the complement's frequency is 0, delete it from the map; otherwise, update the map
                if (rem === 0) {
                    map.delete(diff);
                } else {
                    map.set(diff, rem);
                }
            } else {
                // If complement is not found, just add the current number to the map
                map.set(digit, (map.get(digit) || 0) + 1);
            }
        }
    }
    
    return op;  // Return the total number of pairs
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// Two-Pointer Approach: This approach first sorts the array and then uses two pointers, one starting 
// from the beginning (left) and the other from the end (right), to find pairs whose sum equals k. 
// Depending on the sum, the pointers are adjusted inward to find the next valid pair.
var maxOperationsTwoPointer = function (nums, k) {
    // Sort the array to apply the two-pointer technique
    nums.sort((a, b) => a - b);
    
    // Initialize two pointers: left at the start, right at the end of the array
    let L = 0, R = nums.length - 1;
    let op = 0;  // To count the number of valid pairs
    
    // Use two pointers to find pairs
    while (L < R) {
        const sum = nums[L] + nums[R];  // Calculate the sum of the numbers at the two pointers
        
        if (sum === k) {
            op++;  // Found a valid pair
            L++;  // Move the left pointer to the right
            R--;  // Move the right pointer to the left
        } else if (sum > k) {
            R--;  // Decrease the sum by moving the right pointer leftward
        } else {
            L++;  // Increase the sum by moving the left pointer rightward
        }
    }
    
    return op;  // Return the total number of pairs
};
