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
 * This problem asks us to check whether the leaf nodes (the nodes without children) of two binary trees are similar.
 * The leaf nodes should be visited from left to right and compared between the two trees.
 * 
 * We can solve this problem using the following approach:
 * 
 * 1. **Traverse both trees**: We'll traverse each tree and collect the leaf nodes in order.
 * 
 * 2. **In-order traversal for leaves**: During the traversal, we visit each node. If it's a leaf node (no left and right children), we'll collect its value.
 * 
 * 3. **Compare the leaf sequences**: Once we have the sequences of leaf nodes from both trees, we compare them.
 *    - If both sequences are identical, return `true`.
 *    - Otherwise, return `false`.
 * 
 * Time Complexity: **O(n)**, where `n` is the total number of nodes in both trees combined. We traverse both trees once to collect their leaf nodes.
 * 
 * Space Complexity: **O(h)**, where `h` is the height of the tree. This is due to the recursion stack space used during the traversal of each tree.
 */

/**
 * @param {TreeNode} root1 - The root of the first binary tree.
 * @param {TreeNode} root2 - The root of the second binary tree.
 * @return {boolean} - `true` if the leaf sequences of the two trees are similar, otherwise `false`.
 */
var leafSimilar = function (root1, root2) {
    // Get the leaf node sequences for both trees
    const arr1 = leafNodeSeq(root1);
    const arr2 = leafNodeSeq(root2);

    // Compare the two leaf node sequences
    return arr1.join(',') === arr2.join(',');
};

/**
 * Helper function to traverse the tree and collect the leaf node values.
 * 
 * This function performs a depth-first traversal of the tree and appends the leaf node values to the `arr`.
 * A leaf node is defined as a node with no left and right children.
 * 
 * @param {TreeNode} node - The current node of the tree.
 * @param {Array} arr - The array to store leaf node values (default is an empty array).
 * @return {Array} - The array containing the values of the leaf nodes.
 */
function leafNodeSeq(node, arr = []) {
    if (node === null) return;

    // If it's a leaf node (no left or right children), add its value to the array
    if (node.left === null && node.right === null) {
        arr.push(node.val);
        return arr;
    }

    // Recursively traverse the left and right subtrees
    if (node.left) leafNodeSeq(node.left, arr);
    if (node.right) leafNodeSeq(node.right, arr);

    return arr;
}
