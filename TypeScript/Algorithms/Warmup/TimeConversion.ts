// Task: https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true

function timeConversion(s: string) {
	const format = s.slice(s.length - 2);
	const time = s.slice(0, -2);
	const timeChunked = time.split(':');

	const hours = timeChunked[0];
	const minutes = timeChunked[1];
	const seconds = timeChunked[2];

	if (hours === '12' && format === 'AM') {
		return `00:${minutes}:${seconds}`;
	} else if (format === 'AM') return time;
	else if (format === 'PM' && hours === '12') {
		return time;
	}

	let newTime = `${12 + Number(hours)}:${minutes}:${seconds}`;
	return newTime;
}
