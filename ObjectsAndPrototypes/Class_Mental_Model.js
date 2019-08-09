
// // Object() based tests
// // -----------------------------------------------------------------------
// for (let k in Object.prototype) {
//   console.log(`enumerable prop - "${k}"`);
// }
// console.log("hasOwnProperty - " in Object.prototype);
// console.log("hasOwnProperty - ", Object.prototype.hasOwnProperty("hasOwnProperty"));
// console.log("Object.constructor - ", Object.constructor);
// console.log("Object.prototype.constructor - ", Object.prototype.constructor);
// console.log(Object.__proto__);
// // -----------------------------------------------------------------------


// // Object Literal based tests
// // -----------------------------------------------------------------------
// var Student = {};
// Object.defineProperty(Student, "name", { enumerable: true, value: "Deepak Pathak" });
// Object.defineProperty(Student, "age", { enumerable: true, value: 37 });
// Object.defineProperty(Student, "parents", { enumerable: false });

// for (let k in Student) {
//   console.log(k, Student[k]);
// }

// console.log("parents" in Student);
// // -----------------------------------------------------------------------


// // Function() based tests
// // -----------------------------------------------------------------------
function Student() {};

console.log(Student.prototype);
console.log(Student.__proto__);
console.log(Function.__proto__);





// // -----------------------------------------------------------------------