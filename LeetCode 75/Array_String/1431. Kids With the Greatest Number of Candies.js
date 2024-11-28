/**
 * Approach:
 * 1. Find the maximum number of candies any kid has.
 * 2. For each kid, check if adding the extra candies makes their total candies equal to or greater than the maximum.
 * 3. Return an array of boolean values where each value represents whether the respective kid can have the greatest number of candies after receiving extra candies.
 *
 * @param {number[]} candies - Array of the number of candies each kid has.
 * @param {number} extraCandies - The extra candies to be distributed.
 * @return {boolean[]} - Array of boolean values where each value represents whether that kid can have the greatest number of candies.
 */
var kidsWithCandies = function(candies, extraCandies) {
    // Step 1: Find the maximum candies any kid has
    const maxCandies = Math.max(...candies);

    // Step 2: Map through the candies array to check if adding extraCandies gives a kid the maximum or more
    return candies.map(candy => (candy + extraCandies) >= maxCandies);
};
