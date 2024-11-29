/**
 * @param {number[]} height
 * @return {number}
 */

/**
 * Two-Pointer Approach: 
 * This approach uses two pointers, one starting at the leftmost position and the other at the rightmost position. 
 * The goal is to maximize the area formed between the two pointers, and we calculate the area by finding the 
 * minimum height between the two pointers and multiplying it by the distance between them.
 * We then move the pointer pointing to the shorter height inward to potentially find a larger area.
 */
var maxArea = function (height) {
    let L = 0, R = height.length - 1; // Initialize two pointers: L (left) and R (right)
    let maxArea = 0; // Variable to store the maximum area found so far
    
    // Iterate until the left and right pointers meet
    while (L < R) {
        const leftH = height[L];  // Height at the left pointer
        const rightH = height[R]; // Height at the right pointer
        
        // Calculate the area formed between the two pointers
        const area = (R - L) * Math.min(leftH, rightH);
        
        // Update the maximum area if the current area is larger
        maxArea = Math.max(maxArea, area);
        
        // Move the pointer pointing to the shorter height inward
        if (leftH < rightH) {
            L++; // Move left pointer to the right
        } else {
            R--; // Move right pointer to the left
        }
    }
    
    return maxArea; // Return the maximum area found
};
