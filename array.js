// 배열

let array = [
  '자바스크립트 프로그래밍 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];

//indexing (0부터~~~)
console.log(array[2]);

// 배열 길이 (length)
console.log(array.length);

// 배열 요소 추가
array[5] = '추가된 요소';
console.log(array[5]);
// 배열 요소 이런식도 가능 +연산도 사용 가능
array['이런식도 가능'] = 1;

// 배열 요소 수정
array[5] =  '수정된 요소';
console.log(array[5]);

// 배열 요소 삭제
console.log(array);
delete array[5];
console.log(array);

// 해당 방법으로 하면 배열 길이가 줄어들지 않는 문제 발생 method를 사용해야댐
