// for...of

// for (변수 of 배열)
//  동작 부분

let influencer = ['abc','def','ghi','jkl','mno'];

// for in은 객체에 사용하는 것이 좋음 나중에 length같은거 사용할때 꼬일수도 있음
for (let i in influencer){
  console.log(influencer[i]);
}

// 배열에는 for of 사용하는 것이 best
for (let j of influencer){
  console.log(j);
}

// 우리가 흔히 아는 for문
for (let i=0;i<influencer.length;i++){
  console.log(influencer[i]);
}