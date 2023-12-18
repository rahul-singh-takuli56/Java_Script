// this -> it tells us about the current context

function one() {
    const username = "Rahul"
    function two() {
        const website = "Youtube"
        console.log(username);
    }
    console.log(website);
    two();
}


// We can use only var for hoisting the varible
console.log(a);
var a = 3;
console.log(a);


// WE can;t use let and const for hoisting the variable

// console.log(num); // we will get error here
let num = 32;
console.log(num);


hoiting_func();
function hoiting_func() {
    return 34;
}

// In Hoisting the variable and function declaration  (not the intialization ) are moved at the top of scope during the complication phase;
