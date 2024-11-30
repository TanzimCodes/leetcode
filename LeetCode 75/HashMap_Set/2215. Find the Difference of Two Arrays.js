/**
 * Find the difference between two arrays, nums1 and nums2.
 * The result is an array of two arrays:
 * - The first array contains elements from nums1 that are not in nums2.
 * - The second array contains elements from nums2 that are not in nums1.
 * Duplicates are removed in the final result.
 *
 * Approach:
 * 1. Convert both input arrays, nums1 and nums2, into sets to remove any duplicates.
 * 2. For each set, filter out elements that are present in the other set.
 * 3. Return the results as an array of two arrays, where:
 *    - The first array contains unique elements from nums1 not in nums2.
 *    - The second array contains unique elements from nums2 not in nums1.
 *
 * Time Complexity:
 * - O(n + m), where:
 *   - n is the length of nums1
 *   - m is the length of nums2
 * - Creating sets takes O(n) and O(m) time, respectively.
 * - Filtering each set with .filter() takes O(n) and O(m) time, respectively.
 *
 * Space Complexity:
 * - O(n + m), as we store the sets for nums1 and nums2 and the result arrays.
 *
 * @param {number[]} nums1 - First array of numbers.
 * @param {number[]} nums2 - Second array of numbers.
 * @return {number[][]} - A 2D array containing two arrays:
 *    1. Elements in nums1 but not in nums2 (unique values).
 *    2. Elements in nums2 but not in nums1 (unique values).
 */
var findDifference = function (nums1, nums2) {
    // Convert arrays to sets to automatically remove duplicates
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    // Filter out elements from each set that are present in the other set
    return [
        [...set1].filter(item => !set2.has(item)),  // Elements in nums1 not in nums2
        [...set2].filter(item => !set1.has(item))   // Elements in nums2 not in nums1
    ];
};
