// // Max Area Rectangle in binary matrix

// SOlution using array storing key and value


// Max Area Rectangle in binary matrix


function MAH(arr){
    var leftsudo = -1;
    var rightsudo = 4;
    var left = [];
    var right = [];
    var stack = [];
    var width = [];
    var area = [];
    var maxarea = 0;
   
    for(let i = 0; i <=arr.length-1; i++){
        if(stack.length === 0){
            left.push(leftsudo)
        }
        else if(stack.length > 0 && stack[stack.length-1][1] < arr[i]){
            left.push(stack[stack.length-1][0])
        }
        else if(stack.length > 0 && stack[stack.length-1][1] >= arr[i]){
            while(stack.length > 0 && stack[stack.length-1][1] >= arr[i]){
                stack.pop()
            }
            if(stack.length === 0){
                left.push(leftsudo)
            }
            else{
                left.push(stack[stack.length-1][0])
            }
        }
            stack.push([i, arr[i]])
    }

    
    stack = [];

    for(let i = arr.length-1; i >=0; i--){
        if(stack.length === 0){
            right.push(rightsudo)
        }
        else if(stack.length > 0 && stack[stack.length-1][1] < arr[i]){
            right.push(stack[stack.length-1][0])
        }
        else if(stack.length > 0 && stack[stack.length-1][1] >= arr[i]){
            while(stack.length > 0 && stack[stack.length-1][1] >= arr[i]){
                stack.pop()
            }
            if(stack.length === 0){
                right.push(rightsudo)
            }
            else{
                right.push(stack[stack.length-1][0])
            }
        }
            stack.push([i, arr[i]])
    }


    stack = [];
    right.reverse();

    for(let i = 0; i<arr.length; i++){
        width.push(right[i] - left[i] -1);
        area.push(arr[i]*width[i]);

        if(maxarea <= area[i]){
            maxarea = area[i]
        }
    }

    return maxarea; 
}



function matrixArea(matrix,n,m){
    var array = [];
    var maximumarea = 0;

    for(let j=0; j<m; j++){
        array.push(matrix[0][j])
    }

    var max = MAH(array);
    maximumarea = max;

    
    for(let i =1; i<n; i++){
        for(let j =0; j<m; j++){
            if(matrix[i][j] === 0){
                array.splice(j,1,0)
            }
            else{
                array.splice(j,1,array[j]+matrix[i][j])
            }
        }
        max = MAH(array)
        if(max>maximumarea){
            maximumarea = max;
        }
    }

    return maximumarea
}


const ans = matrixArea([[0,1,1,0],[1,1,1,1],[1,1,1,1],[1,1,0,0]],4,4)
console.log(ans);

// output 8











/// Solution using object // problem is in object order is not garunted so we used array 


// function MAH(arr){
//     var leftsudo = -1;
//     var rightsudo = 4;
//     var left = [];
//     var right = [];
//     var stack = {};
//     var width = [];
//     var area = [];
//     var maxarea = 0;
//     for(let i = 0; i <=arr.length-1; i++){
//         if(Object.keys(stack).length === 0){
//             left.push(leftsudo)
//         }
//         else if(Object.keys(stack).length > 0 && stack[Object.keys(stack)[Object.keys(stack).length-1]] < arr[i]){
//             left.push(parseInt(Object.keys(stack)[Object.keys(stack).length-1]))
//         }
//         else if(Object.keys(stack).length > 0 && stack[Object.keys(stack)[Object.keys(stack).length-1]] >= arr[i]){
//             while(Object.keys(stack).length > 0 && stack[Object.keys(stack)[Object.keys(stack).length-1]] >= arr[i]){
//                 delete stack[Object.keys(stack)[Object.keys(stack).length-1]]
//             }
//             if(Object.keys(stack).length === 0){
//                 left.push(leftsudo)
//             }
//             else{
//                 left.push(parseInt(Object.keys(stack)[Object.keys(stack).length-1]))
//             }
//         }
//         stack[i] = arr[i]
//     }
    
//     stack = {};

//     for(let i = arr.length-1; i >=0; i--){
//         if(Object.keys(stack).length === 0){
//             right.push(rightsudo)
//         }
//         else if(Object.keys(stack).length > 0 && stack[Object.keys(stack)[Object.keys(stack).length-1]] < arr[i]){
//             right.push(parseInt(Object.keys(stack)[Object.keys(stack).length-1]))
//         }
//         else if(Object.keys(stack).length > 0 && stack[Object.keys(stack)[Object.keys(stack).length-1]] >= arr[i]){
//             while(Object.keys(stack).length > 0 && stack[Object.keys(stack)[Object.keys(stack).length-1]] >= arr[i]){
//                 delete stack[Object.keys(stack)[Object.keys(stack).length-1]]
//             }
//             if(Object.keys(stack).length === 0){
//                 right.push(rightsudo)
//             }
//             else{
//                 right.push(parseInt(Object.keys(stack)[Object.keys(stack).length-1]))
//             }
//         }
//         stack[i] = arr[i]
//     }


//     stack = {};
//     right.reverse();

//     for(let i = 0; i<arr.length; i++){
//         width.push(right[i] - left[i] -1);
//         area.push(arr[i]*width[i]);

//         if(maxarea <= area[i]){
//             maxarea = area[i]
//         }
//     }

//     return maxarea; 
// }



// function matrixArea(matrix,n,m){
//     var array = [];
//     var maximumarea = 0;

//     for(let j=0; j<m; j++){
//         array.push(matrix[0][j])
//     }

//     var max = MAH(array);
//     maximumarea = max;

    
//     for(let i =1; i<n; i++){
//         for(let j =0; j<m; j++){
//             if(matrix[i][j] === 0){
//                 array.splice(j,1,0)
//             }
//             else{
//                 array.splice(j,1,array[j]+matrix[i][j])
//             }
//         }
//         max = MAH(array)
//         if(max>maximumarea){
//             maximumarea = max;
//         }
//     }

//     return maximumarea
// }


// const ans = matrixArea([[0,1,1,0],[1,1,1,1],[1,1,1,1],[1,1,0,0]],4,4)
// console.log(ans);

// // output 8
