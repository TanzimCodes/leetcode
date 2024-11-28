// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    // Step 1: Find the GCD of the lengths of both strings
    const gcd = GCD(str1.length, str2.length);

    // Step 2: Potential GCD string from the first string
    let letterGCD = str1.slice(0, gcd);

    // Step 3: Check if letterGCD can divide str1
    for (let i = 0; i < str1.length; i += gcd) {
        if (letterGCD !== str1.slice(i, i + gcd)) {
            return "";  // Return empty string if it doesn't match
        }
    }

    // Step 4: Check if letterGCD can divide str2
    for (let i = 0; i < str2.length; i += gcd) {
        if (letterGCD !== str2.slice(i, i + gcd)) {
            return "";  // Return empty string if it doesn't match
        }
    }

    // Step 5: Return the GCD string that divides both
    return letterGCD;
};

// Euclid's algorithm to find the GCD of two numbers
function GCD(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        [a, b] = [b, remainder];  // Swap a and b
    }
    return a;
}
