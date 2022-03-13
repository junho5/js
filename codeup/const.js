let x = 1;

x = 4;

const y = x;

y = 3;
x = 2;

console.log(x);


let team1 = ['Drum', 'Bass', 'Saxophone'];
const team2 = team1;

team1.splice(2, 1, 'Trumpet');
team2.splice(2, 1, 'Piano');

console.log(team1);
console.log(team2);

// const로 선언해도 배열 객체와 같은 참조형 변수들은 값이아니라 주소를 저장하는 거기 때문에 값이 변경됨