/**
 * Compresses a character array in place, replacing sequences of repeating 
 * characters with the character followed by the count of repetitions.
 * The function modifies the input array directly and returns the new length 
 * of the compressed array.
 *
 * Approach:
 * 1. Use a `trackIdx` to overwrite the array with compressed characters.
 * 2. Traverse the array with a loop, keeping track of the current character's
 *    count of consecutive occurrences.
 * 3. When a different character is encountered:
 *    - Write the previous character to `trackIdx`.
 *    - If its count is greater than 1, write each digit of the count to `trackIdx`.
 *    - Reset the count for the new character.
 * 4. After the loop, handle the last character and its count explicitly since 
 *    it may not be followed by a different character to trigger writing.
 * 5. Return `trackIdx` as the new length of the compressed array.
 *
 * Time Complexity: O(n), where n is the length of the array.
 * Space Complexity: O(1), as the compression is done in place.
 *
 * Example:
 * Input: ["a", "a", "b", "b", "c", "c", "c"]
 * Output: 6 (Modified array: ["a", "2", "b", "2", "c", "3"])
 *
 * @param {character[]} arr - The input character array
 * @return {number} - The length of the compressed array
 */
var compress = function (arr) {
    let count = 1;
    let trackIdx = 0;
    const len = arr.length;

    for (let i = 1; i < len; i++) {
        if (arr[i] != arr[i - 1]) {
            arr[trackIdx++] = arr[i - 1];
            if (count > 1) {
                for (const digit of String(count)) {
                    arr[trackIdx++] = digit;
                }
            }
            count = 1;
        } else {
            count++;
        }
    }

    // Handle the last character and its count
    arr[trackIdx++] = arr[len - 1];
    if (count > 1) {
        for (const digit of String(count)) {
            arr[trackIdx++] = digit;
        }
    }

    return trackIdx;
};
