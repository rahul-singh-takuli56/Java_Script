# Hoisting:
- Hoisting is the behaviour in JS where variable and function declaration are moved at the top of scope during complitaion phase.
- ```Arrow Function``` are not hoisted.
- ```Hoisting with var```  Variables declared with var are hoisted to the top of their scope, and they are initialized with the value undefined. This means that you can access and use the variable before its declaration in the code.

- ```Example``` 
- console.log(x); // Outputs: undefined
- var x = 5;
- console.log(x); 

- ```Hoisting with let and const```  Variables declared with let and const are also hoisted, but they are not initialized. If you try to access the variable before its declaration, a ReferenceError will be thrown.


- ```Example```
- console.log(y); // Throws a ReferenceError
- let y = 10;
- console.log(y); // Outputs: 10
