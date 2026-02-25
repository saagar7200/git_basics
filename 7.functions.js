//! function
// {}
//

// syntax
// function function_name () {
// block
// }

//! function declaration

// let x = 10
// function greet() {
//   console.log("Hello World");
// }

// // function invocation
// greet();
// greet();
// greet();
// greet();
// greet();
// greet();

// function add() {
//   let x = 10;
//   let y = 30;

//   console.log(x + y);
// }

// add()

// funtion with parameters & arguments
// function greet(name) {
//   console.log("Hello", name);
// }

// greet("Ram"); // ram
// greet("Shyam"); // shyam

// // add function with 2 parameters a & b
// function add(a, b) {
//   console.log(a + b);
// }

// add(12, 34);

//! default parameter
// function greet(name = 'Guest') {
//   console.log("Hello", name);
// }

// greet("Ram"); // ram
// greet("Shyam"); // shyam
// greet()

//! with return type
// function add(a = 0, b = 0) {
//     // console.log(a + b);
//   let sum = a + b;
//   return sum;
// }

// const x = add(12, 34); //
// console.log('x',x); //
// // add(12); //
// console.log(add(12,3)) //
// console.log(add())

//! function expression
// let x = 49 + 45

// let  var const

const add = function (a, b) {
  return a + b;
};

console.log(add(10, 15));
const result = add(23, 45);

// sub => declation & expression
function sub(a, b) {
  return a - b;
}
// subtract
const subtract = function (a, b) {
  return a - b;
};

//!  arrow function
// const mul =  (a,b) => {
//     return a * b
// }

const mul = (a, b) => a * b;
// const square =  a =>  a * a
// f(a,b) => return

// const result = mul(2,3)
// console.log(mul(12,3))

//!  callback function

const parent = function (callback) {
  console.log("parent");
  console.log(callback);
  const result = callback(10);
  console.log(result);
};

const child = function (a) {
  console.log("child function", a);
  return a * a;
};



parent(child);

// let x = 10
// add(10)
// console.log(add);
parent(function(a){
console.log('a')
})

//! higher order function

// const hof = () => {
//   console.log("Hof");

//   const child = () => {
//     console.log("child");
//   };

//   return child
// };

// const children = hof()

// children()


// calculate discount 

// student => 20%
// festival => 10%
// 


// const calculateDiscount = (price,logic) =>{
//   return logic(price)
// }


// const studentDiscount = (price) =>{
//   return price * 0.8
// }

// const festivalDiscount = (price) =>{
//   return price * 0.9
// }

// const studentDis = calculateDiscount(1000,studentDiscount)
// const festiveDis = calculateDiscount(1000,festivalDiscount)


// console.log(studentDis,festiveDis)

// let str = 'jhdfkjd'
// let st1 = "jhdfkjd"
// let str2 = `jdj sdfk
// sdnfjk
// sdfjk str ${str}`


//! IIFE -> immediatly invoked function expression

// (
//   function(){

//     console.log('IIFE')
//   }
// )()


//* generator

// function* generate (){
//   let i = 0
//   while(true){
//     yield i
//     i++
//   }
// }

// // console.log(generate())
// // console   
// const gen = generate()
// console.log(gen.next()) // 1
// console.log(gen.next()) //2
// console.log(gen.next()) //3
// console.log(gen.next())
// console.log(gen.next())


//! anonymous fuction




