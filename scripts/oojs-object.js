// object()构造函数

// var person1 = new Object();

// person1.name = 'Chris';
// person1['age'] = 38;
// person1.greeting = function() {
//     alert('Hi! I\'m ' + this.name + '.');
// }



var person1 = new Object({
    name : 'Chris',
    age : 38,
    greeting : function() {
        alert('Hi! I\'m ' + this.name + ',');
    } 
});

//  create()方法

var person2 = Object.create(person1);
