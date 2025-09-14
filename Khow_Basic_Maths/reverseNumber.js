function reverseNumber(num) {
    // 1. convert negative number to positive
    num = Math.abs(num);

    // 2. convert number to string
    const numToStr = num.toString();

    let ans = "";

    // 3. loop in each character in reverse order and store concatenated result

    for (let i = numToStr.length - 1; i >= 0; i--) {
        ans += numToStr[i];
    }

    return Number(ans);
}

function reverseString2(num) {
    return num.toString().split("").reverse().join("");
}


function reverseString3(num) {
    let reverse = 0;

    while (num !== 0) {
        let lastDigit = num % 10;
        reverse = (reverse * 10) + lastDigit;
        num = Math.floor(num / 10);
    }

    return reverse;
}

const num = 0;
const ans = reverseString3(num);

console.log("Reversed Number:-", ans);
