/**
 * Approach:
 * 
 * This problem can be solved efficiently using the **Prefix Sum** or **Cumulative Sum** technique.
 * The key idea is to track the cumulative altitude at each stop and maintain the maximum altitude reached.
 * 
 * Steps:
 * 1. Start with an initial altitude of 0 (the first stop).
 * 2. Iterate through the `gain` array and calculate the cumulative altitude at each stop by adding the current `gain[i]` to the previous altitude.
 * 3. Track the maximum altitude encountered during the iteration.
 * 4. The result is the maximum altitude reached during the entire trip.
 * 
 * Time Complexity:
 * - O(n), where `n` is the length of the `gain` array. We only need to iterate through the array once.
 * 
 * Space Complexity:
 * - O(1), because we only need to store a few variables and don't need additional arrays.
 * 
 * @param {number[]} gain - The array representing the altitude gains at each stop.
 * @return {number} - The maximum altitude reached during the road trip.
 */
var largestAltitude = function(gain) {
    let currentAlt = 0;  // Start at altitude 0
    let maxAlt = 0;      // Maximum altitude reached
    
    // Iterate through the `gain` array and calculate the altitude at each stop
    for (let i = 0; i < gain.length; i++) {
        currentAlt += gain[i];  // Add the gain to the current altitude
        maxAlt = Math.max(maxAlt, currentAlt);  // Track the maximum altitude
    }
    
    return maxAlt;  // Return the highest altitude reached
};
