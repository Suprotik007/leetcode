/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let newNum = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[newNum]) {
            newNum++;
            nums[newNum] = nums[i];
        }
    }
    return newNum + 1;
};
