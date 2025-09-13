
// count o digits using digit by digit method
function countDigits(num) {
    if (num === 0) return 1;

    num = Math.abs(num);

    let count = 0;

    while (num !== 0) {
        num = Math.floor(num / 10);
        count += 1;
    }

    return count;
}



// count o digits using string method
function countDigits2(num) {
    return Math.abs(num).toString().length;
}



// main function
const num = -1234;
// const result = countDigits(num);
const result = countDigits2(num);

console.log("Count of digits is:-", result); 