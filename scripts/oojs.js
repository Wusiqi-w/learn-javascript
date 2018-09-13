

var person = {
    // name : ['Bob', 'Smith'],
    name : {
        first : 'Bob',
        last : 'Smith'
    },
    age : 32,
    gender : 'male',
    interests : ['music', 'skiing'],
    bio : function() {
        alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    } ,
    greeting : function() {
        alert('Hi! I\'m ' + this.name[0] + '.');
    } 
};

// 设置对象成员的值；
person.age = 45;
person['name']['first'] = 'Cratchit';

// 创建新的对象成员；
person['eyes'] = 'hazel';
person.farewell = function() {
    alert('Bye everybody');
}

// var myDataName = nameInput.value;
// var myDataValue = nameValue.value;
// person[myDataName] = myDataValue;


var myDataName = 'height';
var myDataValue = '1.75m';
person[myDataName] = myDataValue; 


