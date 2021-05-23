// Task: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a: Array<number>, b: Array<number>): Array<number> {
	const alice =
		(a[0] > b[0] ? 1 : 0) + (a[1] > b[1] ? 1 : 0) + (a[2] > b[2] ? 1 : 0);
	const bob =
		(a[0] < b[0] ? 1 : 0) + (a[1] < b[1] ? 1 : 0) + (a[2] < b[2] ? 1 : 0);

	return [alice, bob];
}

const result = compareTriplets([17, 28, 30], [99, 16, 8]);
console.log(result);