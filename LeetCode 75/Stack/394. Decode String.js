/**
 * 394. Decode String
 *
 * Problem Statement:
 * Given an encoded string, return its decoded string.
 * The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.
 * You may assume that the input string is always valid. No extra spaces are allowed in the encoded string.
 * 
 * Approach:
 * This problem can be efficiently solved using a **stack** data structure.
 * The algorithm will traverse through the given string and perform the decoding based on the rules outlined.
 * 
 * 1. **Iterate through the characters** of the string:
 *    - If the character is not a closing bracket (`']'`), simply push it onto the stack.
 *    - If the character is a closing bracket, this signals that we need to process a segment:
 *        - **Step 1**: Pop all characters from the stack until we encounter the corresponding opening bracket (`'['`). These characters represent the string to be repeated.
 *        - **Step 2**: Pop the multiplier (number of repetitions) from the stack. The multiplier will be a number that may be more than one digit, so we need to accumulate it.
 *        - **Step 3**: Repeat the decoded string the specified number of times, and push the result back onto the stack.
 * 
 * 2. **Time Complexity**: O(n), where `n` is the length of the input string `s`. We are iterating over each character and performing constant time operations (push, pop) on the stack.
 * 3. **Space Complexity**: O(n), where `n` is the size of the input string. The stack stores all characters and decoded segments at different points.
 * 
 * @param {string} s - The encoded string.
 * @return {string} - The decoded string.
 */
var decodeString = function (s) {
    const stack = [];

    for (const char of s) {
        if (char !== "]") {
            // If the character is not ']', add it to the stack.
            stack.push(char);
        } else {
            // We have encountered a closing bracket, time to decode the string.
            
            // Step 1: Pop all characters from the stack until we find '['
            let str = "";
            while (stack.at(-1) !== "[") {
                str = stack.pop() + str;
            }
            stack.pop(); // Pop the '[' character.

            // Step 2: Pop the multiplier (number of times to repeat)
            let multiStr = "";
            while (!Number.isNaN(Number(stack.at(-1)))) {
                multiStr = stack.pop() + multiStr;
            }
            let count = Number(multiStr);

            // Step 3: Repeat the decoded string `count` times.
            let temp = "";
            while (count > 0) {
                temp += str;
                count--;
            }

            // Push the repeated string back to the stack.
            stack.push(temp);
        }
    }

    // The result will be the concatenation of all elements in the stack.
    return stack.join('');
};
