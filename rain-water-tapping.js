// rain water tapping problem
// example [3,0,0,2,0,4] ==> 10
// example [0,1,0,2,1,0,1,3,2,1,2,1] ==> 6

function rainWater(arr){
    var maxl = [arr[0]];
    var maxr = [];
    // assigning length to arr so that we can fix last element
    maxr.length = arr.length-1
    var water = [];
    var sum = 0;

    for(let i = 1; i<arr.length; i++){
        maxl[i] = Math.max(maxl[i-1], arr[i])
    }

    // fixing last variable
    maxr.splice(arr.length,1,arr[arr.length-1])
    for(let i = arr.length-2; i>=0; i--){
        maxr[i] = Math.max(maxr[i+1], arr[i])
    }

    for(let i = 0; i<arr.length; i++){
        water[i] = Math.min(maxl[i],maxr[i])-arr[i];
    }

    for(let i = 0; i<arr.length; i++){
        sum = sum + water[i]
    }

    return sum;
}

const ans = rainWater([0,1,0,2,1,0,1,3,2,1,2,1])
console.log(ans);