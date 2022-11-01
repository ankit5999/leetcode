/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    let pivote = 0;
    let index = pivote + 1;

    while (pivote < nums.length) {
        if(pivote === 0) {
            while ( index < nums.length){
                rightSum = rightSum + nums[index];
                index++;
            }
            if(leftSum === rightSum) return pivote;
            else pivote++;
        }
        else {
            leftSum = leftSum + nums[pivote - 1];
            rightSum = rightSum - nums[pivote];
            if (leftSum === rightSum) return pivote;
            else pivote++;
        }
    }

    return -1;
};