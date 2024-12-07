# LeetCode 75 - LinkedList Section

## Problems Solved:

### 1. **Delete the Middle Node of a Linked List (LeetCode #2095)**
   - **Description**: You are given the head of a linked list. The task is to delete the middle node of the linked list and return the head of the modified list. If there are two middle nodes, delete the second one.
   - **Link to Problem**: [Delete the Middle Node of a Linked List](https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75)
   - **Approach**: 
     - Use the **fast-slow pointer** technique to find the middle node of the linked list. 
     - The fast pointer moves twice as fast as the slow pointer, so when the fast pointer reaches the end, the slow pointer will be at the middle node.
     - Use the slow pointer to delete the middle node by adjusting the `next` pointer of the previous node.

---

### 2. **Odd Even Linked List (LeetCode #328)**
   - **Description**: You are given a singly linked list, where the nodes are to be grouped into odd-indexed and even-indexed nodes. The task is to reorder the list such that all odd-indexed nodes are listed first, followed by the even-indexed nodes, while preserving their relative order.
   - **Link to Problem**: [Odd Even Linked List](https://leetcode.com/problems/odd-even-linked-list/?envType=study-plan-v2&envId=leetcode-75)
   - **Approach**:
     - Use two pointers, `odd` and `even`, to separate the odd and even nodes.
     - Traverse the list and move the `odd` pointer to the next odd node and the `even` pointer to the next even node.
     - After finishing the traversal, connect the last odd node to the first even node.
     - Return the head of the modified list.

---

### 3. **Reverse Linked List (LeetCode #206)**
   - **Description**: You are given the head of a singly linked list, and your task is to reverse the list and return its new head.
   - **Link to Problem**: [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/?envType=study-plan-v2&envId=leetcode-75)
   - **Approach**:
     - Use an iterative approach to reverse the linked list by adjusting the `next` pointers of the nodes.
     - Maintain two pointers, `prev` and `cur`, where `prev` will point to the previous node and `cur` will point to the current node.
     - For each node, change its `next` pointer to the previous node, and move the pointers one step forward.
     - Continue until you reach the end of the list.

---

### 4. **Maximum Twin Sum of a Linked List (LeetCode #2130)**
   - **Description**: You are given the head of a linked list where each node has a value. Your task is to find the maximum twin sum of the linked list. A twin sum is the sum of two nodes that are symmetric with respect to the center of the list.
   - **Link to Problem**: [Maximum Twin Sum of a Linked List](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/?envType=study-plan-v2&envId=leetcode-75)
   - **Approach**:
     - Use the **fast-slow pointer** technique to find the middle of the list and split it into two halves.
     - Reverse the second half of the list.
     - Traverse both halves simultaneously and calculate the twin sums, keeping track of the maximum sum encountered.
     - Return the maximum twin sum.

---
