// Task: https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar: Array<number>): number {
	return ar.reduce((accum, current) => accum + current);
}

const result = simpleArraySum([5, 7, 10, 6]);
console.log(result);