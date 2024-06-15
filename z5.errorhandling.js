// ! ERROR HANDLING
// error is inevitable

// ? error example

// const x = 2;
// x = 5;
// console.log("Hi");

// const x = 2;
// try {
//   x = 5;
// } catch (error) {
//   console.log(error.message);
// }
// console.log("Hi");

// const x = 2;   // let x=2;
// try {
//   x = 5;
//   console.log("Hit");
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Send email");
// }
// console.log("Hi");

// ?Example 2

let user = null;
try {
  if (!user) {
    throw new Error("User does not exist");
  }

  console.log("Hello");
} catch (error) {
  console.log(error.message);
}
