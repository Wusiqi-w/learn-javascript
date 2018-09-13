// 普通函数；

// function createNewPerson(name) {
//     var obj = {};
//     obj.name = name;
//     obj.greeting = function() {
//         alert('Hi! I\'m ' + this.name + '.');
//     }
//     return obj;

// }


//  构建函数，通常是大写字母开头，便于区分;

// function Person(name) {
//     this.name = name;
//     this.greeting = function () {
//         alert('Hi! I\'m ' + this.name + '.');
//     };
// }

// var person1 = new Person('Bob');
// var person2 = new Person('Sarah');


// function Person(first, last, age, gender, interests) {
//     this.name = {
//         first,
//         last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function () {
//         alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + interests[1] + '.');
//     };
//     this.greeting = function () {
//         alert('Hi! I\'m ' + this.name.first + '.');
//     };
// }

// var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        var then;
        if (this.gender = 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            then = 'He likes ';
        } else if (this.gender = 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
            then = 'She likes ';
        } else {
            then = 'She likes ';
        }
        string += then;

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

    };
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    };

}

var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);

// 修改原型
Person.prototype.farewell = function() {
    alert(this.name.first + ' has left the building. Bye for now!');
}