/**
 * @param {string} s - The input string containing lowercase letters.
 * @param {number} k - The length of the sliding window.
 * @return {number} - The maximum number of vowels in any substring of length 'k'.
 * 
 * Approach:
 * 1. Use the sliding window technique to track the number of vowels in a contiguous substring of length 'k'.
 * 2. Expand the window by moving the right pointer (`R`) and update the vowel count when a vowel is added.
 * 3. When the window size exceeds `k`, contract it by moving the left pointer (`L`) and adjust the vowel count accordingly.
 * 4. Keep track of the maximum vowel count for all valid windows.
 * 5. The solution runs in O(n) time complexity, where `n` is the length of the input string.
 */
var maxVowels = function (s, k) {
    let vowelCount = 0;    // Number of vowels in the current window
    let maxVowels = 0;     // Maximum number of vowels found in any window of size `k`
    let L = 0, R = 0;      // Left and Right pointers for the sliding window

    // Set of vowels for quick lookup
    const vowelsSet = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Iterate with the right pointer `R`
    while (R < s.length) {
        let windowSize = R - L + 1;  // Calculate the current window size
        
        if (windowSize <= k) {
            // Expand the window by adding the character at `R`
            if (vowelsSet.has(s.charAt(R))) {
                vowelCount++;  // Increment vowel count if the character is a vowel
            }

            // Update the maximum vowels found in any window of size `k`
            maxVowels = Math.max(maxVowels, vowelCount);

            // Move the right pointer to expand the window
            R++;
        } else if (windowSize > k) {
            // Shrink the window by moving the left pointer `L`
            if (vowelsSet.has(s.charAt(L))) {
                vowelCount--;  // Decrement vowel count if the character at `L` is a vowel
            }

            // Move the left pointer to shrink the window
            L++;
        }
    }

    // Return the maximum number of vowels found in any valid substring of length `k`
    return maxVowels;
};
