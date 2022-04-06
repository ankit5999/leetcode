// last occurence of element

// [ 17,13,12,10,10,10,5,4,2 ] -> 10; ==> 5


var lastOccurence = function(nums, target){
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
            start = midd +1;
        }

        else{
            end = midd -1;
        }
    }

    return response;
}

let ans = lastOccurence([17,13,12,10,10,10,5,4,2], 10);
console.log(ans);