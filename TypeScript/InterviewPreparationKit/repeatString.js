// Task: https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
	let aCount = 0;

	if (n >= s.length) {
		let occurenceOfA = [...s].filter((e) => e === 'a').length;
		aCount = Math.floor(n / s.length) * occurenceOfA;
	}

	let tailStirngLength = n % s.length;
	for (let i = 0; i < tailStirngLength; i++) {
		if (s[i] === 'a') aCount++;
	}

	return aCount;
}