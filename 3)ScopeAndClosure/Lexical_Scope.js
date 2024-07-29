function outerFunction() {
    let outerVar = 'I am outer';

    function innerFunction() {
        console.log(outerVar);  // Can access 'outerVar'
    }

    innerFunction();  // Calling innerFunction
}

outerFunction();  // Calling outerFunction

//In short: Variables are accessible to functions that are defined within the same scope or nested scopes.