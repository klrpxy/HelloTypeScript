"use strict";
// TypeScript 类构造器的入参支持添加public来声明为类成员
class Student {
    firstName;
    middleInitial;
    lastName;
    fullName;
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}
function greeter(person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
let user = new Student('Jame', 'M.', 'User');
document.body.innerHTML = greeter(user);
class Apple {
    name = '';
}
class Desk {
    height = 0;
}
let master;
master = {
    name: 'sd',
    height: 123,
};
console.log(master);
