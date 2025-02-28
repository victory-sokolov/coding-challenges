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


# Two Pointers approach
def is_palindrome_str(string: str) -> bool:
    start = 0
    end = len(string) - 1

    while start < end:
        if string[start] != string[end]:
            return False
        start += 1
        end -= 1

    return True
