// Array is defined as the collection of different types of data tyeps;
const arry = [32, 3, 34, 4, 4, 4];
console.log(arry);

const arr2 = new Array(1, 23, 34, 4, 4);
console.log(arr2);
arr2.push(32);
console.log(arr2);
arr2.push(32434);
console.log(arr2);
arr2.pop(433434);
console.log(arr2);
arr2.unshift(342); // insert element at the starting of the array
console.log(arr2);
console.log(arr2[4]);

const newarr = arr2.join();
console.log(newarr);
console.log(arr2);
console.log(typeof arr2);

// slice , splice

console.log("A", arr2);
let myarr1 = [1, 2, 3, 4, 45, 6, 7, 8, 9, 6, 6, 54, 4]
console.log(myarr1.slice(1, 5)); // last index not include
console.log(myarr1.splice(1, 5)); // last index include it modified the array
console.log(myarr1)

console.log(myarr1.splice(0))
// The splice method in JavaScript not only modifies the original array by removing or replacing elements but also returns an array containing the removed elements.

const marvel = ["ironman", "captainamerica", "hulk"]
const dc = ["hero1", "hero2", "hero3"]
const cat = marvel.concat(dc);
console.log(cat);
console.log(cat.includes("hero1"));
