# Task: https://leetcode.com/problems/two-sum/description/
# O(n^2) algorithmic complexity
def two_sum(nums: list[int], target: int) -> list[int]:
    total = len(nums)

    for i, num in enumerate(nums):
        for j in range(i + 1, total):
            sum = num + nums[j]
            if sum == target:
                return [i, j]

    return []


def two_sum_hash_map(nums: list[int], target: int) -> list[int]:
    hash_map = {}

    for index, num in enumerate(nums):
        diff = target - num

        if diff in hash_map:
            return [hash_map[diff], index]

        hash_map[num] = index

    return []
