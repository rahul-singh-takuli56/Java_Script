// let a = 10;
// const b = 39;
// var c = 23;

// console.log(a);
// console.log(b);
// console.log(c);

// {} Scope 

var c = 30; // global scope
let a = 300;

if (true) { // block scope
    let a = 10;
    const b = 39;
    var c = 23;
    console.log(a);
}

// console.log(a);
// console.log(b);
console.log(c);
console.log(a);

