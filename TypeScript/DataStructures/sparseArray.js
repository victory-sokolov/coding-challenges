// Task: https://www.hackerrank.com/challenges/sparse-arrays/problem

function matchingStrings(strings, queries) {
	const occurences = [];
	for (let i = 0; i < queries.length; i++) {
		let sum = 0;
		for (let j = 0; j < strings.length; j++) {
			if (queries[i] == strings[j]) {
				sum += 1;
			}
		}
		occurences.push(sum);
	}

	return occurences;
}

const res = matchingStrings(
	['aba', 'baba', 'aba', 'xzxb'],
	['aba', 'xzxb', 'ab']
);
