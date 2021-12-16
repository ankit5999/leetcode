// move zeros

function moveZeros(arr){
    // console.log(arr);
    var i = 0;
    var j = i+1;
    while(j<arr.length){
        if(arr[i] == 0){
            if(arr[j] == 0){
                j++;
            }
            else{
            var temp;
            temp = arr[i];
            arr[i++] = arr[j];
            arr[j++] = temp;
            }
        }
        else{
            i++;
            j++;
        }
    }
    return arr;
}

const ans = moveZeros([1,0,0,2,3,0]);
console.log(ans);