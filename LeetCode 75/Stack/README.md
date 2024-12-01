# LeetCode 75 - Stack Section

## Problems Solved:

### 1. **Removing Stars From a String (LeetCode #2390)**
   - **Description**: You are given a string `s`, which contains lowercase letters and stars (`*`). The `*` character is used to delete the previous character. You need to return the string after all stars have been removed.
   - **Link to Problem**: [Removing Stars From a String](https://leetcode.com/problems/removing-stars-from-a-string/?envType=study-plan-v2&envId=leetcode-75)
   - **Approach**: 
     - We can solve this problem using a **stack** to simulate the removal process. We iterate through the string:
       - If the character is a letter, we push it onto the stack.
       - If the character is a star (`*`), we pop the top element from the stack, effectively removing the last added character.
     - The final string is the concatenation of all remaining characters in the stack.

---

### 2. **Asteroid Collision (LeetCode #735)**
   - **Description**: We are given an array `asteroids` representing asteroids moving in a straight line. Positive integers represent asteroids moving to the right, and negative integers represent asteroids moving to the left. When a right-moving asteroid collides with a left-moving asteroid, the larger one survives, and the smaller one is destroyed. If both are the same size, both are destroyed.
   - **Link to Problem**: [Asteroid Collision](https://leetcode.com/problems/asteroid-collision/?envType=study-plan-v2&envId=leetcode-75)
   - **Approach**:
     - This problem can be solved using a **stack** to simulate asteroid collisions.
     - We iterate through the asteroid array:
       - If the asteroid is moving to the right, it is simply added to the stack.
       - If it is moving to the left, we check if there is any right-moving asteroid in the stack that it could collide with. The smaller asteroid (or both if they are equal) is removed from the stack.
     - The final state of the asteroids is the content of the stack.

---

### 3. **Decode String (LeetCode #394)**
   - **Description**: You are given an encoded string in the form of `k[encoded_string]`. The encoded_string inside the square brackets is being repeated exactly `k` times. Your task is to return the decoded string.
   - **Link to Problem**: [Decode String](https://leetcode.com/problems/decode-string/?envType=study-plan-v2&envId=leetcode-75)
   - **Approach**:
     - We can solve this problem using a **stack**:
       - Iterate through the characters in the string.
       - When encountering a digit, we accumulate it to form the multiplier `k`.
       - When encountering a `[` or `]`, we push/pop the necessary characters onto/from the stack.
       - For each `]`, we extract the substring inside the brackets and repeat it according to the multiplier, then push the result back onto the stack.
     - The decoded string is the result of joining the stack after processing all characters.

---

### Summary of Approach for the Stack Section:
- **Stack-based Approach**: All three problems leverage the stack data structure to manage and track elements in a way that simulates the operations and interactions required by each problem.
- **Why Stack?**: The stack is particularly useful in problems involving nested structures (like brackets or collisions) or managing elements in a "last in, first out" (LIFO) manner. It allows for efficient processing and handling of the required operations in O(n) time complexity for each of these problems.
- **Time Complexity**: For each problem, the time complexity is **O(n)** where `n` is the length of the input string or array, since we iterate over each element only once and perform constant time stack operations (push and pop).
- **Space Complexity**: The space complexity is **O(n)** where `n` is the size of the input, as the stack may store all elements in the worst case.

---

### Conclusion:
The stack data structure is perfect for problems that require processing elements in a nested, sequential, or reversible order, as shown by the solutions to these three problems. Each problem demonstrates how a stack can simplify the solution to seemingly complex problems, providing both clarity and efficiency.
