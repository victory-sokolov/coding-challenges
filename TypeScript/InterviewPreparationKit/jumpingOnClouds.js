//Task: https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
	let jumps = -1;

	for (let i = 0; i < c.length; i++) {
		if (i < c.length - 2 && c[i + 2] == 0) {
			i++;
		}
		jumps++;
	}

	return jumps;
}

const res = jumpingOnClouds([0, 0, 0, 1, 0, 0])
console.log(res)