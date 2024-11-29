/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    let leftSum = 0;
    let total = nums.reduce((acc, item) => acc + item)

    for (let i = 0; i < nums.length; i++) {
        let rightSum = total - leftSum - nums[i]
        if (leftSum === rightSum)
            return i

        leftSum += nums[i]
    }
    return -1
};