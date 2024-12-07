/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root - The root of the binary tree.
 * @param {number} targetSum - The target sum we are trying to find.
 * @return {number} - The number of paths that sum to the target.
 * 
 * Approach:
 * We can approach this problem recursively by traversing each node in the tree.
 * At each node, we will check the number of valid paths starting from that node that sum to the target.
 * We will use a helper function, `currentNodePath`, that counts paths starting from a specific node and extending downwards.
 * We will recursively check both the left and right subtrees for valid paths and accumulate the count.
 * The result is the total number of paths in the tree that sum to the given target.
 */
var pathSum = function (root, targetSum) {
    // Start the path search from the root node
    return findPaths(root, targetSum);
};

/**
 * Helper function to traverse the tree and find all paths that sum to the target sum.
 * This function is responsible for exploring the tree recursively, calling the currentNodePath function for each node.
 * 
 * @param {TreeNode} node - The current node in the tree.
 * @param {number} targetSum - The target sum we are searching for.
 * @return {number} - The total number of valid paths found in the tree.
 */
function findPaths(node, targetSum) {
    // Base case: if the node is null, no valid paths are possible
    if (node == null)
        return 0;

    let pairs = 0;

    // Count paths starting from the current node
    pairs += currentNodePath(node, targetSum);

    // Recursively check the left and right subtrees for paths
    pairs += findPaths(node.left, targetSum);
    pairs += findPaths(node.right, targetSum);

    return pairs;
}

/**
 * Helper function to count the number of paths starting from the current node that sum to the target sum.
 * This function is called recursively to check each path by exploring the left and right children of the node.
 * 
 * @param {TreeNode} node - The current node to start the path search.
 * @param {number} targetSum - The target sum we are searching for.
 * @param {number} curSum - The current sum of the path.
 * @return {number} - The number of valid paths starting from the current node.
 */
function currentNodePath(node, targetSum, curSum = 0) {
    // Base case: if the node is null, no valid paths are possible
    if (node == null)
        return 0;

    // Add the current node's value to the current sum
    curSum += node.val;

    let pairs = 0;

    // If the current sum matches the target, count this path
    if (curSum === targetSum)
        pairs++;

    // Recursively check both left and right children for additional valid paths
    pairs += currentNodePath(node.left, targetSum, curSum);
    pairs += currentNodePath(node.right, targetSum, curSum);

    return pairs;
}
