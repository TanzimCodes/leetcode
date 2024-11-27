# Kadane's Algorithm Solutions
This folder contains solutions to LeetCode problems that can be solved using **Kadane's Algorithm**.

# Brief Summary about Kadene's algo
Kadane’s Algorithm is an efficient method for solving the maximum subarray sum problem. It works by iterating through the array while maintaining two variables:

current_sum: The maximum sum of the subarray that ends at the current index.
max_sum: The maximum sum found so far.
At each step, current_sum is updated by taking the maximum of the current element or the sum of the current element and the previous current_sum. The max_sum is updated if current_sum exceeds it.

## Problems Solved:

1. **Maximum Subarray (LeetCode #53)**
   - **Description**: Find the contiguous subarray within a one-dimensional numeric array which has the largest sum.
   - **Link to Problem**: [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)


