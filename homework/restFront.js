async function getshoes() { 
    // 로딩 시 사용자 가져오는 함수
    try {
      const res = await axios.get('/users');
      const users = res.data;
      const list = document.getElementById('list');
      list.innerHTML = '';

      // 사용자마다 반복적으로 화면 표시 및 이벤트 연결
      Object.keys(users).map(function (key) {  
               
        const userDiv = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = users[key][0] +' / ' + users[key][1] +' / ' + users[key][2];

        const edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', async () => { 
          // 수정 버튼 클릭
          const name = prompt('바꿀 이름을 입력하세요');
          const price = prompt('바꿀 가격을 입력하세요');
          const stock = prompt('변경된 재고상황을 입력하세요');
          if (!name) {
            return alert('이름을 반드시 입력하셔야 합니다');
          }
          else if (!price) {
            return alert('가격은 반드시 입력하셔야 합니다');
          }
          else if (!stock) {
            return alert('재고 상황은 반드시 입력하셔야 합니다');
          }
          try {
            await axios.put('/user/' + key, { name,price,stock });
            getshoes();
          } catch (err) {
            console.error(err);
          }
        });

        const remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', async () => { 
          // 삭제 버튼 클릭
          try {
            await axios.delete('/user/' + key);
            getshoes();
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
  
  window.onload = getshoes; // 화면 로딩 시 getshoes 호출
  // 폼 제출(submit) 시 실행
  document.getElementById('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = e.target.username.value;
    const price = e.target.price.value;
    const stock = e.target.stock.value;
    if (!name) {
      return alert('이름을 입력하세요');
    }
    if (!price) {
        return alert('가격을 입력하세요');
      }
    if (!stock) {
      return alert('재고유무를 입력하세요');
    }  
    try {
      await axios.post('/user', { name,price,stock });
      getshoes();
    } catch (err) {
      console.error(err);
    }
    e.target.username.value = '';
    e.target.price.value = '';
    e.target.stock.value = '';
  });