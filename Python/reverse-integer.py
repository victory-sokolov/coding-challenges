# https://leetcode.com/problems/reverse-integer/
def reverse_integer(x: int) -> int:
    reversed = 0
    is_negative = False

    if x < 0:
        x = -1 * x
        is_negative = True

    while x > 0:
        last_digit = x % 10
        reversed = reversed * 10 + last_digit
        x = x // 10

    if is_negative:
        return -reversed

    return reversed
