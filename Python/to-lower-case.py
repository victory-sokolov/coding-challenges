# https://leetcode.com/problems/to-lower-case/submissions/1558588342
def toLowerCase(self, s: str) -> str:
    res = ""
    for i in s:
        # Check for uppercase value
        if ord(i) > 64 and ord(i) < 91:
            i = chr(ord(i) + 32)
            res += i
        else:
            res += i
    return res
