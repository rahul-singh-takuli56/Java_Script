// objects can be declared in two ways: 
// -> Literal 
// -> Constructos

// Singleton -> Constructors se agr obj bnate hai to singleton bnta hai

// Object.create; one way to make obj using constructors


const JsUser = {
    name: "Rahul",
    "full Name": "Rahul Singh",
    age: 15,
    location: "Jaipur",
    email: "rahulsingh@gmail.com",
    IsLoggedOn: false,
    LastLoginIn: ["Monday", "Saturday"]
}

// accesing obje two ways
console.log(JsUser.name);
console.log(JsUser["age"]);


console.log(JsUser["full Name"]);
JsUser.email = "rahul@gmail.com"
// Object.freeze(JsUser); // freezed the value;

JsUser.email = "singh@gmail.com"
console.log(JsUser.email);

// function inside object
JsUser.greeting = function () {
    console.log("hello JS user");

}

JsUser.greeting = function2() {
    console.log(`hello JS user2, ${this.name}`);

}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

