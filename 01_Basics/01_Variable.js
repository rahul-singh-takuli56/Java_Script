// let, var, const -> threee variable mostly use; 
// use of var varible

function example() {
    if (true) {
        var functionScopedVar = "I am function-scoped";
        console.log(functionScopedVar); // Accessible here
    }

    console.log(functionScopedVar); // Accessible here, not block-scoped
}

example();

console.log(functionScopedVar); // This will also work because functionScopedVar is global

// use of let varible

function example() {
    if (true) {
        let blockScopedLet = "I am block-scoped";
        console.log(blockScopedLet); // Accessible here
    }

    // This will result in an error because blockScopedLet is not defined here
    console.log(blockScopedLet);
}

example();

// var keyword is not block scope 
// let keyword is block scope. 