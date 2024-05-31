// !Iteration
// to execute same code multiple times
// for
// while
// do... while

// ?  FOR LOOP
// syntax
// for(initial_value; CSSConditionRule; increment/decrement){
//     some code here
// }

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// Write a for loop to print the number from 100 to 50

// for (let i = 100; i >= 50; i--) {
//   console.log(i);
// }

// WAFL to find if a number is prime or not;

// let num = 11;
// let count = 0;

// for (i = 2; i < num; i++) {
//   if ((rem = num % i === 0)) {
//     count = count + 1;
//   }
// }
// if (count > 1) {
//   console.log("Number is not prime");
// } else {
//   console.log("Number is prime");
// }

// another method , more optimized process

// let num = 71;
// let isPrime = true;

// for (i = 2; i < num; i++) {
//   let rem = num % i;
//   if (rem === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(isPrime ? "Prime number" : "Composite number");

// ?WHILE LOOP

// ?syntax
// initial value
// while(condition){
//     code
//     increment/decrement
// }

// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// ?DO WHILE

// ?syntax
// do{
//     Code
//     Increment/decrement
// }while(condition)
// although the condition may not be true it will always run

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
