// Task: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles: number[]): number {
    const max = Math.max(...candles);
    const tallest = candles.filter((candle) => max == candle).length;
    return tallest;
}

const res = birthdayCakeCandles([3, 2, 1, 3]);
console.log(res);