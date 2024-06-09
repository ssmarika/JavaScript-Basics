// ! OBJECT

// two approach
// 1. direct Object
// 2. via class

// key_value pair
// collection of primary data type

// const studentDetail = {};
// console.log(studentDetail, typeof studentDetail);

// const obj1={};
// const obj2={};

// console.log(obj1===obj2); /false as they occupy different space

// key value pair example

// let studentDetail1 = {
//   firstName: "Ram",
//   lastName: "Joshi",
//   isGraduated: true,
//   permanentAddress: "Lalitpur",
//   temporaryAddress: "Patan",
// };

// console.log(studentDetail1);

// console.log(`My name is ${studentDetail1.firstName}`);

// Access Method
// ? dot operator
// ? square bracket operator

// console.log(studentDetail1.lastName);

// console.log(studentDetail1["lastName"]);

// CRUD
// C => Create/Add
// R => Read/Retrieve
// U => Update/Edit
// D => Delete/Remove

// ? Nested object , address here is the nested object
// let studentDetail2 = {
//   firstName: "Ram",
//   lastName: "Joshi",
//   isGraduated: true,
//   address: {
//     permanentAddress: "Lalitpur",
//     temporaryAddress: "Patan",
//   },
// };

// ? READ

// console.log(studentDetail2["address"]["permanentAddress"]);

// console.log(studentDetail2.address["permanentAddress"]);

// ? UPSERT( Update or Insert)
// studentDetail2.firstName = "Roashan";   //if the fiels is available it is updated
// studentDetail2.age = 10;   //if the field is not available then that fiels is inserted

// let nationDetail = {
//   name: "Nepal",
//   population: "3 crore",
//   perCapita: 1400,
// };

// ? DELETE
// delete nationDetail.perCapita;

// console.log(nationDetail);
