// ! OBJECT DESTRUCTURE

//change the side of the object name and the keys without key value

// const bookDetail = {
//   name: "Operating System",
//   author: "A. Tanenbaum",
//   publishedDate: "1990/01/10", // limitation no date data type
//   numberOfPages: 500,
//   coverPhoto: null,
//   price: undefined,
// };

// const { name, author, publishedDate, numberOfPages, coverPhoto, price } =
//   bookDetail;  // only enumerate the ones tht you need

// console.log(author);

// ?Example 2

// const obj1 = {
//   name: "Cup",
//   price: 100,
// };

// const obj2 = {
//   name: "Mat",
//   price: 1000,
// };

// const { price } = obj1;

// const { price: price2 } = obj2; //renaming of object

// console.log(price);

// console.log(price2);

//? Example 3

// const studentDetail2 = {
//   firstName: "Ram",
//   lastName: "Joshi",
//   isGraduated: true,
//   address: {
//     permanentAddress: "Lalitpur",
//     temporaryAddress: "Patan",
//   },
// };

// const {
//   firstName,
//   lastName,
//   isGraduated,
//   address: { permanentAddress, temporaryAddress },
// } = studentDetail2;

// console.log(permanentAddress);
