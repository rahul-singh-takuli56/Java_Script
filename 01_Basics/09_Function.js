function func() {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

func; // refernce given 
func(); // function call

function addTwoNum(num1, num2) { // paramters -> white declaring funciton 
    console.log(num1 + num2);
}
addTwoNum(2, null); // arguments -> calling funcitno 
const ans = addTwoNum(4, 6);
console.log(ans);

function addTwonum(num1, num2) {
    return num1 + num2;
}
const ans2 = addTwonum(4, 3);
console.log(ans2);

function loginusermessage(username = "Sam") {
    // if(username === undefined){
    //     console.log("Please enter the username");
    //     return ;
    // }
    return `${username} Just logged in`;
}

const ans4 = loginusermessage("Rahul");
console.log(ans4);

// IMP
function calculateCatPrice(val1, val2, ...num1) { // ...rest operator -> return all the element in the bundle
    return num1;
}

console.log(calculateCatPrice(3, 33, 4, 4, 2, 5, 2, 3, 3, 5));
// val1 = 3, val2 = 33;

const user = {
    usename: "Rahul",
    price: 233
}

function handleObj(anyObj) {
    console.log(`Usernmae is ${anyObj.username} and the Price is ${anyObj.price}`);
}

// handleObj(user)
handleObj({
    username: "Rahul singh ",
    price: 53948
})

