//The for...in loop is used to iterate over the enumerable(contable) properties of an object.

const person = {
    name: 'John Doe',
    age: 30,
    class : 'computer science',
    
}

for(let key in person) {
    console.log(key + ': ' + person[key]);
}