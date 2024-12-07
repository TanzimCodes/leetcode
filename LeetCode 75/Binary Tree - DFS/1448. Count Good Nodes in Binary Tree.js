/**
 * Approach:
 * 
 * The problem requires finding the number of "good" nodes in a binary tree. 
 * A node is considered "good" if, along the path from the root to the node, 
 * its value is greater than or equal to all other node values encountered.
 * 
 * To solve this problem, we will perform a depth-first search (DFS) of the binary tree:
 * 1. At each node, we will compare its value with the maximum value encountered 
 *    so far along the path from the root to that node.
 * 2. If the current node's value is greater than or equal to the maximum value 
 *    seen so far, then the node is a "good" node.
 * 3. We will then recurse on the left and right children, updating the maximum value 
 *    as we traverse.
 * 4. The base case for recursion is when we encounter a `null` node, in which case 
 *    we return 0 (no good nodes).
 * 
 * Time Complexity:
 * - The algorithm visits each node once, performing a constant amount of work at 
 *   each node. Therefore, the time complexity is O(n), where n is the number of nodes 
 *   in the tree.
 * 
 * Space Complexity:
 * - The space complexity is O(h), where h is the height of the tree, due to the 
 *   recursion stack.
 * 
 * @param {TreeNode} root - The root node of the binary tree.
 * @return {number} The total count of good nodes in the tree.
 */
var goodNodes = function (root) {
    return countGoodNodes(root, -Infinity);  // Use -Infinity for the initial max value
};

/**
 * Recursive helper function to count good nodes.
 * 
 * @param {TreeNode} node - The current node being processed.
 * @param {number} maxSoFar - The maximum value encountered so far along the path.
 * @return {number} The count of good nodes in the subtree rooted at the current node.
 */
function countGoodNodes(node, maxSoFar) {
    if (node == null) {
        return 0;  // Base case: No good nodes in a null node
    }

    let count = 0;
    
    // Check if the current node is "good" by comparing its value with the maxSoFar
    if (node.val >= maxSoFar) {
        count = 1;  // This node is good, so start with 1
        maxSoFar = node.val;  // Update maxSoFar for the next nodes
    }

    // Recursively accumulate counts from left and right subtrees
    count += countGoodNodes(node.left, maxSoFar);
    count += countGoodNodes(node.right, maxSoFar);

    return count;  // Return the total number of good nodes in this subtree
}
