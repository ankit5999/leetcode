/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    var index = 0;
    var answer = [];
    for(let i = 0; i<nums1.length; i++){
        index = nums2.indexOf(nums1[i])

        for(let i = index; i <=nums2.length-1; i++){

            if(nums2[i+1] > nums2[index]){
                answer.push(nums2[i+1])
                break;
            }
            else if( i == nums2.length-1){
                answer.push(-1)
            }
        }

    }
    return answer
};