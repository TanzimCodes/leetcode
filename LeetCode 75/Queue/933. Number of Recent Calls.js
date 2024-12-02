/**
 * Approach:
 * 
 * This problem is essentially a sliding window problem where we need to maintain a window of the most recent pings
 * that occurred within the last 3000 milliseconds (3 seconds).
 * 
 * The idea is to use a queue (array) to store the timestamps of the pings. For each new ping:
 * 
 * 1. Add the current timestamp to the queue.
 * 2. Remove any timestamps from the front of the queue that are older than `current_time - 3000` milliseconds.
 *    - This is done using a `while` loop, checking if the first element of the queue is less than the valid range.
 * 3. The remaining number of pings within the last 3000 milliseconds is simply the size of the queue.
 * 
 * Time Complexity:
 * - The time complexity for each `ping()` call is O(n) in the worst case, where `n` is the number of pings within the 
 *   last 3000 milliseconds. This is because we may have to remove multiple timestamps from the front of the queue 
 *   if they are too old. However, this time complexity can be considered efficient in practice, as elements are added 
 *   and removed sequentially.
 * 
 * Space Complexity:
 * - O(k), where `k` is the number of pings that occur within the last 3000 milliseconds. The space complexity is 
 *   dependent on the size of the queue.
 * 
 * This approach is efficient enough for typical input sizes, as we only store the timestamps that are relevant to the 
 * current window of time.
 */

var RecentCounter = function () {
    this.arr = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    // Add the current ping's timestamp to the array (queue).
    this.arr.push(t);

    // Calculate the earliest valid timestamp (i.e., the time that is 3000ms before the current ping).
    const range = t - 3000;

    // Remove pings that are outside the 3000ms window by checking if the first element is less than the valid range.
    while (this.arr[0] < range) {
        this.arr.shift();  // Remove the first element if it's too old.
    }

    // Return the number of pings that are within the 3000ms window (the size of the array).
    return this.arr.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */