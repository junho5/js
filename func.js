const { odd, even } = require('./var');

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;
//exports.checkOddOrEven = checkOddOrEven // 불가능  -> 함수는 첫번째 방식으로만
//exports = checkOddOrEven // 불가능 -> 변수값으로 지정