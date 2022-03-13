function interestCalculator(rate, payment, term){
  interest=+(payment*term*(term+1)/2*rate/12).toFixed();
  console.log(interest);
}


// 이율이 4.3%일 때 매월 80만원씩 24개월 납입할 경우
interestCaalculator(0.043, 800000, 24);

// 이율이 4.3%일 때 매월 60만원씩 24개월 납입할 경우 해당 경우 to fixed안쓰면 소수점 나옴
interestCalculator(0.043, 600000, 24);