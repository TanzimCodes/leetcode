/**
 * Approach:
 * 1. Trim the input string to remove leading and trailing spaces.
 * 2. Split the string by spaces to separate words.
 * 3. Filter out any empty strings resulting from multiple spaces.
 * 4. Reverse the array of words.
 * 5. Join the reversed words back into a string with a single space between them.
 * 6. Return the resulting string.
 *
 * @param {string} s - The input string
 * @return {string} - The string with words reversed and trimmed
 */
var reverseWords = function (s) {
    // Step 1: Trim input and split the string by spaces
    let words = s.trim().split(" ");

    // Step 2: Filter out empty strings (in case of multiple spaces)
    words = words.filter(word => word !== "");

    // Step 3: Reverse the words
    let left = 0, right = words.length - 1;
    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]]; // Swap
        left++;
        right--;
    }

    // Step 4: Join the words into a single string, separating them by a space
    return words.join(" ");
};
