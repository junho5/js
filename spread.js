// // ES2015 이전
// let array1 = ['one', 'two']; 
// let array2 = ['three', 'four'];

// let combined1 = [array1[0], array1[1], array2[0], array2[1]];
// let combined2 = array1.concat(array2);
// let combined3 = [].concat(array1, array2); // ['one', 'two', 'three', 'four'] 
// let combined4 = [array1, array2]; // [ ['one', 'two’], ['three', 'four’] ]


// ES2015 배열 전개 연산자
// let combined5 = [...array1, ...array2]; // ['one', 'two', 'three', 'four'] 
// let combined6 = ['zero', ...array2, 'plus', ...array1];

// console.log(combined5)
// console.log(combined6)


// ES2015
let obj1 = { one: 1, two: 2, other: 0 };
let obj2 = { three: 3, four: 4, other: -1 };
let combined = { 
    ...obj1,
    ...obj2,
}; // combined = { one: 1, two: 2, other: -1, three: 3, four: 4 } 겹치면 마지막 값
console.log(combined)

combined = { 
    ...obj2, 
    ...obj1,
}; // combined = { three: 3, four: 4, other: 0, one: 1, two: 2 }
console.log(combined)

let { other, ...others } = combined;
// other = 0, others = { three: 3, four: 4, one: 1, two: 2 } ...은 전개의 의미와 나머지의 의미를 가지고 있음
console.log(other)
console.log(others)
console.log(combined)

