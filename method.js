// 메소드 

let greetings = {
  sayHello: function(){
    console.log('Hello');
  },
  sayHi: function(name){
    console.log('Hi ${name}');
  },
  sayBye: function(){
    console.log('Bye');
  }
}

let rectAngle = {
  width: 30,
  height: 50,
  getArea: function(){
    return rectAngle.width * rectAngle.height;
  }
}

let triAngel = {
  width: 15,
  height: 40,
  getArea: function(){
    return triAngel.width * triAngel.height / 2;
  }
}

// 점 표기법
greetings.sayHello();

// 파라미터 있을 경우
greetings.sayHi('오준호');
greetings['sayHi']('오준호');

