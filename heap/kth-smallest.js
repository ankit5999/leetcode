// kth smallest emement using heap

function smallElement(arr,k){
    var maxHeap = [];

    for(let  i = 0; i<=arr.length; i++){
        maxHeap.sort()
        maxHeap.push(arr[i]);
        if(maxHeap.length > k){
            maxHeap.pop()
        }
    }

    return maxHeap[maxHeap.length-1];
}

const ans = smallElement([7,10,4,3,20,15],3)
console.log(ans);