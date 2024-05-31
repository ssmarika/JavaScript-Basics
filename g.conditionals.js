// ?CONDITIONALS

// usually the code have sequential flow
// if
// if...else
// if...else if...else
// switch
// ternary

// ? if
// syntax
// if(condition){
// code
// }

// if (true) {
//   console.log("Code run");
// }

// ?if else
// syntax
// if(condition){
// code
// } else{
// code
// }

// if (true) {
//   console.log("Code 1");
// } else {
//   console.log("Code 2");
// }

// ? find if a number is odd or even

// let x = 2;

// if (x % 2 == 0) {
//   console.log(`${x} is even`);
// } else {
//   console.log( `${x} is odd`);
// }

// ?if ... else if ... else
// if (condition1){
//     code
// }else if (condition2){
//     code
// }else{
//     code
// }

// ?find polarity of a number
// let a = -12;

// if (a < 0) {
//   console.log(`${a} is negative`);
// } else if (a > 0) {
//   console.log(`${a} is positive`);
// } else {
//   console.log(`${a} is neutral`);
// }

// ?suppose any three positive number and find the greatest
// let a = 1;
// let b = 2;
// let c = 3;

// if (a > b && a > c) {
//   console.log(`${a} is greatest`);
// } else if (b > c) {
//   console.log(`${b} is greatest`);
// } else {
//   console.log(`${c} is greatest`);
// }

// ?SWITCH
// mostly preferred for multiple type question

// switch(variable)
// {
//     case value1:
//         Code;
//         break;

//     case value2:
//         Code;
//         break;

//     case valueN:
//         Code;
//          break;

//     default:
//     code;
// }
// case 1 simply means case===1

// let dayNumber = 10;

// switch (dayNumber) {
//   case 1:
//     console.log("Sunday");
//     break;

//   case 2:
//     console.log("Monday");
//     break;

//   case 3:
//     console.log("Tuesday");
//     break;

//   case 4:
//     console.log("Wednesday");
//     break;

//   case 5:
//     console.log("Thursday");
//     break;

//   case 6:
//     console.log("Friday");
//     break;

//   case 7:
//     console.log("Saturday");
//     break;

//   default:
//     console.log("Invalid dayNumber");
// }

// ?TERNARY
// condition ? expIfTrue : expIffalse

// let x = 5;

// let y = 5 % 2;

// y === 0 ? console.log("Even") : console.log("Odd");

// ?conditional ternary operator chaining example

let a = 0;

a < 0
  ? console.log("Neg")
  : a > 0
  ? console.log("Pos")
  : console.log("Neutral");
