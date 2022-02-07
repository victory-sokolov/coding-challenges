// Task: https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(steps, path) {
    const valleys = 0;
    const lvl = 0;

    path.split("").map((p) => {
        if(p == 'U') lvl++;
        if(p == 'D') lvl--;

        if(lvl == 0 && p == 'U') {
            valleys++;
        }
    })

    return valleys;
}

const res = ountingValleys(8, 'UDDDUDUU');