//The for...of loop is used to iterate over iterable objects (like arrays, strings, etc.).


const numbers = [1, 2, 3, 4, 5];

for(let number of numbers) {
    console.log(number);
}

const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
    console.log(fruit);  
    // Outputs:
    // apple
    // banana
    // cherry
}
