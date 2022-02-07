// Task: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr: Array<number>): void {
    let min = arr[0], max = arr[0];
    let sum = 0;
    arr.map((val) => {
        if(val > max) max = val;
        if (val < min) min = val;
        sum += val;
    })

    console.log((sum - max) + ' ' + (sum - min));
}

miniMaxSum([1, 2, 3, 4, 5]);