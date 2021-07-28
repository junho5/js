// 옵셔널 파라미터 (Optional Parameters)

function introduce(name, age, nationality = '한국'){
  console.log(`제 이름은 ${name}입니다.`);
  console.log(`나이는 ${age}입니다.`);
  console.log(`국적은 ${nationality}입니다.`);
}

introduce('오준호',21,'미국');
introduce('오준호',21,2);
introduce('');

