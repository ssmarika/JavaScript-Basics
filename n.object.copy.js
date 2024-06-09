// ! OBJECT

// const print = (values) => {
//   console.log(values);
// };

// const student1 = {
//   name: "Mohan",
//   college: "LA",
//   isGraduated: true,
//   image: null,
// };

// print(student1);

// ?shallow copy
// const student2 = student1;

// console.log(student2);

// student2.name='Neha';
// this changes both student1 and student2 content
// doing so student2 simply copies the address of student1
// only object is created in RAM stuent2 only references student1

// ? spread operator (...)

// ?example1
// const student2 = { ...student1 };
// student2.name = "Rima";
// this creates a new object student2 and copies or spreads th value of student1

// ?example2
// doesnot apply for nested object
// const studen1={
//     name: 'Punam',
//     address: {}
// }
// const student2={... student1};

// ?deep copy
// structuredClone
// creates two different objects in this case

// const student2= structuredClone(student1);
