function add1(x,y){
    return x + y;
}

const add2 = (x,y) => {
    return x + y;
}

const add3 = (x,y) => (x+y);

function add4(x,y){
    answer = x + y
    return {x,y,answer};
}
// ---------------------------------------------------------------------------
function not1(x){
    return !x;
}

const not2 = x => !x;

function makeobj(name,age){
    return {name,age};
}

let person1 = makeobj('Park',20);
console.log(person1);

const makeobj2 = (name,age) => ({name,age}); // 화살표함수 사용해서 객체 리터럴 할때는 소괄호로 묶어줘야댐 없으면 함수로 인식해서 오류 발새
let person2 = makeobj2('Park',20);
console.log(person2)

let robot1 ={
    name: 'smarty1',
    say (word){
        console.log(word);
        console.log(`저는 ${this.name} 예요.`);
        console.log(this)
    },
};
let robot2 ={
    name: 'smarty2',
    say : (word) => {
        console.log(word);
        console.log(`저는 ${this.name} 예요.`); // 화살표 함수는 this가 없음 
        console.log(this) // 화살표 함수는 this가 없음 
    },
};
robot1.say('안녕하세요?');
robot2.say('안녕하세요?');

