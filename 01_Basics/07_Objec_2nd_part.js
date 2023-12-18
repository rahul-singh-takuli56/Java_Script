// const tinderUser1 = new Object(); // singleton obj
// Object are stored in the form of keys and values;
const tinderUser = {};

tinderUser.id = "123ddb"
tinderUser.name = "Rahul"
console.log(tinderUser);

const regularUser = {
    email: "Some@gmail.com",
    fullNmae: {
        userFullName: {
            firstName: "Rahul",
            lastName: "Singh"
        }
    }
}
// nesting is possible in object
console.log(regularUser.fullNmae.userFullName.firstName);
console.log(regularUser.fullNmae.userFullName.lastName);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    1: "a",
    2: "b",
}
// const obj3 = {obj1 , obj2}
// console.log(obj3);

const obj3 = Object.assign({}, obj1, obj2);
console.log(obj3);

const obj4 = { ...obj1, ...obj2 }; // spread opeator prefreed
console.log(obj4);


const users = [
    {
        id: 0,
        email: "Rahul@gmai.com"
    },
    {
        id: 1,
        email: "Singh@gmail.com"
    },
    {
        id: 2,
        email: "Rahul@gmai.com"
    },
    {
        id: 3,
        email: "Singh@gmail.com",
        firstName: "Rahul",
        lastName : "Singh"
    }
]

console.log(users[0].email);
console.log(users[3].lastName);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
