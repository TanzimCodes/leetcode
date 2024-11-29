/**
 * Approach:
 * 1. Find the GCD of the lengths of the two strings using Euclid's algorithm.
 * 2. Extract the substring of the length equal to the GCD of the lengths of both strings.
 * 3. Check if this substring can divide both str1 and str2.
 * 4. If it can, return this substring; otherwise, return an empty string.
 *
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @return {string} - The GCD string or an empty string if no common GCD string exists
 */
var gcdOfStrings = function (str1, str2) {
    // Step 1: Find the GCD of the lengths of both strings
    const gcdLength = GCD(str1.length, str2.length);

    // Step 2: Potential GCD string from the first string
    const potentialGCD = str1.slice(0, gcdLength);

    // Step 3: Check if potentialGCD can divide both str1 and str2
    if (str1.split(potentialGCD).join('') === '' && str2.split(potentialGCD).join('') === '') {
        return potentialGCD;  // Step 4: Return the potential GCD string if it divides both strings
    }

    // If no common GCD string is found, return empty string
    return '';
};

// Euclid's algorithm to find the GCD of two numbers
function GCD(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        [a, b] = [b, remainder];  // Swap a and b
    }
    return a;
}
