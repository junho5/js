// 참조형 복사하기 (reference type copy)
let number1 = [1,2,3];
let number2 = number1;
let number3 = number1.slice(); // copy

number2.push(4);
number3.push(7777);

console.log(number1);
console.log(number2);
console.log(number3);

// object copy
let course1 = {
  title: '파이썬',
  language: 'korean'
}

let course2 = course1;
course2.title = '자료구조';

let course3 = Object.assign({}, course1); 
course3.title = 'change';

let course4 = cloneObject(course1);
course4.title = '빅데이터';

function cloneObject(object){
  let temp = {};

  for (let key in object){
    temp[key] = object[key]
  }

  return temp;
}
// 하지만 해당 함수처럼 만들면 나중에 객체에 배열이 있을 경우 배열은 주소값을 참조하므로 오류발생 공부 더 필요!!!

console.log(course1);
console.log(course2);
console.log(course3);
console.log(course4);


