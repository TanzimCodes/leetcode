/**
 * Check if two words are "close strings".
 * 
 * Two words are considered close if:
 * 1. They have the same set of characters (ignoring order).
 * 2. The frequency of each character in one word can be rearranged to match the frequency of characters in the other word.
 * 
 * Approach:
 * 1. **Count Character Frequencies**: We use two `Map` objects (`map1` and `map2`) to store the frequency of each character in `word1` and `word2`, respectively.
 * 2. **Compare Character Sets**: 
 *    - If the two words don't have the same set of characters (i.e., the sorted lists of keys from `map1` and `map2` are not equal), return `false`.
 * 3. **Compare Frequency Distributions**: 
 *    - If the words have the same set of characters, compare the frequency distributions by sorting the values of `map1` and `map2` and checking if they match.
 * 4. **Return the Result**: If both sets of characters are the same and their frequencies are the same, the function returns `true`; otherwise, it returns `false`.
 * 
 * Time Complexity:
 * - **O(n log n)**, where `n` is the length of the longer word. The sorting steps for comparing keys and values both have a time complexity of O(n log n).
 * - **O(n)** for creating the frequency maps.
 * 
 * Space Complexity:
 * - **O(n)** for storing the character frequencies in two maps.
 * 
 * @param {string} word1 - The first word.
 * @param {string} word2 - The second word.
 * @return {boolean} - Returns `true` if the words are close, otherwise `false`.
 */
var closeStrings = function (word1, word2) {
    const map1 = new Map();
    const map2 = new Map();

    // Count the frequency of each character in word1
    for (const char of word1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }

    // Count the frequency of each character in word2
    for (const char of word2) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }

    // Compare the sets of characters (keys) in both maps
    if (Array.from(map1.keys()).sort().join('') !== Array.from(map2.keys()).sort().join('')) {
        return false; // If the sets of characters are not the same, return false
    }

    // Compare the frequency distributions (values) in both maps
    return Array.from(map1.values()).sort((a, b) => a - b).join('') === 
           Array.from(map2.values()).sort((a, b) => a - b).join('');
};
