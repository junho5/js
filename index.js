// Scope : 범위, 영역
let x = 3; // 글로벌 변수, 전역 변수

function myFunction(){ // 블록문
  let x = 3; // 로컬변수, 지역변수
  console.log(x);
}

myFunction();
console.log(x);