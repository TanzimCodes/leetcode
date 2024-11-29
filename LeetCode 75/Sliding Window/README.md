# LeetCode 75 - Sliding Window Problems

## Problems Solved:

### 1. **Maximum Average Subarray I (LeetCode #643)**
   - **Description**: Given an integer array `nums` and an integer `k`, find the contiguous subarray of length `k` that has the maximum average value and return this value. 
   - **Link to Problem**: [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

---

### 2. **Maximum Number of Vowels in a Substring of Given Length (LeetCode #1456)**
   - **Description**: Given a string `s` and an integer `k`, find the maximum number of vowels in any substring of length `k`. 
   - **Link to Problem**: [Maximum Number of Vowels in a Substring of Given Length](https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/)

---

### 3. **Max Consecutive Ones III (LeetCode #1004)**
   - **Description**: Given a binary array `nums` and an integer `k`, find the maximum number of consecutive 1's in the array if you can flip at most `k` 0's to 1's.
   - **Link to Problem**: [Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/)

---

### 4. **Longest Subarray of 1's After Deleting One Element (LeetCode #1493)**
   - **Description**: Given a binary array `nums`, you can delete at most one element. Find the length of the longest subarray containing only 1's after the deletion. 
   - **Link to Problem**: [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/)
   
---

## Approach Used: Sliding Window

For all of the above problems, the **Sliding Window** technique has been utilized to solve the problems efficiently. The sliding window technique involves maintaining a window of elements in the array, adjusting the window size based on the conditions given in the problem, and calculating the result dynamically. This approach is ideal for problems that require finding contiguous subarrays or sequences.

## Key Concepts:
- **Two Pointers**: We use two pointers, `L` and `R` (left and right), to define the window.
- **Window Adjustments**: We adjust the size of the window dynamically based on certain conditions (e.g., maintaining at most `k` zeros, ensuring the subarray has a fixed length).
- **Optimization**: The sliding window approach is optimal in these cases because it helps us solve the problems in linear time complexity `O(n)` rather than checking every possible subarray explicitly, which would take quadratic time `O(n^2)`.

---

## Conclusion:

These problems represent classic examples of how the sliding window technique can be applied to efficiently solve array and string manipulation problems. By maintaining a dynamic window of elements, we can derive solutions that avoid unnecessary recomputation and reduce time complexity significantly.

