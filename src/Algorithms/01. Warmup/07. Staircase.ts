// Task: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n: number): void {

    for(let i = 1; i <= n; i++) {
        console.log('#'.repeat(i).padStart(n, ' '));
    }
}

staircase(4);
