// 상수
// 상수는 표현할때 대문자 , 두단어 이상은 _ 사용 
// const PI , const MY_NUMBER
const PI = 3.14
// let PI = 3.14; // 원주율
let radius = 0; // 반지름

function calculateArea(){
  return PI * radius * radius;
}

function printArea(){
  return `반지름이 ${radius}일 떄, 원의 넓이는 ${calculateArea()}`;
}

radius = 4 ;
console.log(printArea());

radius = 7 ;
console.log(printArea());

radius = 8 ;
console.log(printArea());
