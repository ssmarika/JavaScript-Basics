// ! CONSTANT

// in js constant cannot be reassigned

// const x=1;
// x=2;

// throws error

// ? Mutation => process of having change
// mutate => change
// mutable => changeable
// immutable => unchangable

// ?primary data type(string, number, boolean, undefined, null) => cannot be reassigned , thus immutable
// ?non primary data => cannot be reassigned but mutable

// ? immutable
// const isDeveloped= false;
// isDeveloped= true;

// const phoneDetail = {
//   brand: "Samsung",
// };

// phoneDetail.brand = "apple";

// console.log(phoneDetail.brand);

// here do not reassign we simply changed the value but has not been reassigned
// phoneDetail= this cannot be done
// value change garna milyo but reassign garna milena

// FREEZE
// content cannot be changed

// const obj1 = Object.freeze({
//   name: "Ram",
// });

// obj1.name = "Rohan";

// console.log(obj1);

// Todo: after array
// const obj1 = {
//   name: "A",
// };

// const obj2 = {
//   name: "B",
// };

// const obj1Keys= Object.keys(obj1);
