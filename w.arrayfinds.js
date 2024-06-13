// ? find
// finds first item n array which satisfies the condition
//  it returns value not array
//  if any item does not satisfy condition it returns undefined
//  terminates the loop as soon as condition is satisfied
//  optimized version of filter

// const numList = [-15, 25, 10, 55, -95, 63, 75];

// // ? find value greater than 20

// const value = numList.find((item, index, array) => {
//   return item > 20;
// });

// console.log(value);

const useList = [
  {
    id: 1,
    name: "Sam",
    email: "sam@gmail.com",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@gmail.com",
  },
  {
    id: 3,
    name: "Tim",
    email: "tim@gmail.com",
  },
  {
    id: 4,
    name: "Tom",
    email: "tom@gmail.com",
  },
  {
    id: 5,
    name: "tod",
    email: "tod@gmail.com",
  },
];

const newMail = useList.find((item, index, array) => {
  return item.email === "sam@gmail.com";
});

console.log(newMail);
