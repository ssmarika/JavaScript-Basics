// every
// some

const ageList = [11, 18, 38, 39, 9, 8];

// ?check if all users are adult or not

// let allAdult = true;
// ageList.forEach((item) => {
//   if (item <= 18) {
//     allAdult = false;
//   }
// });

const allAdult = ageList.every((item) => item >= 18);
console.log(allAdult);

const allAdult = ageList.some((item) => item >= 18);
console.log(allAdult);
