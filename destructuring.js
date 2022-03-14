// ES2015 이전
// let list = ['apple', 'mango']; let item1 = list[0];
// let item2 = list[1];
// let item3 = list[2] || 'grape’; console.log(item1, item2, item3); // 2번인덱스가 있으면 그거 넣고 아니면 grape

// 두 변수 값 교환
// let x = 1, y = 3;
// temp = x;
// x = y;
// y = temp; console.log(x, y);

// ---------------------------------------------------------------------------

// ES2015
// let lists = ['apple', 'mango'];
// [item1, item2, item3 = 'grape'] = lists; // default 값으로 grape 줌 넘어가면 undefined
// console.log(item1, item2, item3);

// // 두 변수 값 교환
// let x = 1, y = 3;
// [x, y] = [y, x];
// console.log(x, y);

// ---------------------------------------------------------------------------

// ES2015
// let a, b, rest;

// [a, b] = [10, 20];
// console.log(a);    // 10
// console.log(b);    // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10 
// console.log(b); // 20 
// console.log(rest); // 배열 [30, 40, 50] ... 나머지

 // ---------------------------------------------------------------------------

 // ES2015 이전
// let obj = {
//     key1: 'one',
//     key2: 'two',
//   };

// let key1 = obj.key1;
// let key2 = obj.key2;
// let key3 = obj.key3 || 'default key3 value'; 
// let newKey1 = key1;

//  ES2015
// let objs = {
//     key1: 'one',
//     key2: 'two',
//   };
//   let { key1: newKey1, key2, key3 = 'default_key3_value' } = objs; // key1 이라는 변수를 이제 newkey1이라고 :을 사용해서 변경 
// //  이제 objs.key1으로만 접근 가능

// //console.log(key1) //에러 발생
// console.log(key2)
// console.log(key3)
// console.log(newKey1)

// ---------------------------------------------------------------------------

// ES2015
 let { a, b } = { a: 10, b: 20 };
 console.log(a);     // 10
 console.log(b);     // 20

 let { c, d, ...rest } = { c: 30, d: 40, e: 50, f: 60 };
 console.log(c);     // 30
 console.log(d);     // 40
 console.log(rest);  // {e: 50, f: 60}