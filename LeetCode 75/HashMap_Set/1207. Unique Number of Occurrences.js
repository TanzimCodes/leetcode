/**
 * Check if the number of occurrences of each value in the given array `arr` are unique.
 * This function returns `true` if the frequency of each element is unique, and `false` otherwise.
 * 
 * Approach:
 * 1. Create a `Map` to store the frequency of each element in the array `arr`.
 *    - For each element in the array, increment its count in the map.
 * 2. Use a `Set` to track the frequency values.
 *    - As we iterate through the map, check if the frequency value is already in the set.
 *    - If the frequency is already present in the set, return `false` (indicating a duplicate frequency).
 *    - Otherwise, add the frequency to the set.
 * 3. If no duplicate frequencies are found, return `true` (indicating all frequencies are unique).
 *
 * Time Complexity:
 * - O(n), where `n` is the length of the input array `arr`. We iterate over the array once to build the map and once over the map's entries to check frequencies.
 * - The operations on `Map` and `Set` (such as `set()` and `get()`) are O(1) on average, so the overall complexity remains O(n).
 * 
 * Space Complexity:
 * - O(k), where `k` is the number of distinct elements in the array. The `Map` stores up to `k` entries, and the `Set` tracks up to `k` unique frequencies.

 * @param {number[]} arr - The input array of integers.
 * @return {boolean} - Returns `true` if the frequencies of each element in `arr` are unique, otherwise `false`.
 */
var uniqueOccurrences = function (arr) {
    const map = new Map();
    
    // Step 1: Count the frequency of each element in the array
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    // Step 2: Use a Set to check if any frequency is duplicated
    const set = new Set();
    for (const [key, val] of map.entries()) {
        if (set.has(val)) {
            return false; // Duplicate frequency found
        }
        set.add(val);
    }
    
    return true; // All frequencies are unique
};
