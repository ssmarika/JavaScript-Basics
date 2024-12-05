// ? filters
// returns new array
// there is high change of
// original array length !== returned array length
// it select/deselect value
// it does not change items of array
// discards undefined which could be seen in map
// if the condition in the return sectipn is true then onl;y it returns the value
// basically if the return value is a truthy value it returns that particular element of the array to the new array
// return ma bhayeko value le bhanda tyo value truthy cha ki falsy cha tesle chai kei kura return garne ki nagarne bhanera determine garcha
// condition must be satisfied to return any item
// use concept of truthy and falsy value
// order of item, index and array is extremely important

// const numList = [1, 2, 3, -4, -5, -6, 7, 8];

// const newnumList = numList.filter((item, index, array) => item > 0);

// console.log(newnumList);

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

const newproductList = productList.filter((item) => {
  return item.price < 10;
});

console.log(newproductList);
