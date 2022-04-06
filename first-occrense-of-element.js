// first occurence of element

// [ 2,4,,5,10,10,10,,12,13 ] -> 10; ==> 3


var firstOccurence = function(nums, target){
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

let ans = firstOccurence([2,4,5,10,10,10,12,13,17], 10);
console.log(ans);