// ! CALL BACK

// ! Higher Order Function
// ?1. Call back function (function as an argument to another function)
// ?2. Closure function (function returning function)

//function which is passed as an argument to another function

const getSum = (x, y, callBack) => {
  let sum = x + y;

  callBack(sum);
};

getSum(5, 6, (value) => console.log(value));

// ? function returning function
// !closure => function + lexical environment(surrounding environment)

// const makeAdder = (x) => {
//   const doSum = (y) => {
//     let sum = x + y;

//     return sum;
//   };

//   return doSum;
// };

// this could also be written as
const makeAdder = (x) => (y) => x + y;

const sum = makeAdder(10)(10);
console.log(sum);

//? makeAdder here can also be called the function factory

// const doSum5 = makeAdder(5); //?dosum is returned here and doSum5 remembers 5
// const sum = doSum5(10);
// const doSum10 = makeAdder(10); //?doSUm is returned and doSum10 remembers 10
// console.log(sum);

// const doSum5 = makeAdder(5); //?dosum is returned here and doSum5 remembers 5
// const sum = doSum5(10);

// ?this could also be written as
// const sum = makeAdder(5)(10);
// console.log(sum);
