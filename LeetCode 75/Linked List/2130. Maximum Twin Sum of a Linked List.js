    /**
 * Approach:
 * 
 * The problem asks to find the maximum pair sum in a singly linked list, 
 * where a pair is formed by one element from the beginning and one from the end.
 * The main steps of the approach are as follows:
 * 
 * 1. **Finding the middle of the list**:
 *    - Use the fast-slow pointer technique to identify the middle of the linked list. 
 *    - The `fast` pointer moves two steps at a time, while the `slow` pointer moves one step at a time.
 *    - When the `fast` pointer reaches the end, the `slow` pointer will be at the middle of the list.
 * 
 * 2. **Split the list into two halves**:
 *    - Once the middle node is found, disconnect the first half of the list from the second by setting the `next` pointer of the node before the middle (`prev`) to `null`.
 * 
 * 3. **Reverse the second half**:
 *    - After splitting the list, reverse the second half starting from the `slow` pointer. This will allow us to easily pair the nodes from the beginning and the end.
 *    - Reverse the second half in-place by adjusting the `next` pointers of the nodes.
 * 
 * 4. **Calculate the maximum pair sum**:
 *    - Iterate over both halves of the list, pairing the nodes from the first half (`head`) and the reversed second half. 
 *    - Keep track of the maximum sum encountered while traversing both halves simultaneously.
 * 
 * 5. **Return the result**:
 *    - The maximum pair sum is stored in `maxSum` and is returned after the traversal.
 * 
 * Time Complexity: O(n), where n is the number of nodes in the linked list. 
 * We traverse the list twice, once to find the middle and once to calculate the pair sums.
 * 
 * Space Complexity: O(1), as the solution uses constant space, only modifying the pointers and not requiring extra space for additional data structures.
 */

/**
 * @param {ListNode} head - The head node of the linked list.
 * @return {number} - The maximum pair sum of the linked list.
 */
var pairSum = function (head) {
    // Step 1: Use fast-slow pointer technique to find the middle of the list
    let fast = head, slow = head, prev = null;

    // Traverse until fast pointer reaches the end
    while (fast && fast.next != null) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }

    // Step 2: Split the list into two halves
    prev.next = null; // Disconnect the first half from the second half

    // Step 3: Reverse the second half of the list
    let cur = slow;
    prev = null;

    while (cur != null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    // Now 'prev' points to the head of the reversed second half
    slow = prev;

    // Step 4: Calculate the maximum pair sum
    let temp = head;
    let maxSum = 0;
    let temp2 = slow;

    while (temp != null) {
        // Update maxSum with the sum of the corresponding nodes
        maxSum = Math.max(maxSum, temp.val + temp2.val);
        temp = temp.next;
        temp2 = temp2.next;
    }

    // Step 5: Return the maximum pair sum
    return maxSum;
};
