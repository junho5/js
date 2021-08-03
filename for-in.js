// for.. in
let codeit ={
  name: '코드잇',
  bornyear: 2017,
  isverynice: true,
  worstcourse: null,
  bestcourse :{
    title: '자바스크립트 프로그래밍 기초',
    language: 'javascript'
  }
};

for (let key in codeit){
  console.log(key);
  console.log(codeit[key]);
}