const person  = new Object();

person.name = 'John';
person.age = 30;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}!`);
}

console.log(person.name);
console.log(person.age);
person.greet();