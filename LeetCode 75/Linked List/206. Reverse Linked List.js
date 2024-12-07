/**
 * Approach:
 * 
 * The task is to reverse a singly linked list. This means the direction of all the pointers in the list should
 * be reversed such that the first node becomes the last, and each node's next pointer should point to the previous node.
 * 
 * 1. Edge Case: If the linked list is empty (head is null), we can immediately return null since there's nothing to reverse.
 * 
 * 2. Initialize two pointers:
 *    - `prev`: Initially set to null. This will eventually point to the last node in the reversed list.
 *    - `cur`: Initially set to the head of the list. This will traverse the list from start to end.
 * 
 * 3. Traverse through the list:
 *    - At each step, store the next node (`cur.next`) in a temporary variable `next` so we don't lose the rest of the list.
 *    - Reverse the pointer of the current node by setting `cur.next` to point to `prev`.
 *    - Move the `prev` pointer to the current node (`cur`), and move the `cur` pointer to the next node (`next`).
 * 
 * 4. After the loop finishes, `prev` will point to the new head of the reversed list, so return `prev`.
 * 
 * Time Complexity: O(n), where n is the number of nodes in the list. We only traverse the list once.
 * Space Complexity: O(1), as we use only a constant amount of extra space for the pointers.
 */

/**
 * @param {ListNode} head - The head node of the linked list.
 * @return {ListNode} - The head node of the reversed linked list.
 */
var reverseList = function (head) {
    // Initialize pointers
    let prev = null; // 'prev' will eventually be the new head of the reversed list
    let cur = head; // 'cur' is the current node we are processing

    // Traverse through the list and reverse the direction of the 'next' pointers
    while (cur != null) {
        // Store the next node temporarily
        let next = cur.next;

        // Reverse the 'next' pointer of the current node
        cur.next = prev;

        // Move the 'prev' pointer to the current node (it becomes the new head of the reversed list)
        prev = cur;

        // Move the 'cur' pointer to the next node (continue the traversal)
        cur = next;
    }

    // After the loop finishes, 'prev' points to the new head of the reversed list
    return prev;
};
