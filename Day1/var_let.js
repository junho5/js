// var hoisting 

// var 랑 function 으로하는건 제일 먼저 
// ex) var , function star ~~
console.log(x)
var x = 10

if (x ==10){
    var x = 20
    console.log(x)
}
console.log(x)

// let 예시
// console.log(y) 오류 발생
let y = 10
// let y = 30 오류 발생

if (y == 10){
    let y = 20
    console.log(y)
}
console.log(y)

