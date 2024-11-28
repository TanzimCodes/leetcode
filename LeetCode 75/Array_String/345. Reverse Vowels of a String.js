/**
 * Approach:
 * 1. Use two pointers, `i` starting from the left and `j` from the right of the string.
 * 2. Traverse the string until the two pointers meet:
 *    - If `strArr[i]` is not a vowel, increment `i` to find the next vowel.
 *    - If `strArr[j]` is not a vowel, decrement `j` to find the previous vowel.
 * 3. When both `i` and `j` point to vowels, swap them.
 * 4. Continue the process until all vowels are swapped.
 * 5. Convert the modified array back to a string and return the result.
 * 
 * This approach ensures we only swap vowels and does so efficiently with a time complexity of O(n) 
 * and a space complexity of O(1) (excluding the input and output).
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowelSet = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    const strArr = s.split('');
    let i = 0, j = strArr.length - 1;

    // Step 1: Swap vowels in place
    while (i < j) {
        // Find the next vowel from the left
        if (!vowelSet.has(strArr[i])) {
            i++;
            continue;
        }

        // Find the next vowel from the right
        if (!vowelSet.has(strArr[j])) {
            j--;
            continue;
        }

        // Swap the vowels
        [strArr[i], strArr[j]] = [strArr[j], strArr[i]];

        // Move pointers inward
        i++;
        j--;
    }

    // Step 2: Return the modified string
    return strArr.join('');
};
