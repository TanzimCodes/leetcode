/**
 * Approach:
 * 1. Initialize two pointers for both input strings (`word1` and `word2`).
 * 2. Alternate adding characters from `word1` and `word2` to the result array until one of the strings runs out of characters.
 * 3. After the alternating merge, append any remaining characters from either string.
 * 4. Join the result array to form the merged string and return it.
 *
 * @param {string} word1 - First string to merge.
 * @param {string} word2 - Second string to merge.
 * @return {string} - The merged string.
 */
var mergeAlternately = function(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const result = [];
    
    let i = 0, j = 0;
    
    // Step 1: Merge alternately from both strings until one string is exhausted
    while (i < len1 && j < len2) {
        result.push(word1[i++]);
        result.push(word2[j++]);
    }
    
    // Step 2: Append remaining characters from word1 (if any)
    while (i < len1) {
        result.push(word1[i++]);
    }
    
    // Step 3: Append remaining characters from word2 (if any)
    while (j < len2) {
        result.push(word2[j++]);
    }
    
    // Step 4: Join and return the result
    return result.join('');
};
