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

console.log("hi");

setTimeout(() => {
  console.log("Timeout");
}, 1000);

console.log("Hello");

const multiply = (x, y) => x * y;
