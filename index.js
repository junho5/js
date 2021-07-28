function sayHello(){
  console.log('Hello');
  console.log('Welcome to Codeit!');
}

function calculator(x,y){
  console.log(`${x} * ${y} = ${x*y}`);
}

console.log('함수 호출 전');
sayHello();
console.log('함수 호출 후')

calculator(3,4);