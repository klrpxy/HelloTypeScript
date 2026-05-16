"use strict";
function gretter(person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
let user = { firstName: "Jame", lastName: "User" };
document.body.innerHTML = gretter(user);
