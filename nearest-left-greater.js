// nearest left greater
// [1,3,2,4] ==> [-1,-1,3,-1]



function rightGrater(arr){
    var answer = [];
    var stack = [];
    for(let i = 0; i <= arr.length-1; i++){
        // push -1 if stack empty
        if(stack.length === 0){
            answer.push(-1)
        }
        // if stack top > arr[i]
        else if(stack.length > 0 && stack[stack.length -1] > arr[i]){
            answer.push(stack[stack.length -1])
        }
        // if stack top <= arr[i]
        else if(stack.length > 0 && stack[stack.length -1] <= arr[i]){
            // pop while dont found grater element in stack or stack become empty
            while(stack.length > 0 && stack[stack.length -1] <= arr[i]){
                stack.pop();
            }
            // push -1 if stack become empty
            if(stack.length === 0){
                answer.push(-1)
            }
            // push top of stack
            else{
                answer.push(stack[stack.length -1])
            }
        }
        // push element in stack
        stack.push(arr[i])
    }

    // reverse the output and return
    return answer
}

const ans = rightGrater([1,3,2,4])
console.log(ans);