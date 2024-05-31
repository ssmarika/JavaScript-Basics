// !FUNCTION

// ? DRY=> Do not Repeat Yourself
// ? code reusability
// ? reduce code redundancy
// ? single point of failure
// ? starts with verb

// ?syntax
// function function_name(){
//     some code
// }
// child scope can access the value through parent scope
// or the legit way via parameter

// function sayHello(name) {
//   console.log(`Hello ${name}`);
// }

// sayHello("Smarika");

// function getSum(x, y) {
//   let sum = x + y;
//   return sum;
// }

// console.log(getSum(2, 3));

// ?Arrow Function
// !one liner code

// access from differenct files
// used mostly in NODE

// const sayHi = (userName) => {
//   console.log(`Hi ${userName}`);
// };
// sayHi("Smarika");

// Default value
// const sayHi = (userName = "Smarika") => {
//   console.log(`Hi ${userName}`);
// };
// sayHi("Ram");
//   but Ram gets the priority

// Concept about scope
// const sayHi = (userName) => {
//   userName = "Mohan";
//   console.log(`Hi ${userName}`);
// };
// sayHi("Smarika");

// !one liner code

// const doProduct = (num1, num2) => num1 * num2;

// const result = doProduct(5, 6);
// console.log(result);

// WAF that checks wheteher a number is odd or even

// const oddEven = (num) => {
//   let res;
//   if (num % 2 === 0) {
//     res = "Even";
//   } else {
//     res = "Odd";
//   }

//   return res;
// };

// const result = oddEven(5);
// console.log(result);

// ?2nd way
// const isOddEven = (num) => (num % 2 == 0 ? "Even" : "Odd");

// const result = isOddEven(6);
// console.log(result);

// ?WAF to check polarity of a number

// const checkPloarity = (num) => {
//   let res;

//   if (num > 0) {
//     res = "Positive";
//   } else if (num < 0) {
//     res = "Negative";
//   } else {
//     res = "Zero";
//   }

//   return res;
// };

// const result = checkPloarity(-8);
// console.log(result);

const checkPolarity = (num) =>
  num > 0 ? "Positive" : num < 0 ? "Negative" : "Neutral";

const result = checkPolarity(-8);
console.log(result);
