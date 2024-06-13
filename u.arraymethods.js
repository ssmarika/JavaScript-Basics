// ? map, filter, find, findIndex, reduce
// ? loop based

let studentList = ["Ram", "Hari", "Mohan", "Shyam", "Mina", "Bina"];

// ? map
// ?it is to be used in such cases when we need the result of same size as the original but the value is somehow differed
// ? it returns new array of the very same size
// ? to alter values of array
// ? original array length ===returned array length

// const newStudentList = studentList.map((item, index, array) => {
//   //   console.log(item, index, array);

//   return array;
// });

// console.log(newStudentList);

// const newStudentList = studentList.map((item, index, array) => {
//   let uppercaseName = item.toUpperCase();

//   return uppercaseName;
// });

// console.log(newStudentList);

const priceList = [12, 10, 90, 80, 67];

// increase price of every item by three dollar

// const newpriceList = priceList.map((item, index, array) => {
//   let price = item + 3;

//   return price;
// });

// console.log(newpriceList);

// one liner
// const newpriceList = priceList.map((item) => item + 3);

// console.log(newpriceList);

const productList = [
  {
    id: 1,
    name: "Night vision glass",
    price: 10,
  },
  {
    id: 2,
    name: "Helmet",
    price: 13,
  },
  {
    id: 3,
    name: "Gloves",
    price: 5,
  },
];

const newproductList = productList.map((item, index, array) => {
  let newPrice = item.price * 1.1;

  return {
    id: item.id,
    name: item.name,
    price: newPrice,
  };
});

console.log(newproductList);
