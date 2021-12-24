class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left = 0
        right = len(nums)-1
        while left <= right:
            midd = (left+right)//2
            match = nums[midd]
            if target == match:
                return midd
            elif target < match:
                right = midd-1
            else:
                left = midd+1
        return left
        
            