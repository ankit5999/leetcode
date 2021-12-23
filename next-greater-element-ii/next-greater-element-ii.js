/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var answer = [];
    var stack = [];
    for(let i = nums.length-1; i >=0; i--){
        if(stack.length === 0){
            for(let j = 0; j<= i; j++){
                if(nums[j] > nums[i]){
                    answer.push(nums[j])
                    break;
                }
                if(stack.length === 0 && j == i){
                    answer.push(-1)
                }
            }
        }
        else if(stack.length > 0 && stack[stack.length -1] > nums[i]){
            answer.push(stack[stack.length -1])
        }
        else if(stack.length > 0 && stack[stack.length -1] <= nums[i]){
            while(stack.length > 0 && stack[stack.length -1] <= nums[i]){
                stack.pop();
            }
            if(stack.length === 0){
                for(let j = 0; j<= i; j++){
                    if(nums[j] > nums[i]){
                        answer.push(nums[j])
                        break;
                    }
                    if(stack.length === 0 && j == i){
                        answer.push(-1)
                    }
                }
            }
            else{
                answer.push(stack[stack.length -1])
            }
        }
        stack.push(nums[i])
    }
    return answer.reverse()
};