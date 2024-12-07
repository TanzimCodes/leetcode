/**
 * Approach:
 * 
 * The goal is to rearrange the nodes of a given singly linked list such that all the odd-indexed nodes
 * come before all the even-indexed nodes. The relative order of the odd and even nodes should be preserved.
 * 
 * For example, for a list 1 -> 2 -> 3 -> 4 -> 5, the output should be 1 -> 3 -> 5 -> 2 -> 4.
 * 
 * 1. Edge Case: If the list is empty (head is null) or contains only one node, no rearrangement is needed.
 * 
 * 2. Initialize three pointers:
 *    - `odd`: Initially points to the head of the list (index 0, odd position).
 *    - `even`: Initially points to the second node of the list (index 1, even position).
 *    - `evenStart`: This pointer stores the start of the even-indexed list, so we can attach it to the end
 *      of the odd-indexed list after processing.
 * 
 * 3. Traverse the list while there are both odd and even nodes:
 *    - Skip one even node after the current odd node by setting `odd.next = odd.next.next`.
 *    - Skip one odd node after the current even node by setting `even.next = even.next.next`.
 *    - Move the `odd` and `even` pointers forward to the next odd and even nodes respectively.
 * 
 * 4. After the loop ends, attach the `evenStart` (head of the even list) to the end of the odd list.
 * 
 * 5. Return the head of the modified linked list, which now has all the odd-indexed nodes followed by the
 *    even-indexed nodes.
 * 
 * Time Complexity: O(n), where n is the number of nodes in the list. We traverse the list once.
 * Space Complexity: O(1), as we use only a constant amount of extra space for the pointers.
 */

/**
 * @param {ListNode} head - The head node of the linked list.
 * @return {ListNode} - The head node of the modified linked list.
 */
var oddEvenList = function (head) {
    // Edge case: If the list is empty or has only one node, no rearrangement is needed.
    if (!head || head.next == null) {
        return head;
    }

    // Initialize pointers for odd and even positions
    let odd = head; // 'odd' starts at the first node (index 0)
    let even = head.next; // 'even' starts at the second node (index 1)
    let evenStart = even; // This will store the starting node of the even list to attach at the end of odd list.

    // Traverse the list and rearrange nodes: odd nodes should point to odd nodes, and even nodes to even nodes.
    while (odd.next && even.next) {
        // Move the 'odd' pointer to the next odd node (skip one even node)
        odd.next = odd.next.next;

        // Move the 'even' pointer to the next even node (skip one odd node)
        even.next = even.next.next;

        // Move the pointers forward
        odd = odd.next; // Move to the next odd node
        even = even.next; // Move to the next even node
    }

    // After the loop ends, link the last odd node to the head of the even list.
    odd.next = evenStart;

    // Return the head node of the modified linked list.
    return head;
};
