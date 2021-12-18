// nearest right smaller
// [1,3,2,4] ==> [2,2,-1,8,-1]



function rightGrater(arr){
    var answer = [];
    var stack = [];
    for(let i = arr.length-1; i >=0; i--){
        // push -1 if stack empty
        if(stack.length === 0){
            answer.push(-1)
        }
        // if stack top < arr[i]
        else if(stack.length > 0 && stack[stack.length -1] < arr[i]){
            answer.push(stack[stack.length -1])
        }
        // if stack top >= arr[i]
        else if(stack.length > 0 && stack[stack.length -1] >= arr[i]){
            // pop while dont found smaller element in stack or stack become empty
            while(stack.length > 0 && stack[stack.length -1] >= arr[i]){
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

    // return
    return answer.reverse()
}

const ans = rightGrater([4,5,2,10,8])
console.log(ans);