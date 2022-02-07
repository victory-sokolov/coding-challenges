//Task: https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr: Array<number>): void {
    const ratios = {
        positive: 0,
        negative: 0,
        zeros: 0
    }
    const len = arr.length;

    arr.map((el) => {
        if(el > 0) ratios.positive++;
        else if(el === 0) ratios.zeros++;
        else ratios.negative++;
    })

    Object.keys(ratios).map((el) => {
        console.log((ratios[el] / len).toFixed(6))
    })

}

const result = plusMinus([-4, 3, -9, 0, 4, 1]);