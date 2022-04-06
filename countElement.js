// Count element in sorted array
// [2,4,10,10,10,18,20] ==> 3


var firstElement = function(nums, target){
    let start = 0;
    let end = nums.length-1; 
    let response = -1;

    while(start <= end){
        let midd = parseInt(start + (end - start)/2);

        if(target === nums[midd]){
            response = midd;
            end = midd -1;
        }

        else if(target < nums[midd]){
            end = midd -1;
        }

        else{
            start = midd +1;
        }
    }

    return response;
}



var lastElement = function(nums, target){
    let start = 0;
    let end = nums.length-1; 
    let response = -1;

    while(start <= end){
        let midd = parseInt(start + (end - start)/2);

        if(target === nums[midd]){
            response = midd;
            start = midd +1;
        }

        else if(target < nums[midd]){
            end = midd -1;
        }

        else{
            start = midd +1;
        }
    }

    return response;
}



var countElement = function(nums, target){

    let firstIndex = firstElement(nums, target);
    let lastIndex = lastElement(nums, target);
    let count = lastIndex - firstIndex +1;

    return count;
}

let ans = countElement([2,4,10,10,10,18,20], 10);
console.log(ans);