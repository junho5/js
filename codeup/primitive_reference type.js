let y = x;

y = x + '!';
x = y.toLowerCase();

console.log(y);

//------------------------------------------

let x = ['Kim', 'Na', 'Park', 'Lee'];
let y = x;

y.push('Lim');
x[4] = 'Sung';

console.log(y);

//------------------------------------------

let x = {
  numbers: [1, 2, 3, 4],
  title: 'Codeit',
};
let y = x.numbers;
let z = x.title;
 
x.numbers.unshift(5);
x.title = 'Hello';

console.log(y);
console.log(z);