class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        newSum = maxSum = nums[0]
        for i in range(1,len(nums)):
            newSum = max(nums[i], newSum+nums[i] )
            maxSum = max(newSum, maxSum)
        return maxSum
                    