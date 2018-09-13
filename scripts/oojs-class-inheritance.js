var input = document.querySelector('input');
var btn = document.querySelector('button');
var para = document.querySelector('p');

btn.onclick = function () {
    var code = input.value;
    para.textContent = eval(code);
}

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};

Person.prototype.bio = function () {
    var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
    var pronoun;
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        pronoun = 'He likes ';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        pronoun = 'She likes ';
    } else {
        pronoun = 'They like ';
    }

    string += pronoun;
    if (this.interests.length === 1) {
        string += this.interests[0] + '.';
    } else if (this.interests.length === 2) {
        string += this.interests[0] + ' and ' + this.interests[1] + '.';
    } else {
        for (var i = 0; i < this.interests.length; i++) {
            if (i === this.interests.length - 1) {
                string += 'and ' + this.interests[i] + '.';
            } else {
                string += this.interests[i] + ', ';
            }
        }
    }
    alert(string);
}

Person.prototype.greeting = function () {
    alert('Hi! I\'m ' + this.name.first + '.');
};
Person.prototype.farewell = function () {
    alert(this.name.first + ' has left the building. Bye for now!');
}
var person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);


//创建一个Teacher构造器
function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);
    this.subject = subject;

}

//Teacher()从Person()的原型对象里继承方法。

Teacher.prototype = Object.create(Person.prototype);

// 把Teacher().prototype.constructor属性的指向改变，使之与Teacher关联
Teacher.prototype.constructor = Teacher;

// 向Teacher()添加一个新的greeting()函数
Teacher.prototype.greeting = function () {
    var prefix;
    if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
        prefix = 'Mr.';
    } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
        prefix = 'Mrs.';
    } else {
        prefix = 'Mx.';
    }
    alert('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subject + '.');
};



var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');





















// 从无参构造函数继承

// function Brick() {
//     this.width = 10;
//     this.height = 20;
// }

// function BlueGlassBrick() {
//     Brick.call(this);

//     this.opacity = 0.5;
//     this.color = 'blue';

// }