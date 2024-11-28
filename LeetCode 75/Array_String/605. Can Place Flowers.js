/**
 * Approach:
 * 1. Traverse the flowerbed array to check each spot.
 * 2. For each spot, check if it's empty (0) and if its adjacent spots are either empty or out of bounds.
 * 3. If the current spot is valid for planting (i.e., no adjacent flowers), plant a flower by setting it to 1.
 * 4. Increment the `flowersPlanted` counter each time a flower is placed.
 * 5. If at any point `flowersPlanted` becomes greater than or equal to `n`, return true early to avoid unnecessary iterations.
 * 6. After the loop, if `flowersPlanted` is still less than `n`, return false.
 */

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    const len = flowerbed.length;
    let flowersPlanted = 0;

    for (let i = 0; i < len; i++) {
        // Check if the current spot is empty and its adjacent spots are also empty or out of bounds
        if (flowerbed[i] === 0
            && (i === 0 || flowerbed[i - 1] === 0)
            && (i === len - 1 || flowerbed[i + 1] === 0)) {
            // Plant a flower in this spot
            flowerbed[i] = 1;
            flowersPlanted++;  // Only increment when a flower is actually placed
        }
        
        // If we've already placed enough flowers, return true
        if (flowersPlanted >= n) {
            return true;
        }
    }

    // If we exit the loop and haven't placed enough flowers, return false
    return flowersPlanted >= n;
};
