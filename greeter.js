"use strict";
// TypeScript 中对象实现接口时只需包含接口要求的结构即可，不必明确显示实现。
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
