

function countDigits(num) {
    if (num === 0) return 1;

    num = Math.abs(num);

    let count = 0;

    while (num !== 0) {
        num = Math.round(num / 10);
        count += 1;
    }

    return count;
}


const num = -111;
const result = countDigits(num);

console.log("Count of digits is:-", result); 