// 객체 object

let codeit ={
  name: '코드잇',
  'born year': 2017,
  isverynice: true,
  worstcourse: null,
  bestcourse :{
    title: '자바스크립트 프로그래밍 기초',
    language: 'javascript'
  }
};

// 점 표기법
console.log(codeit.isverynice);

// 대괄호 표기법
console.log(codeit['born year']);

let propertyname = 'name';
console.log(codeit[propertyname]);

// 점 표기법
console.log(codeit.bestcourse.title);

// 대괄호 표기법
console.log(codeit.bestcourse['title']);