// 배열의 메소드
let members =['쿤갈레','Zerrard66','우리생각해써','흙토끼','End Miracle'];

console.log(members);
delete members[4];
console.log(members);

// splice (start index , delete count , 삭제한 자리 추가 item)

members.splice(1, 2, 'Nice append' , 'one more');
console.log(members);

// slice (start , end) 
members.slice(2,4);

// 배열의 첫 요소를 삭제 : shift()
members.shift();

// 배열의 마지막 요소를 삭제 : pop()
members.pop();

// 배열의 첫 요소로 값 추가 : unshift()
members.unshift();

// 배열의 마지막 요소로 값 추가 : push()
members.push();

// 배열에서 특정한 값 찾기 : indexof(앞부터) / lastindexof (뒤부터) 인덱스 값을 리턴 없으면 -1 리턴
members.indexOf('쿤갈레');

// 배열에서 특정 값 확인 : includes   true false 반환
members.includes('흙토끼');

// 배열 뒤집기 : reverse
members.reverse();