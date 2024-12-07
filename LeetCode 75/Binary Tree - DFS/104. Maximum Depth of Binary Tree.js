/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * Approach:
 * 
 * The problem asks for the maximum depth of a binary tree. The maximum depth is defined as the longest path from the root node to a leaf node.
 * We can solve this problem using **recursion** by applying the following approach:
 * 
 * 1. **Base Case**: If the current node is null, return 0. This indicates that we've reached the end of a branch of the tree.
 * 
 * 2. **Recursive Case**: For each node, recursively calculate the maximum depth of the left and right subtrees.
 *    - Call `maxDepth` on the left child.
 *    - Call `maxDepth` on the right child.
 *    - The depth of the current node is the larger of the two depths (left and right subtrees), plus 1 to account for the current node itself.
 * 
 * 3. **Return the Result**: After calculating the maximum depth for both subtrees, return the maximum of the two depths, plus 1 for the current node.
 * 
 * Time Complexity: **O(n)**, where `n` is the number of nodes in the tree. We visit each node once.
 * 
 * Space Complexity: **O(h)**, where `h` is the height of the tree. This is due to the recursion stack space required for each recursive call.
 * In the worst case (unbalanced tree), the space complexity could be **O(n)**.
 */

/**
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} - The maximum depth of the tree.
 */
var maxDepth = function (node) {
    // Base case: if the node is null, return 0 (no depth)
    if (node === null) {
        return 0;
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = maxDepth(node.left);   // Calculate depth of left subtree
    const rightDepth = maxDepth(node.right); // Calculate depth of right subtree

    // Return the maximum of the two depths, plus 1 for the current node
    return Math.max(leftDepth, rightDepth) + 1;
};
