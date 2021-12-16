// merge sorted array

// arr1 = [1,3,5,7,8,9];
// arr2 = [2,4,6];
// arr3 = [1,2,3,4,5,6,7,8,9];


function mergarray(arr1,arr2){
    var i = 0;
    var j = 0;
    var arr3 = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i]<arr2[j]){
            arr3.push(arr1[i]);
            i++;
        }
        else{
            arr3.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        arr3.push(arr1[i])
        i++;
    }
    while(j<arr2.length){
        arr3.push(arr2[j])
        j++;
    }
    return arr3;
}

const ans = mergarray([1,3,5,7,8,9], [2,4,6]);
console.log(ans); 