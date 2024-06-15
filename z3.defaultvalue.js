// ! DEFAULT VALUE
// users preference is always higher than the default value
// are to be kept at the end usually

// const getSum = (z, x = 0, y = 0) => {
//   let sum = z + x + y;

//   return sum;
// };

// result = getSum(2, 3);

// console.log(result);

// const greetUser = (userName = "User") => {
//   console.log(`Good morning ${userName}`);
// };

// // greetUser("Smriti");

// greetUser();

const greetUser = (userName) => {
  console.log(`Good morning ${userName || "User"}`);
};

greetUser("Sam");
