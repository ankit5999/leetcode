// reverse an array in js

// [1,2,3,4] ==> [4,3,2,1]



/////=====>> Method 1 <<=====/////

// function myarray(array){
//     var reverarray = []
//     for(let i=array.length; i>0; i--){
//         reverarray.push(i)
//     }
//     return reverarray;
// }

// const ans = myarray([1,2,3,4])
// console.log(ans);



/////=====>> Method 2 <<=====/////

function myarray(array){
    var start = 0;
    var end = array.length-1;

    while(start < end){
        var temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start +=1;
        end -=1;
    }
    return array;
}

const ans = myarray([1,2,3,4]);
console.log(ans);