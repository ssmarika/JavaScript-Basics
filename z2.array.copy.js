// ! ARRAY COPY

// const nations = ["Nepal", "India", "China"];

// ?shallow copy
// const newNation = nations;
// newNation[0] = "USA";
// console.log(newNation);
// console.log(nations);

// ?shallow copy
// ?spread operator
// const newNation = [...nations];
// newNation[0] = "USA";
// console.log(newNation);
// console.log(nations);

// ?deep copy

// const newNation = structuredClone(nations);

// ! REST OPERATOR  (sir ko git ma refer)

const getProduct = (x, y, ...otherValues) => {
  let prod = otherValues.reducez((total, item) => {});

  return prod;
};

const result = getProduct(1, 2, 3, 4, 5, 6);

console.log(result);
