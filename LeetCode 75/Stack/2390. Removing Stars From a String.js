/**
 * 2390. Removing Stars From a String
 *
 * Problem Statement:
 * Given a string `s` which contains some characters and stars (`*`), 
 * the `*` character represents a backspace operation that removes 
 * the most recent character that hasn't been removed yet. 
 * You need to return the resulting string after all the stars have been processed.
 * 
 * Approach:
 * This problem can be efficiently solved using a **stack** data structure.
 * 
 * 1. **Use a Stack**: As we traverse the string, we will push characters onto the stack.
 * 2. **Handle '*' Characters**: Whenever we encounter a `*`, we will pop the top character from the stack.
 * 3. **Final Result**: After processing the entire string, the stack will contain the final characters in the correct order. 
 *    We simply join the characters in the stack to form the final string and return it.
 * 
 * Why a Stack?
 * - The stack follows the Last In, First Out (LIFO) principle, which matches perfectly with the requirement to remove 
 *   the most recent character when encountering a backspace (`*`).
 * - We are essentially building the string character by character while "undoing" the most recent character each time 
 *   a star is encountered, which makes a stack the ideal choice.
 * 
 * Time Complexity: O(n), where `n` is the length of the string `s`. We only iterate over the string once, 
 * and the stack operations (`push` and `pop`) are O(1).
 * 
 * Space Complexity: O(n), where `n` is the length of the string `s`, because in the worst case, 
 * all characters may end up in the stack.
 * 
 * @param {string} s - The input string.
 * @return {string} - The resulting string after processing all the backspaces.
 */
var removeStars = function (s) {
    const stack = [];

    for (const char of s) {
        if (char !== "*")
            stack.push(char);  // Push non-star characters onto the stack.
        else
            stack.pop();  // Pop the last character when a star is encountered.
    }

    return stack.join('');  // Join the characters in the stack to get the final string.
};
