// Number
let myNumber = 0.3591;

// toFixed(0 ~ 100) 하지만 toFixed 쓰면 string로 변환 / 소숫점 자리 정하기
console.log(myNumber.toFixed(3));
console.log(myNumber.toFixed(7));
console.log(Number(myNumber.toFixed(7)));
console.log(+myNumber.toFixed(7)); // 위랑 동일

// toString (2 ~ 36) 원하는 진법으로 변환

let myNumber2 = 255;
console.log(myNumber2.toString(2));
console.log(myNumber2.toString(8));
console.log(myNumber2.toString(16));

console.log(255..toString(2)); // .하나는 소숫점으로 인식 괄호로 묶거나 .2개


