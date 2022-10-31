/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let index = 0;
    let sum = 0;
    let array = [];
    if(nums.length === 0) return array;
    else{
        while (index < nums.length) {
            sum = sum + nums[index];
            array.push(sum);
            index++;
        }
    }
    return array;
};