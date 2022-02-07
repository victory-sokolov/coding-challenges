// Task: https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar: Array<number>): number {
	const sum = ar.reduce((accum: number, current: number) => {
		return accum += current;
	}, 0);
	return sum;
}

const result = aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
console.log(result);