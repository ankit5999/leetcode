// stock span problem
// [100,80,60,70,50,75,85] ==> [1,1,1,2,1,4,6]


function rightGrater(arr){
    var answer = [];
    var stack = [];
    for(let i = 0; i <= arr.length-1; i++){
        if(stack.length === 0){
            answer.push(1)
        }
        else if(stack.length > 0 && stack[stack.length -1] > arr[i]){
            answer.push(i-arr.indexOf(stack[stack.length-1]))
        }
        else if(stack.length > 0 && stack[stack.length -1] <= arr[i]){
            while(stack.length > 0 && stack[stack.length -1] <= arr[i]){
                stack.pop();
            }
            if(stack.length === 0){
                answer.push(1)
            }
            else{
                answer.push(i-arr.indexOf(stack[stack.length-1]))
            }
        }
        stack.push(arr[i])
    }

    return answer
}

const ans = rightGrater([100,80,60,70,50,75,85])
console.log(ans);