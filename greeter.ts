// TypeScript 中对象实现接口时只需包含接口要求的结构即可，不必明确显示实现。

interface Person {
    firstName: string;
    lastName: string;
}

function gretter(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: 'Jame', lastName: 'User' };

document.body.innerHTML = gretter(user);
