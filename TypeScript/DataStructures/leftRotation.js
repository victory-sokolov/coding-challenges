// Task: https://www.hackerrank.com/challenges/array-left-rotation/problem

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr) {

    const rotatedArray = [];
    const n = arr.length;
    for(let i = 0; i < n; i++) {
        rotatedArray[(i + n - d) % n] = arr[i];
    }

    return rotatedArray;
}

const res = rotateLeft(2, [1, 2, 3, 4, 5]);