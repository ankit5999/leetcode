class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        
        # Second Method Using Sets >> Time complexity: O(n)
        s = set()
        for i in range(0,len(nums)):
            if nums[i] in s:
                return True
            s.add(nums[i])
        return False
        
        
        
        
                
        # First brute force Approach >> Time Complexity: O(n^2)
        
        # for i in range(0,len(nums)):
        #     for j in range(i+1,len(nums)):
        #         if nums[i] == nums[j]:
        #             return True
        # return False