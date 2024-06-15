const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

// 2. increase price of dell laptop by 10%

const newlaptopList = laptopList.map((item) => {
  if (item.brand === "Dell") {
    let newprice = item.price * 1.1;

    return {
      ...item,
      price: newprice,
    };
  }
  return {
    ...item,
  };
});

console.log(newlaptopList);

// 5. get all the laptop whose price is below 1050

const laptopBelow = laptopList.filter((item, index, array) => {
  return item.price < 1050;
});

console.log(laptopBelow);

// 7. find the sum of prices of all laptops

const sum = laptopList.reduce((sum, item, index, array) => {
  sum = sum + item.price;

  return sum;
}, 0);

console.log(sum);
