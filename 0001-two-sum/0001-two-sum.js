/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashtable = {}
    for (let i = 0; i < nums.length; i++) {
        let targetValue = target - nums[i];
        if (targetValue in hashtable) {
            return [hashtable[targetValue], i]
        }
        else {
            hashtable[nums[i]] = i;
        }
    }

    return [];
};