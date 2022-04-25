// // map       function(value, index, array)
// const nums1 = [1, 2, 3, 4, 5];
// const processed = nums1.map( (num) => num * num ); console.log(processed);

// // filter    function(value, index, array)
// const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNums = nums2.filter( (num) => num % 2 === 0 ); console.log(evenNums);

// reduce    function(accmulator, value, index, array) 두번째 매개변수는 accumulator 초기값 설정안하면 첫번째 return 값
const nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = nums3.reduce( (total, num) => total + num, 0 ); console.log(sum); // 55