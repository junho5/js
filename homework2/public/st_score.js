// 페이지 로딩 시 출석 정보 가져오는 함수 (관리자용)
// 학생용이므로 get 기능만 가능하다.

async function getScore() {
    try {
      const res = await axios.get('/student_score/scores');
      const scores = res.data;
  
      const list = document.getElementById('list');
      list.innerHTML = '';
  
      Object.keys(scores).map(function (key) {
        const userDiv = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = scores[key].name + ' 학생 : ' + scores[key].score;

        userDiv.appendChild(span);
        list.appendChild(userDiv);
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }

  window.onload = getScore;
  