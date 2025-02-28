def romanToInt(s: str) -> int:
    sum = 0
    roman = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

    for index, num in enumerate(s):
        value = roman[num]
        # Numbers should be in descending order if next number is greater that current then we subtract
        if index + 1 < len(s) and value < roman[s[index + 1]]:
            sum -= value
        else:
            sum += value

    return sum


result = romanToInt("MCMXCIV")
print(result)
