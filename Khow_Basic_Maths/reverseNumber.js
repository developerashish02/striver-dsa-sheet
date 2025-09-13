

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


const num = 1234;
const ans = reverseNumber(num);

console.log("Reversed Number:-", ans);