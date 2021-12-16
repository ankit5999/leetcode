/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var i = 0;
    var j = i+1;
    while(j<nums.length){
        if(nums[i] == 0){
            if(nums[j] == 0){
                j++;
            }
            else{
            var temp;
            temp = nums[i];
            nums[i++] = nums[j];
            nums[j++] = temp;
            }
        }
        else{
            i++;
            j++;
        }
    }
    return nums;
};