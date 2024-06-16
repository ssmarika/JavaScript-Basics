// ! ASYNCHRONOUS

// ? synchronous => existing or occurring at same time
// ? asynchronous => not existing or occurring at same time

// 1.node => single threaded
// 2.non-blocking => does not block code execution
// 3.real world scenario of code blocking
// for loop for billion times
// image processing
// Api request
// db operation

// u => ultra power saving
// H => HexaCore
// H => High performance
// k => unlocked
// 6 core simply means the laptop has 6 individual cpu
// hardware level ma CPU and software level ma thread ma divide
// 1 cpu is usually divided into 12 threads

// console.log("hi");

// setTimeout(() => {
//   console.log("Timeout");
// }, 1000);

// console.log("Hello");

// const multiply = (x, y) => x * y;

// ? example 2

// console.log("Nepal");

// setTimeout(() => {
//   console.log("Timeout1");
// }, 4000);

// setTimeout(() => {
//   console.log("Timeout2");
// }, 0);

// console.log("South Africa");

// ? OUTPUT
// Nepal
// South Africa
// Timeout2
// Timeout1

// ? example 3

// const multiply = (num1, num2) => {
//   return num1 * num2;
// };

// const square = (n) => {
//   const squareNumber = multiply(n, n);

//   return squareNumber;
// };

// const printNumber = () => {
//   const result = square(4);
//   console.log(result);
// };

// printNumber();

// !Function works under call stack
// unless the function is called it cannot enter the call stack

// ? Event loop
//  An event loop is a fundamental programming construct used in various contexts, particularly in
//  asynchronous programming and GUI applications. It allows a program to handle multiple events,
//  such as user input, network communication, or scheduled tasks, without blocking the execution
//  flow.

// ? Recursive function
// ! Error: maximum call stack size exceeded
const sayHi = () => {
  sayHi();
};

sayHi();
