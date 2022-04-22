async function getshoes() { 
    // shoes의 현 상태를 보여주기 위해 사용하는 함수
    try {
      const res = await axios.get('/shoes');
      const shoes = res.data;
      const list = document.getElementById('list');
      list.innerHTML = '';

      // 반복적으로 화면 표시 및 이벤트 연결한다.
      Object.keys(shoes).map(function (key) {  
        const shoeDiv = document.createElement('div');
        const span = document.createElement('span');
        span.textContent = shoes[key][0] +' / ' + shoes[key][1] +' / ' + shoes[key][2];
        // 리스트 index을 이용하여 0,1,2번째 값들을 보기 쉽게하기위해 /과 같이 저장
        const edit = document.createElement('button');
        edit.textContent = '수정';
        edit.addEventListener('click', async () => { 
          // 수정 버튼 클릭시 새로 입력받은 name,price,stock으로 업데이트한다.
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
          // 입력을 안할 경우 발생하는 메시지
          try {
            await axios.put('/shoe/' + key, { name,price,stock });
            getshoes();
          } catch (err) {
            console.error(err);
          }
        });

        const remove = document.createElement('button');
        remove.textContent = '삭제';
        remove.addEventListener('click', async () => { 
          // 삭제 버튼 클릭시 해당하는 데이터를 삭제한다.
          try {
            await axios.delete('/shoe/' + key);
            getshoes();
          } catch (err) {
            console.error(err);
          }
        });
        shoeDiv.appendChild(span);
        shoeDiv.appendChild(edit);
        shoeDiv.appendChild(remove);
        list.appendChild(shoeDiv);
        console.log(res.data);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  window.onload = getshoes; // 화면 로딩 시 getshoes 호출
  document.getElementById('form').addEventListener('submit', async (e) => {
    // 등록 버튼 클릭시 입력받은 name,price,stock값 등록.
    e.preventDefault();
    const name = e.target.shoes.value;
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
    // 입력을 안할 경우 발생하는 메시지  
    try {
      await axios.post('/shoe', { name,price,stock });
      getshoes();
      // 추가된 목록 확인
    } catch (err) {
      console.error(err);
    }
    e.target.shoes.value = '';
    e.target.price.value = '';
    e.target.stock.value = '';
    // 빈칸으로 말들기 위해 ''으로 지정
  });