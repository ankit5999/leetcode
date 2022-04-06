// Non order Search
// Order agnostic Search


let assendingSort = function(nums,target){
    let start = 0;
    let end = nums.length-1;

    while(start <= end){
        let midd = parseInt(start + (end - start)/2);
        if(target === nums[midd]){
            return midd;
        }

        else if(target < nums[midd]){
            end = midd - 1;
        }

        else{
            start = midd + 1;
        }
    }
    return -1;
}


let desendingSearch = function(nums, target){
    let start = 0;
    let end = nums.length-1;

    while(start <= end){
        let midd = parseInt(start + (end - start)/2);

        if(target === nums[midd]){
            return midd;
        }

        else if(target < nums[midd]){
            start = midd + 1;
        }
        else{
            end = midd -1;
        }
    }

    return -1;
}

var nonOrderSearch = function(nums, target){
    let response;

    if(nums.length === 1){
        response = (nums[0] === target) ? 0 : -1;
        return response;
    }

    else if(nums[0]< nums[1]){
        response =  assendingSort(nums, target);
        return response;
    }

    else if(nums[0] > nums[1]){
        response = desendingSearch(nums,target);
        return response;
    }

    else {
        return -1;
    }
}


let ans = nonOrderSearch([1,2,3,4,5,6,7,8,9],9);
console.log(ans);




// Testcases:

// 1. [3] -> 4; ==> -1
// 2. [4] -> 4; ==> 0
// 3. [20,17,16,13,11,10,9,6,3,2] -> 2; ==> 9
// 4. [1,2,3,4,5,6,7,8,9] -> 9; ==> 8