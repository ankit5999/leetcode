// nearest right greater and nerest largest element
// [1,3,2,4]


// steps: ==> 
// 1. check stack is empty  or not
// 2. check stack has element and that is greater than arr[i] element >> then push that element into answer array
// 3. check if stack top is less than arr[i] then pop till stack become empty or till we dont found greater element in stack


function rightGrater(arr){
    var answer = [];
    var stack = [];
    for(let i = arr.length-1; i >=0; i--){
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
    return answer.reverse()
}

const ans = rightGrater([1,3,2,4])
console.log(ans);


// output:: [3,4,4,-1]