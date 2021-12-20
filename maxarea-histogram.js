// Maximum Area Histogram

function leftsmaller(arr){
    var leftsudo = -1;
    var rightsudo = 7;
    var left = [];
    var right = [];
    var stack = [];
    var width = [];
    var area = [];
    var maxarea = 0;
    for(let i = 0; i <= arr.length-1; i++){
        if(stack.length === 0){
            left.push(leftsudo)
        }
        else if(stack.length > 0 && stack[stack.length -1] < arr[i]){
            left.push(arr.indexOf(stack[stack.length-1]))
        }
        else if(stack.length > 0 && stack[stack.length -1] >= arr[i]){
            while(stack.length > 0 && stack[stack.length -1] >= arr[i]){
                stack.pop();
            }
            if(stack.length === 0){
                left.push(leftsudo)
            }
            else{
                left.push(arr.indexOf(stack[stack.length-1]))
            }
        }
        stack.push(arr[i])
    }
    
    stack = [];

    for(let i = arr.length-1; i >= 0; i--){
        if(stack.length === 0){
            right.push(rightsudo)
        }
        else if(stack.length > 0 && stack[stack.length -1] < arr[i]){
            right.push(arr.indexOf(stack[stack.length-1]))
        }
        else if(stack.length > 0 && stack[stack.length -1] >= arr[i]){
            while(stack.length > 0 && stack[stack.length -1] >= arr[i]){
                stack.pop();
            }
            if(stack.length === 0){
                right.push(rightsudo)
            }
            else{
                right.push(arr.indexOf(stack[stack.length-1]))
            }
        }
        stack.push(arr[i])
    }

    stack = [];
    right.reverse();

    for(let i = 0; i<arr.length; i++){
        width.push(right[i] - left[i] -1);
        area.push(arr[i]*width[i]);

        if(maxarea < area[i]){
            maxarea = area[i]
        }
    }

    return maxarea; 
}

const ans = leftsmaller([6,2,5,4,5,1,6])
console.log(ans);


// output 12