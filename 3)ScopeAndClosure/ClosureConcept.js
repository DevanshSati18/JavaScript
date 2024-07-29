function makeCounter() {
    let count = 0;  // This is a variable inside the box (closure)

    return function() {
        count += 1;  // The inner function can access and modify 'count'
        return count;
    };
}

const counter = makeCounter();  // Create a counter with its own 'count'

console.log(counter());  // Output: 1
console.log(counter());  // Output: 2
console.log(counter());  // Output: 3
//In short: A closure is a function that keeps access to the variables from the scope in which it was created, even after that scope has finished executing.