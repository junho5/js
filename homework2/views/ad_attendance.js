// 페이지 로딩 시 출석 정보 가져오는 함수
async function getAttendance() {
    try {
      const res = await axios.get('/admin_attendance/attendances');
      const attendances = res.data;
  
      const list = document.getElementById('list');
      list.innerHTML = '';
  
      Object.keys(attendances).map(function (key) {
        const userDiv = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = attendances[key].name + ' 학생 : ' + attendances[key].attendance;
  
        // 수정 버튼 생성
        const edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', async () => {
          const name = prompt('수정할 이름을 입력하세요');
          const attendance = prompt('수정할 출석 유무를 입력하세요');
          if (!name || !attendance) {
            return alert('수정할 이름과 출석 유무를 반드시 입력하셔야 합니다');
          }
          try {
            // 수정
            await axios.put('/admin_attendance/attendance/' + key, { name, attendance });
            getAttendance();
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
            await axios.delete('/admin_attendance/attendance/' + key);
            getAttendance();
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
  
  window.onload = getAttendance;
  
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = e.target.name.value;
    const attendance = e.target.attendance.value;
    if (!name || !attendance) {
      return alert('이름과 메모를 입력하세요');
    }
    try {
      await axios.post('/admin_attendance/attendance', { name, attendance });
      getAttendance();
    } catch (err) {
      console.error(err);
    }
  
    // 입력 form 초기화
    e.target.name.value = '';
    e.target.attendance.value = '';
  });
  