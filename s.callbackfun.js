// ! CALL BACK

//function which is passed as an argument to another function

const getSum = (x, y, callBack) => {
  let sum = x + y;

  callBack(sum);
};

getSum(5, 6, (value) => console.log(value));

// ? function returning function

