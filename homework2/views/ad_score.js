// 페이지 로딩 시 출석 정보 가져오는 함수
async function getScore() {
    try {
      const res = await axios.get('/admin_score/scores');
      const scores = res.data;
  
      const list = document.getElementById('list');
      list.innerHTML = '';
  
      Object.keys(scores).map(function (key) {
        const userDiv = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = scores[key].name + ' 학생 : ' + scores[key].score;
  
        // 수정 버튼 생성
        const edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', async () => {
          const name = prompt('수정할 이름을 입력하세요');
          const score = prompt('수정할 시험 점수를 입력하세요');
          if (!name || !score) {
            return alert('수정할 이름과 시험 점수를 반드시 입력하셔야 합니다');
          }
          try {
            // 수정
            await axios.put('/admin_score/score/' + key, { name, score });
            getScore();
          } catch (err) {
            console.error(err);
          }
        });
  
        // 삭제 버튼 생성
        const remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', async () => {
          try {
            // 삭제
            await axios.delete('/admin_score/score/' + key);
            getScore();
          } catch (err) {
            console.error(err);
          }
        });
        userDiv.appendChild(span);
        userDiv.appendChild(edit);
        userDiv.appendChild(remove);
        list.appendChild(userDiv);
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  window.onload = getScore;
  
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = e.target.name.value;
    const score = e.target.score.value;
    if (!name || !score) {
      return alert('이름과 점수를 입력하세요');
    }
    try {
      await axios.post('/admin_score/score', { name, score });
      getScore();
    } catch (err) {
      console.error(err);
    }
  
    // 입력 form 초기화
    e.target.name.value = '';
    e.target.score.value = '';
  });
  