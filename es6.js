//1. let const / block scope

//2. template literal
// ``

//3. arrow function

//4. default parameter

//5. promises

//6. async/await => 2017

//7.  class

//8. import/export

//9. spread & rest operator [...]
//? spread [...]  => expand =>obj/array copy
// obj
const user = {
  name: "john Doe",
  phone: "123456543",
};

let user2 = {
  email: "john@gmail.com",
};
let newUser = { ...user, ...user2 };
newUser.name = "abc";
console.log(newUser);
console.log(user);

// array
let numbers = [1, 2, 3, 4, 5];
let newArr = [...numbers];
newArr.push(34, 54);
console.log(numbers, newArr);
const arr = [...numbers, ...newArr];
console.log(arr);

//? rest [...] => accumulate

const add = (...numbers) => {
  //   return a + b + c;
  console.log(numbers);
  //   return numbers.reduce((acc, value) => {
  //     return (acc += value);
  //   });
  return numbers.reduce((acc, value) => (acc += value));
  //   return sum
};

console.log("sum", add(12, 3, 4, 34, 45));

//10. destructuring

const obj = {
  name: "john Doe",
  phone: "123456543",
};
// let userName = obj.name;
// let phone = obj.phone;
// let { name, phone } = obj;
let { name: userName, ...rest } = newUser;

console.log(rest);
console.log(userName, phone);

// const func = ({ name, email }) => {
//   //   console.log(obj.name, obj.email);
//   console.log(name, email);
// };

// func({ name: "abc", email: "abc@gmail.com" });

const func = ([name, email]) => {
  console.log(name, email);
};
func(["abc", "abc@gmail.com"]);

// array
const array = [23, 4, 5];
let [a, ...other] = array;
console.log(a, other);

//11. enhanced object literal => {}
let name = "john";
let password = "12345678";
let email = "john@gmail.com";

let newObj = {
  name,
  email,
  password,
};
console.log(newObj);
