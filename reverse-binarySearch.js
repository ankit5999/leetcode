// Binary search on reverse array

var reverseBinarySearch = function(nums, target){
    let start = 0;
    let end = nums.length;

    while(start <= end){
        let midd = parseInt(start + (end-start)/2);

        if(target === nums[midd]){
            return midd;
        }

        else if(target < nums[midd]){
            start = midd + 1;
        }

        else{
            end = midd - 1;
        }
    }

    return -1;

}

let ans = reverseBinarySearch([20,17,16,13,11,10,9,6,3,2], 13);
console.log(ans);