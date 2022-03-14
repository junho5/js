class Person{
    constructor(first,last,age){
        this.name = {
            first,
            last
        };
        this.age=age;
    }
    greeting(){
        console.log(`Hi! I'm ${this.name.first}.`)
    };
}

class Teacher extends Person{
    constructor(first,last,age,subject){
        super(first,last,age);

        this.subject = subject;
    }
    greeting(){
        console.log(`Hi! I'm ${this.name.first}. I teach ${this.subject}.`)
    }
}
let person1 = new Person('Junho','Oh',26)
person1.greeting()

let teacher1 = new Teacher('Junho','Oh',26,'data')
teacher1.greeting()
