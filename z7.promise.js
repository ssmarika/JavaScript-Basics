// ! PROMISE
// something that happens in future
// will tell that the result will be provided in future
// await will make you wait till the result is provided

// ? tri state
// ? pending
// ? success
// ? failure

// ? to get result, we need to resolve promise

// ? 1. call back function

// const getSum = (a, b) => {
//   return a + b;
// };

// getSum(2, 5);

// ? 2. .then .catch
// ? 3. async await
// await in front of task that takes time
// await should be wrapped by a async function
// from error handling => try catch is udsed

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.random();

    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject("Too small number");
    }
  }, 2000);
});
