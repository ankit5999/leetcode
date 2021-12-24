class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i in range(len(nums)):
            comp = target-nums[i]
            if comp in d:
                return [d[comp],i]
            d[nums[i]] = i
        
        # d = {}
        # ans = []
        # for i in range(len(nums)):
        #     if target-nums[i] in d:
        #         ans.append(d[target-nums[i]])
        #         ans.append(i)
        #         return ans
        #     d[nums[i]] = i
        # return ans
        
        
        
        # for i in range(len(nums)):
        #     for j in range(i+1,len(nums)):
        #         if nums[i]+nums[j] == target:
        #             return i,j