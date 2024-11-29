/**
 * Moves all zeroes in the array to the end while maintaining the relative order 
 * of the non-zero elements. This is done in-place without using extra space 
 * apart from a few variables. The solution avoids unnecessary iterations 
 * and swaps to achieve optimal performance.
 *
 * Approach:
 * 1. Traverse the array once using a single pointer (`nonZeroIndex`) to track 
 *    the position where the next non-zero element should be moved.
 * 2. Whenever a non-zero element is found, it is moved to the `nonZeroIndex` 
 *    position, and the position is then incremented.
 * 3. Once all non-zero elements are moved to the front, any remaining positions 
 *    are implicitly filled with zeros by overwriting the original zeroes in the array.
 * 
 * Time Complexity:
 * - O(n), where `n` is the length of the array. We traverse the array once, 
 *   making the solution efficient.
 *
 * Space Complexity:
 * - O(1), since no extra space is used besides the few variables for tracking 
 *   positions (i.e., in-place modification).
 *
 * @param {number[]} nums - The array to modify.
 * @return {void} - The function modifies the array in-place, without returning anything.
 */

var moveZeroes = function (nums) {
    let L = 0, R = 0;
    const len = nums.length;
    //Thw two pointers
    for (let R = 0; R < len; R++) {
        if (nums[R] != 0) {
            //swap
            [nums[L], nums[R]] = [nums[R], nums[L]]
            L++;
        }
    }
}