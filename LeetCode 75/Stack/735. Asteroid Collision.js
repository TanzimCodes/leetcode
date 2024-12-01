/**
 * 735. Asteroid Collision
 *
 * Problem Statement:
 * You are given an array `asteroids` where each element represents an asteroid.
 * Positive integers represent asteroids moving to the right, and negative integers 
 * represent asteroids moving to the left. When a right-moving asteroid and a left-moving 
 * asteroid collide, the larger one survives, and the smaller one is destroyed. If both 
 * asteroids are of the same size, both are destroyed.
 * 
 * The task is to return the final state of the asteroids after all collisions.
 * 
 * Approach:
 * This problem is best solved using a **stack** data structure, as we need to simulate 
 * the interactions between right-moving and left-moving asteroids, while maintaining the 
 * correct order of elements.
 * 
 * 1. **Iterate through each asteroid** in the given `asteroids` array:
 *    - **Right-moving asteroid (positive)**: If an asteroid is moving to the right, 
 *      we simply push it onto the stack because it cannot collide with any other right-moving asteroid.
 *    - **Left-moving asteroid (negative)**: If the asteroid is moving to the left, 
 *      we need to check for possible collisions with the top of the stack (right-moving asteroids):
 *        - While the stack is not empty and the top of the stack is a right-moving asteroid 
 *          that is smaller than the left-moving asteroid, we "consume" the right-moving asteroid 
 *          by popping it from the stack.
 *        - After the potential collisions, the left-moving asteroid will either:
 *          - Stay in the system if no collision happens (i.e., the stack is empty or the top 
 *            of the stack is a left-moving asteroid).
 *          - Be destroyed if it is smaller than the right-moving asteroid at the top of the stack.
 *          - If the left-moving asteroid is the same size as the top-right asteroid, both are destroyed.
 * 
 * 2. **Final Result**: After processing all asteroids, the stack will contain the surviving asteroids.
 *    We then return the stack as the final result.
 * 
 * Time Complexity:
 * - O(n), where `n` is the number of asteroids in the input array. Each asteroid is processed once, 
 *   and stack operations (`push` and `pop`) are O(1).
 * 
 * Space Complexity:
 * - O(n), where `n` is the number of asteroids, as in the worst case, all asteroids may remain in the stack.
 * 
 * @param {number[]} asteroids - An array of integers representing the asteroids.
 * @return {number[]} - The final state of the asteroids after all collisions.
 */
var asteroidCollision = function (ast) {
    const ret = [];  // Stack to store surviving asteroids.

    for (let i = 0; i < ast.length; i++) {
        if (ast[i] > 0) {
            // Push right-moving asteroids onto the stack.
            ret.push(ast[i]);
        } else {
            // Handle left-moving asteroid (collision check).
            // This is where the magic happens.
            while (ret.length > 0 && ret.at(-1) > 0 && ret.at(-1) < Math.abs(ast[i])) {
                // Consume smaller asteroids moving to the right.
                ret.pop();
            }

            // After the possible collisions, check if the current asteroid survives.
            // Either it survives (no more right-moving asteroids to collide with) or
            // it is destroyed by the larger asteroid at the top of the stack.
            if (ret.length === 0 || ret.at(-1) < 0) {
                ret.push(ast[i]);  // Current asteroid survives (either no collision or another left-moving asteroid).
            } else {
                // Check if the asteroid was destroyed in the collision.
                // If it's the same size as the last right-moving asteroid, both are destroyed.
                if (ret.at(-1) === Math.abs(ast[i])) {
                    ret.pop();  // Both asteroids (current and top of stack) are destroyed.
                }
            }
        }
    }

    // Return the final state of the asteroids in the stack.
    return ret;
};
