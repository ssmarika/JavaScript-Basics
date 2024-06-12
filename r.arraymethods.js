// ! ARRAY METHODS

// push, pop, shift, unshift, reverse

// ? push => to add element(s) to end of array
// ? pop => to remove element from end of array
// both change the original array

// const numList = [10, 11, 12];

// numList.push(13, 14, 15);

// console.log(numList);

// numList.pop();

// console.log(numList);

// ? shift =>  to remove first item from array
// ? unshift => to add items at starting of array

// let studentList = ["Ram", "Shyam", "Hari", "Mohan"];

// studentList.shift();

// studentList.unshift("Bina", "Mina");

// console.log(studentList);

// ? reverse => reverse order of item in array

// const priceList = [12, 13, 14];

// priceList.reverse();

// console.log(priceList);

// const newPriceList = priceList.toReversed();

// console.log(newPriceList);

// ? include => checks whether array contains specific value or not
// results in boolean
// === equivalent

// const laptops = ["Genbook", "Mac Book", "Nitro 6"];

// let res = laptops.includes("Hp");

// console.log(res);

// const currentRoute = "/user/edit/1";
// const result = currentRoute.includes("edit");
// console.log(result);

//? slice
// returns a new portion of array from original array
// it does not change original array
// when given start and end it includes the start but the end index is not included

// const animals = ["Ant", "Bison", "Camel", "Duck", "Elephant"];

// const newList = animals.slice(2, 4);
// console.log(newList);

// ? splice
// remove or replace existing item

// const months = ["Jan", "Feb", "March", "April"];
// months.splice(3); //removes item from the given index
//months.splice(2, 1); //(start index, delete count)
// months.splice(1, 0, "Jan1", "Jan2");

// console.log(months);

// ? sort

// const student = ["Ram", "Shyam", "Hari", "Mohan"];

// student.sort();
// student.sort().reverse();
// console.log(student);

const numList = [1, 22, 11, 2, 3];

//numList.sort(); // follows dictionary sort

numList.sort((a, b) => a - b); //ascending sort
numList.sort((a, b) => b - a); //descending sort

console.log(numList);
