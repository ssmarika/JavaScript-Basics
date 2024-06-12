// ! ARRAY

// statically typed langage => c, c++, java
// here array is the collection of data of same type

// dynamic language => js. python
// here array is collection ofdifferent datatype

// const x = [1, "hello", null, undefined, { name: "Ram" }];

// console.log(x, typeof x);

// ? in real world context, we use array with same data type

// ? names are usually in pular

// const temperatureList = [10, 20, 30];

// console.log(temperatureList);

// const nations = ["nepal", "india", "china"];

// console.log(nations);

// ?values in array can be accessed using index
// ?index always starts with 0

// const laptopBrands = ["HP", "Lenovo", "Apple", "Asus"];

// console.log(laptopBrands[4]);

// ?property of array
// ?typeof of array is object, the key here is index
// console.log(laptopBrands.length);

// const bakeryItem = ["black forest", "white forest", "caramel", "black current"];

// for (i = 0; i < bakeryItem.length; i++) {
//   console.log(bakeryItem[i]);
// }

const obj = {
  0: "Apple",
  1: "Banana",
  2: "Orange",
  3: "Mango",
};

console.log(obj[0]);

// ?array actually does not exist, to refrain from using the numeric values as key we rather use array

