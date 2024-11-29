/**
 * Approach:
 * The task is to compute the product of all elements in the array except for the element at the current index, 
 * without using division.
 * 
 * To solve this problem efficiently, we use two auxiliary arrays, `preFix` and `suffix`, to store partial products:
 * 
 * 1. **preFix Array**: 
 *    - This array will store the product of all elements to the left of the current index for each element.
 *    - `preFix[i] = nums[0] * nums[1] * ... * nums[i-1]`
 *    - We iterate over the input array from left to right to populate this array.
 *
 * 2. **suffix Array**: 
 *    - This array will store the product of all elements to the right of the current index for each element.
 *    - `suffix[i] = nums[i+1] * nums[i+2] * ... * nums[len-1]`
 *    - We iterate over the array from right to left to populate this array.
 *
 * 3. **Final Result**:
 *    - For each index `i`, the result will be the product of `preFix[i]` and `suffix[i]`.
 *    - This gives the product of all elements except for `nums[i]` at index `i`.
 * 
 * 4. **Time Complexity**:
 *    - The algorithm runs in O(n) time, where `n` is the length of the array. 
 *    - This is because we make three separate passes over the array (one for `preFix`, one for `suffix`, and one for the result).
 * 
 * 5. **Space Complexity**:
 *    - O(n) space is used due to the storage of the `preFix`, `suffix`, and result arrays.
 *    - This could be optimized to O(1) space if we only used the result array and reused it for `preFix` and `suffix`.
 */

var productExceptSelf = function (nums) {
    const len = nums.length;
    
    // Initialize two arrays, preFix and suffix, both filled with 1's.
    // preFix will store the product of all elements before the current index.
    // suffix will store the product of all elements after the current index.
    const preFix = new Array(len).fill(1);  // Initialize the preFix array with 1's
    const suffix = new Array(len).fill(1);  // Initialize the suffix array with 1's
    const ret = new Array(len);             // Initialize the result array to store the final output

    // Step 1: Build the preFix array where each element at index i will store
    // the product of all numbers in the array before the index i.
    // Example: preFix[i] = nums[0] * nums[1] * ... * nums[i-1]
    for (let i = 1; i < len; i++) {
        preFix[i] = preFix[i - 1] * nums[i - 1];
    }

    // Step 2: Build the suffix array where each element at index i will store
    // the product of all numbers in the array after the index i.
    // Example: suffix[i] = nums[i+1] * nums[i+2] * ... * nums[len-1]
    for (let i = len - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    // Step 3: Build the result array by multiplying the corresponding values from
    // the preFix and suffix arrays. The final result at each index i will be the 
    // product of all numbers except nums[i], which is preFix[i] * suffix[i].
    for (let i = 0; i < len; i++) {
        ret[i] = preFix[i] * suffix[i];
    }

    // Step 4: Return the result array
    return ret;
};
