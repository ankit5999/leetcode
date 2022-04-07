/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var myobject = {};
    var number = 0;

    for(let i=0; i<=nums.length-1; i++){
            myobject[nums[i]] = myobject[nums[i]] === undefined ? myobject[nums[i]] = 1 : myobject[nums[i]] + 1;
            myobject[number] > myobject[nums[i]] ? null : number = nums[i]
    }

    return number;
};