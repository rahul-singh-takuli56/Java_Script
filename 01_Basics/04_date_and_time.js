let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

let mycreateDate = new Date("2023, 12, 4");
console.log(mycreateDate);
console.log(typeof myDate);


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(mycreateDate.getTime());

console.log(Math.floor(Date.now() / 100));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

