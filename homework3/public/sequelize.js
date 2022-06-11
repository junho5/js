// // 댓글 로딩
// async function getThing(id) {
//   try {
//     const res = await axios.get('/info');
//     const things = res.data;
//     const tbody = document.querySelector('#comment-list tbody');
//     tbody.innerHTML = '';
//     things.map(function (thing) {
//       // 로우 셀 추가
//       const row = document.createElement('tr');
//       let td = document.createElement('td');
//       td.textContent = thing.name;
//       row.appendChild(td);
//       td = document.createElement('td');
//       td.textContent = thing.price;
//       row.appendChild(td);
//       td = document.createElement('td');
//       td.textContent = thing.stock;
//       row.appendChild(td);
//       const edit = document.createElement('button');
//       edit.textContent = '수정';
//       edit.addEventListener('click', async () => { // 수정 클릭 시
//         const newThing = prompt('바꿀 내용을 입력하세요');
//         if (!newThing) {
//           return alert('내용을 반드시 입력하셔야 합니다');
//         }
//         try {
//           await axios.patch(`/things/${thing.id}`, { thing: newThing });
//           getThing(id);
//         } catch (err) {
//           console.error(err);
//         }
//       });
//       const remove = document.createElement('button');
//       remove.textContent = '삭제';
//       remove.addEventListener('click', async () => { // 삭제 클릭 시
//         try {
//           await axios.delete(`/things/${thing.id}`);
//           getThing(id);
//         } catch (err) {
//           console.error(err);
//         }
//       });
//       // 버튼 추가
//       td = document.createElement('td');
//       td.appendChild(edit);
//       row.appendChild(td);
//       td = document.createElement('td');
//       td.appendChild(remove);
//       row.appendChild(td);
//       tbody.appendChild(row);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }