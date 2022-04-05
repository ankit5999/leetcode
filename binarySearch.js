// Binary Search

var binarySearch = function(nums, target){
    let start = 0;
    let end = nums.length-1;

    while(start <= end){
        
        let midd = parseInt(start + (end-start)/2); // this will stop overflow of int
        // let midd = parseInt((end-start)/2);

        if(target === nums[midd]){
            return midd;
        }

        else if(target < nums[midd]){
            end = midd-1;
        }

        else{
            start = midd+1;
        }
    }

    return -1;
}

let ans = binarySearch([1,2,3,4,5,6,7,8,9], 9);
console.log(ans);
