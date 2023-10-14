# Task: https://leetcode.com/problems/two-sum/description/
def twoSum(self, nums: list[int], target: int) -> list[int]:
    for index, num in enumerate(nums):
        for index2, num2 in enumerate(nums[index+1:]):
            if num + num2 == target:
                return [index, index+1]
