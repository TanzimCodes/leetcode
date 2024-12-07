/**
 * Function to return the length of the last word in the given string.
 * 
 * Approach:
 * 1. Start from the end of the string and skip any trailing spaces.
 * 2. Once a non-space character is encountered, begin counting the length of the last word.
 * 3. Continue counting until a space or the beginning of the string is reached.
 * 4. Return the counted length.
 * 
 * Time Complexity: O(n), where n is the length of the string (single pass through the string).
 * Space Complexity: O(1) because we are only using a constant amount of extra space.
 * 
 * @param {string} s - The input string.
 * @returns {number} - The length of the last word.
 */
function lengthOfLastWord(s) {
    let length = 0;
    let i = s.length - 1;

    // Skip any trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }

    // Count the length of the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }

    return length;
}
