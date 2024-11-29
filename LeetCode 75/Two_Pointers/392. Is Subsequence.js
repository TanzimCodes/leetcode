/**
 * Determines if string `s` is a subsequence of string `t`. A subsequence means that the characters 
 * of string `s` appear in order in string `t`, but not necessarily consecutively.
 * 
 * Approach:
 * 1. We iterate through string `t` while tracking the index `L` for the characters in string `s`.
 * 2. Each time we find a character in `t` that matches the current character of `s` (pointed by `L`),
 *    we increment `L` to check the next character in `s`.
 * 3. If `L` reaches the length of `s`, it means all characters in `s` have been found in order in `t`,
 *    so we return `true`.
 * 4. If we finish iterating through `t` without finding all characters in `s`, we return `false`.
 * 
 * Time Complexity:
 * - O(n), where `n` is the length of string `t`. We only iterate through `t` once.
 * 
 * Space Complexity:
 * - O(1), since we only use a few variables for indexing and no additional data structures are required.
 *
 * @param {string} s - The string to check if it is a subsequence.
 * @param {string} t - The string in which to check for the subsequence.
 * @return {boolean} - Returns `true` if `s` is a subsequence of `t`, otherwise `false`.
 */

var isSubsequence = function (s, t) {
    let L = 0;

    // If s is empty, it's always a subsequence of any string
    if (s.length === 0) return true;

    // Iterate through string t
    for (const letter of t) {
        if (s.charAt(L) === letter) {
            L++; // Move to the next character in s
            if (L === s.length) return true; // All characters in s are found
        }
    }

    // If we finish the loop and haven't found all characters of s
    return false;
};
