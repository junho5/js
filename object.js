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


// 객체 수정
codeit.name = '오준호';
console.log(codeit.name);

// 객체 추가
codeit.ceo = '전종훈';
codeit['new ceo'] = '권동섭';
console.log(codeit.ceo);
console.log(codeit['new ceo']);

// 객체 삭제
delete codeit.worstcourse;
console.log(codeit.worstcourse);

// 객체 존재 확인
console.log('name' in codeit);

if ('name' in codeit){
  console.log(`${codeit['name']}은 존재함`)
}else{
  console.log(`${codeit.name}은 존재하지 않음`)
}

console.log(codeit);
