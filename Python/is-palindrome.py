# https://leetcode.com/problems/palindrome-number/
def is_palindrome(x: int) -> bool:
    reversed = 0
    original = x

    while x > 0:
        last_digit = x % 10
        reversed = reversed * 10 + last_digit
        x = x // 10

    if original == reversed:
        return True
    return False
